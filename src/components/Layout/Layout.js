import React from "react";
import "assets/main-css/Bootstrap.grid.css";
import "assets/main-css/Layout.css";
import Header from "./Header";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
};

export default Layout;
