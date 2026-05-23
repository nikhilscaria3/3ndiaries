import { Outlet, useLocation } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { useEffect } from "react"

const isBrowser = () => typeof window !== "undefined" && !!window.document;

const Mainlayout = () => {
    const location = useLocation()

    //auto scroll to top

    useEffect(() => {
        if (!isBrowser()) return;

        // Use instant scroll (no smooth behavior issues)
        window.scrollTo(0, 0);
    }, [location.pathname]);


    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Mainlayout