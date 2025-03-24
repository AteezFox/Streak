import UserNav from "../UserNavbar/UserNav.jsx";
import { Routes, Route } from "react-router-dom";
import UserProfile from "../UserProfile/UserProfile.jsx";

export default function UserInterface() {
    return (
        <>
            <UserNav />
            <Routes>
                <Route path="/profile" element={<UserProfile />} />
            </Routes>
        </>
    );
}
