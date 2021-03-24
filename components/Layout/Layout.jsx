import React from "react";

import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";

import style from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={style.container}>
      <Header />
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
