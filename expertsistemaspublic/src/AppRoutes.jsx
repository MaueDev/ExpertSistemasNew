import {BrowserRouter as Router, Route,Routes,Navigate} from "react-router-dom";

/*Pages*/
import Home from "./page/home";
/*Pages*/

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}></Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes;