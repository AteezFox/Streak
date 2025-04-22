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
import CompanySite from './assets/Role/Company/CompanyComponents/CompanySite/CompanySite.jsx';
import Summary from "./assets/Role/Order/OrderComponents/SummaryOrder/Summary.jsx"
import Editor from "./assets/Role/Admin/AdminComponents/Editors/Editor.jsx"

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Body />} index={true} />
                <Route path="/:id/:userType/home" element={<UserInterface/>} />
                <Route path="/:id/:userType/profile" element={<UserProfile />} />
                <Route path="/:id/:userType/orders" element={<Orders />} />
                <Route path="*" ErrorBoundary={true} element={<ErrorPage />} />
                <Route path=":id/:userType/dashboard" element={<AdminDash />} />
                <Route path=":id/:userType/dashboard" element={<CeoDash />} />
                <Route path="/:id/:userType/dashboard" element={<CourierDash />} />
                <Route path='/products' element={<CompanySite />} />
                <Route path='/summary' element={<Summary />}/>
                <Route path='/edit/id' element={<Editor />}/>
            </Routes>
        </Router>
    );
}

export default App;