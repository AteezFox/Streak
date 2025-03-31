import './App.css';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserProfile from "./assets/Role/User/UserComponents/UserProfile/UserProfile.jsx";
import Body from "./assets/Components/PageBody/Body.jsx"
import UserInterface from "./assets/Role/User/UserComponents/UserInterface/UserInterface.jsx";
import ErrorPage from "./assets/Components/ErrorPage/ErrorPage.jsx";
import Orders from "./assets/Role/User/UserComponents/UserOrders/UserOrders.jsx";
import AdminDash from "./assets/Role/Admin/AdminComponents/AdminDashboard/AdminDash.jsx";
import CeoDash from "./assets/Role/Ceo/CeoComponents/CeoDashboard/CeoDash.jsx";
import CourierDash from "./assets/Role/Courier/CourierComponents/CourierDashboard/CourierDash.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Body />} index={true} />
                <Route path="/yourhome" element={<UserInterface/>} />
                <Route path="/profile" element={<UserProfile />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="*" ErrorBoundary={true} element={<ErrorPage />} />
                <Route path="/admin" element={<AdminDash />} />
                <Route path="/ceo" element={<CeoDash />} />
                <Route path="/courier" element={<CourierDash />} />
            </Routes>
        </Router>
    );
}

export default App;