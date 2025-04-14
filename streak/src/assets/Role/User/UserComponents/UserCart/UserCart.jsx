import { IconButton, Badge, Drawer, Container, Typography} from "@mui/material";
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
                <Container className={styles.container}>
                    <Typography className={styles.title} component={"h1"}>Kosár</Typography>
                    <Typography className={styles.desc}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat omnis rerum corporis nobis et! Cumque magnam odio laboriosam repellendus libero. Quia libero quibusdam consequuntur quam blanditiis saepe cumque consectetur corporis.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem ducimus id, culpa ratione impedit molestiae alias at dolorum voluptate quidem aut eveniet maxime sint, harum aliquid hic! Necessitatibus, sit omnis?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, non? Exercitationem debitis, aliquam in quas qui quidem omnis, neque consequatur, laboriosam cupiditate laborum corporis ea ipsam molestias. Fugit, odio reprehenderit.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi iure explicabo quos esse, nam et ducimus, iusto soluta eos dolorem nobis ut. Nulla ipsa odio sapiente beatae ea labore recusandae.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam doloremque repudiandae qui soluta aliquam officiis earum. Id error molestiae voluptate numquam enim rerum iusto deserunt. Perspiciatis voluptatibus labore quos tempore!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae minus quas vitae iusto neque assumenda harum impedit, nobis adipisci laboriosam aut delectus eius quia, numquam quod aliquam eaque a ducimus!
                    </Typography>
                </Container>
            </Drawer>
        </>
    )
}