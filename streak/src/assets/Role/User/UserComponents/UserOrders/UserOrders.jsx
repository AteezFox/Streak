import { Container, Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import UserNav from "../UserNavbar/UserNav.jsx";
import styles from "./userorders.module.css";

export default function UserOrders(){

    const navigate = useNavigate();

    return(
        <>
            <UserNav />
            <Container className={styles.container}>
                <div className={styles.body}>
                    <h1>
                        Itt lesznek a rendelések
                    </h1>
                </div>
            </Container>
        </>
    )
}