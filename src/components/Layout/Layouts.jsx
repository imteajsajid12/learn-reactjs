import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import {Outlet} from "react-router-dom";

export const Layouts = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}