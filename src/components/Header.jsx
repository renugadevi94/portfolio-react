import React from "react";
import { Navbar } from "./Navbar"; 

import "./header.css";

export const Header = () => {
  return (
    <header className="header fixed-top">
     <Navbar /> 
    </header>
  );
};