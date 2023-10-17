"use client";
import Link from "next/link";
import Icon from "../../Icon/Icon";
import classes from "./navBar.module.css";
import { convertLinkString } from "@/app/utils";
import { usePathname } from "next/navigation";
import IconWithImages from "../../IconWithImages/IconWithImages";

type NavBarProps = {
  withHome: boolean;
  hasPipes: boolean;
  linkTitles: string[];
  father?: string;
  withLanguaje?: boolean
};

const NavBar = ({
  withHome,
  hasPipes,
  linkTitles = [],
  father,
  withLanguaje,
}: NavBarProps) => {
  const pathName = usePathname();

  return (
    <div>
      <nav>
        <ul
          className={`${classes.navBar} ${father === "footer" && !hasPipes ? classes.navBarFooter : father === 'header' && classes.navBarHeader
            }`}
        >
          {withHome && (
            <li className={`${father === 'footer' && classes.navBar__home}`}>
              <Link className={classes.navBar__link} href="/">
                <Icon name="home" size={20} />
              </Link>
            </li>
          )}

          {linkTitles.map((link: string, index: number, array: string[]) => {
            return (
              <li key={link + index}>
                <Link
                  className={`font-w-500 ${hasPipes && classes.navBar__linkWithPipes
                    } ${`/dashboard/${convertLinkString(link)}` === pathName
                      ? classes.navBar__link && classes.active
                      : classes.navBar__link
                    }`}
                  href={
                    link.toLowerCase().includes("bencen")
                      ? "/"
                      : `/dashboard/${convertLinkString(link)}`
                  }
                >
                  {link}
                </Link>
                {hasPipes && array.length - 1 !== index && (
                  <span className={`${classes.navBar__pipes}`}> | </span>
                )}
              </li>
            );
          })}
          {
            withLanguaje && (
              <li className={`${father === 'footer' && classes.navBar__home}`}>
                <div>
                  <IconWithImages name='language' size={30} />
                </div>
              </li>
            )
          }
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
