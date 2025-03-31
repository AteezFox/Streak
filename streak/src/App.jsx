import './App.css';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserProfile from "./assets/Role/User/UserComponents/UserProfile/UserProfile.jsx";
import Body from "./assets/Components/PageBody/Body.jsx"
import UserInterface from "./assets/Role/User/UserComponents/UserInterface/UserInterface.jsx";
import ErrorPage from "./assets/Role/User/UserComponents/ErrorPage/ErrorPage.jsx";
import Orders from "./assets/Role/User/UserComponents/Orders/Order.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Body />} index={true} />
                <Route path="/yourhome" element={<UserInterface/>} />
                <Route path="/profile" element={<UserProfile />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="*" ErrorBoundary={true} element={<ErrorPage />} />
            </Routes>
        </Router>
    );
}

export default App;