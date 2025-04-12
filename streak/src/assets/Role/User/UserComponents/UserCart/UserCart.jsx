import { IconButton, Badge, Drawer } from "@mui/material";
import React from "react"
import { useState, } from "react"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
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
                                >
                                    <Badge /*badgeContent={}*/ color="error">
                                        <ShoppingCartIcon />
                                    </Badge>
                                </IconButton>
            <Drawer variant="temporary" anchor="bottom" open={isSideOpen} onClose={toggleSide}>
                <h1>Kosár</h1>
            </Drawer>
        </>
    )
}