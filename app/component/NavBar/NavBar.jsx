import React from 'react'
import Link from 'next/link';
import style from  './NavBar.module.css'
const links = [
    {
      label: "Home",
      route: "/",
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
    <li className={style.navbarItem}>
      <a href="#" className={style.navbarLink}>Home</a>
    </li>
    <li className={style.navbarItem}>
      <a href="#" className={style.navbarLink}>Favorites</a>
    </li>
    <li className={style.navbarItem}>
      <a href="#" className={style.navbarLink}>About</a>
    </li>
  </ul>
</nav>
        {/* <nav>
          <ul>
            {links.map(({ label, route }) => (
              <li key={route}>
                {" "}
                <Link href={route}>{label} </Link>{" "}
              </li>
            ))}
          </ul>
        </nav> */}
      </header>
  )
}

export default NavBar