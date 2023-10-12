import Link from "next/link";
import Icon from "../../Icon/Icon";
import classes from "./navBar.module.css";
import { convertLinkString } from "@/app/utils";

type NavBarProps = {
  withHome: boolean;
  hasPipes: boolean;
  linkTitles: string[];
};

const NavBar = ({ withHome, hasPipes, linkTitles = [] }: NavBarProps) => {
  return (
    <div>
      <nav>
        <ul className={classes.navBar}>
          {withHome && (
            <li>
              <Link className={classes.navBar__link} href="/">
                <Icon name="home" size={20} />
              </Link>
            </li>
          )}
          {linkTitles.map((link: string, index: number) => {
            return (
              <li key={link + index}>
                <Link
                  className={classes.navBar__link}
                  href={`/dashboard/${convertLinkString(link)}`}
                >
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
