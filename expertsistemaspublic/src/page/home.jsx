import "./js/home.js"
import Loader from "../component/Loader"
import NavBarExpert from "../component/NavBar.js"

import Introduction from "../pages/home/ introduction.jsx"
export default function Home()
{
    return (
        <>
        <Loader/>
        <NavBarExpert/>
        <Introduction/>
        </>
        
    )
}