import React from "react";

import style from "./header.module.css";

const Header = () => {
  return (
    <div className={style.container}>
      <div>logo</div>
      <div>
        <div>About</div>
        <div>Contact</div>
      </div>
    </div>
  );
};

export default Header;
