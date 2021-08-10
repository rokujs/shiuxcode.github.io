import React from "react";

import Header from "../Header";

import style from "./styles.module.css";

const Layout = ({ children }) => {
  return (
    <div className={style.container}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
