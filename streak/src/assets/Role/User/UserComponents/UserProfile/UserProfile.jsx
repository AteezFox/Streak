import { Container, Box, Typography, Button } from "@mui/material";
import {useNavigate} from "react-router-dom";
import styles from "./userprofie.module.css";
import UserNav from "../UserNavbar/UserNav.jsx"
import User from "../../UserUser/User.jsx"

export default function UserProfile(){
    return(
        <>
            <UserNav />
            <Container className={styles.container}>
                <div className={styles.body}>
                    <User />
                </div>
            </Container>
        </>
    )
}