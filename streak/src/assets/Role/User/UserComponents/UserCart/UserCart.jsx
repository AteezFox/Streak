import { IconButton, Badge, Drawer, Container } from "@mui/material";
import React from "react"
import { useState, } from "react"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styles from './usercart.module.css'

export default function UserCart(){
    const [isSideOpen, setIsSideOpen] = useState(false);

    const toggleSide = () => {
        setIsSideOpen(!isSideOpen);
    }

    return (
        <>
            <IconButton 
                color="inherit" 
                onClick={toggleSide}
                edge="end"
                className={styles.cart}
                >
                    <Badge /*badgeContent={}*/ color="error">
                                    <ShoppingCartIcon />
                    </Badge>
            </IconButton>
            <Drawer variant="temporary" anchor="bottom" open={isSideOpen} onClose={toggleSide} className={styles.drawer}>
                <Container>
                    <h1>
                        Kosár
                    </h1>
                </Container>
            </Drawer>
        </>
    )
}