import './App.css';
import UserInterface from "./assets/Role/User/UserComponents/UserInterface/UserInterface.jsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import UserProfile from "./assets/Role/User/UserComponents/UserProfile/UserProfile.jsx";

function App() {
    return (
        <Router>
            <UserInterface />
            <Routes>
                <Route path={"/"} element={<UserInterface />}></Route>
                <Route path={"/profile"} element={<UserProfile />}></Route>
            </Routes>
        </Router>
    );
}

export default App;