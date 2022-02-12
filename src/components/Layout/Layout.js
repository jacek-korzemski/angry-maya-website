import React from "react";
import Header from "./Header";
import "assets/main-css/mini.css";
import "assets/main-css/layout.css";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
};

export default Layout;
