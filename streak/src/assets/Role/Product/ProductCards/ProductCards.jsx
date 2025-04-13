import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { CardActions, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveIcon from '@mui/icons-material/Remove';
import styles from './productcards.module.css';


export default function ProductCards() {
    const prod = [
        {
            name: "30 Strips Kosár",
            desc: "30db Strips csípős csirkemell csík, 200 gramm rizs, 2 kis adag sült burgonya és 2...",
            price: "HUF 10,090",
            image: "https://imgcdn.stablediffusionweb.com/2024/4/18/fa791e38-769f-4d15-97de-2c2a0110b7e1.jpg"
        },
        {
            name: "30 Strips Kosár",
            desc: "30db Strips csípős csirkemell csík, 200 gramm rizs, 2 kis adag sült burgonya és 2...",
            price: "HUF 10,090",
            image: "/path/to/image.jpg"
        },
    ];

    return (
        <div className={styles.cardContainer}>
            
            {prod.map((prod, index) => (
                <Card key={index} className={styles.card}> 
                    <div className={styles.cardImageContainer}>
                        <img 
                            src={prod.image} 
                            alt={prod.name}
                            className={styles.cardImage}
                        />
                        <IconButton className={styles.shopMobile}>
                            <AddShoppingCartIcon />
                        </IconButton>
                    </div>
                    <CardContent className={styles.cardContent}>
                        <Typography variant="h6" className={styles.cardTitle}>
                            {prod.name}
                        </Typography>
                        <Typography className={styles.cardDescription}>
                            {prod.desc}
                        </Typography>
                       
                        <Typography className={styles.cardPrice}>
                            {prod.price}
                        </Typography>
           
                    </CardContent>
                    <CardActions>
                        <IconButton aria-label="" className={styles.addButton} >
                            <AddShoppingCartIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            ))}
        </div>
    );
}