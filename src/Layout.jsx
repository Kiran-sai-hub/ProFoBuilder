import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router";

function Layout(){

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;

// // Outlet is the dynamic part as Header and footer 
// will be same for all the pages the center part will be replaced by outlet in the Index file
// see index file(main.jsx) for more Info... 