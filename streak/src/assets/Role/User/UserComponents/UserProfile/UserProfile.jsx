import { Container, Box, Typography, Button } from "@mui/material";
import {useNavigate} from "react-router-dom";
import styles from "./userprofie.module.css";
import UserNav from "../UserNavbar/UserNav.jsx"

export default function UserProfile(){
    return(
        <>
            <UserNav />
            <Container className={styles.container}>
                <div className={styles.body}>
                    <h1>Itt lesz a profile</h1>
                </div>
            </Container>
        </>
    )
}