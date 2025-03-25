import UserNav from "../UserNavbar/UserNav.jsx";
import styles from "./userinterface.module.css";
import { Container, Button } from "@mui/material";

export default function UserInterface() {
    return (
        <>
            <UserNav />
            <Container className={styles.container}>
                <div className={styles.body}>
                    <h3>
                        Mostanában vásároltál ezekben:

                    </h3>
                    <br/>
                    <p>
                        *IDE RANDOM BOLTOK FILLERNEK*
                    </p>
                    <h3>
                        Boltok a környékeden:
                    </h3>
                    <br/>
                    <p>
                        *IDE RANDOM BOLTOK FILLERNEK*
                    </p>
                </div>
            </Container>
        </>
    );
}
