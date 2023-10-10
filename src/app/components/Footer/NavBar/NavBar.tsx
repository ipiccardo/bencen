import Link from "next/link";
import Icon from "../../Icon/Icon";
import classes from "./navBar.module.css";

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul className={classes.navBar}>
          <li>
            <Link href="/">
              <Icon name="home" size={18} />
            </Link>
          </li>
          <li>
            <Link href="/dashboard/aboutUs">About Us</Link>
          </li>
          <li>
            <Link href="/dashboard/contact">Contact</Link>
          </li>
          <li>
            <Link href="/dashboard/news">News</Link>
          </li>
          <li>
            <Link href="/dashboard/projects">Projects</Link>
          </li>
          <li>
            <Link href="/dashboard/services">Services</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
