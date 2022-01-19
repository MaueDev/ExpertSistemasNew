import "./js/home.js"
import "./css/home.css"
import Loader from "../component/Loader"
import NavBarExpert from "../component/NavBar.js"


import Introduction from "../pages/home/ introduction.jsx"
import OSoftware from "../pages/home/osoftware.jsx"
export default function Home()
{
    return (
        <>
        <Loader/>
        <NavBarExpert/>
        <Introduction/>
        <OSoftware/>
        </>
        
    )
}