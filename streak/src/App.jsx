import './App.css';
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import UserProfile from "./assets/Role/User/UserComponents/UserProfile/UserProfile.jsx";
import Body from "./assets/Components/PageBody/Body.jsx"
import UserInterface from "./assets/Role/User/UserComponents/UserInterface/UserInterface.jsx";

function App() {
    return (
        <Router>
            <UserInterface />
            <Routes>
                <Route path="/" element={<Navigate to="/main" />} />
                <Route path="/main" element={<Body />} />
                <Route path="/profile" element={<UserProfile />} />
            </Routes>
        </Router>
    );
}

export default App;