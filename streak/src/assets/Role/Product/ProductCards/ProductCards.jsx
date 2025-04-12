import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import styles from './productcards.module.css';

export default function ProductCards() {
    const prod = [
        {
            name: "30 Strips Kosár",
            desc: "30db Strips csípős csirkemell csík, 200 gramm rizs, 2 kis adag sült burgonya és 2...",
            price: "HUF 10,090",
            image: "/path/to/image.jpg"
        },
        {
            name: "30 Strips Kosár",
            desc: "30db Strips csípős csirkemell csík, 200 gramm rizs, 2 kis adag sült burgonya és 2...",
            price: "HUF 10,090",
            image: "/path/to/image.jpg"
        },
        // ... több termék
    ];

    return (
        <div className={styles.cardContainer}>
            {prod.map((prod, index) => (
                <Card key={index} className={styles.card}>
                    <img 
                        src={prod.image} 
                        alt={prod.name}
                        className={styles.cardImage}
                    />
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
                    <IconButton className={styles.addButton}>
                        <AddIcon />
                    </IconButton>
                </Card>
            ))}
        </div>
    );
}