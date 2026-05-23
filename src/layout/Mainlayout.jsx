import { Outlet, useLocation } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { useEffect } from "react"


const Mainlayout = () => {
    const location = useLocation()

    //auto scroll to top

    useEffect(() => {
        if (!location.hash) {
            window.scrollTo(0, 0)
        }
    }, [location])
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Mainlayout