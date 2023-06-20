import React from "react";
import Link from "next/link";
import style from "./NavBar.module.css";
const links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Favorites",
    route: "/favorites",
  },
  {
    label: "About",
    route: "/about",
  },
];

const NavBar = () => {
  return (
    <header>
      <nav className={style.navbar}>
        <ul className={style.navbarList}>
          {links.map(({ label, route }) => (
            <li key={route} className={style.navbarItem}>
              {" "}
              <Link href={route} className={style.navbarLink}>
                {label}{" "}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
