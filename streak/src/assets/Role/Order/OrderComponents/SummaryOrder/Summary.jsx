import React from "react";
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Box from "@mui/material/Box"
import UserNav from "../../../User/UserComponents/UserNavbar/UserNav";
import styles from "./summary.module.css"



export default function Summary() {
    return (
        <>
            <UserNav />
            <Container className={styles.container}>
                <Typography className={styles.body}>
                    <Typography variant="h1" className={styles.title}>
                        Összegzés
                    </Typography>
                    <Typography variant="p" className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis explicabo nihil veniam culpa deserunt ipsum modi ullam reiciendis eum cumque quaerat voluptatibus in perspiciatis aut nesciunt esse, quidem ex labore?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum similique, vitae dicta molestias in molestiae optio ducimus! Culpa possimus ipsum rerum excepturi aliquid reprehenderit debitis, molestias nulla ipsa, saepe error!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sapiente tenetur fugit velit dolorum. Sit tempora nobis doloribus molestias sequi saepe aperiam aut, minus quo similique debitis vitae aspernatur cum!
                    </Typography>
                    <Button>Fizetés</Button>
                </Typography>
            </Container>
        </>
    )
}