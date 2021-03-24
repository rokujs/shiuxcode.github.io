import React from "react";
import Link from "next/link";

import style from "./header.module.css";

const Header = () => {
  return (
    <div className={style.container}>
      <nav className={style.menu}>
        <Link href="/">
          <a>About</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
        <Link href="/skills">
          <a>Skills</a>
        </Link>
        <Link href="/Projects">
          <a>Portfolio</a>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
