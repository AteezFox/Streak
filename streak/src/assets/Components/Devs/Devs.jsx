import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import styles from './devs.module.css';

const developers = [
    { name: "Gazdóf Ferenc", role: "Backend", image: "/images/9f7c0a02014c46c7efe917f724ccc5f0.jpg" },
    { name: "Gyurcsák Attila", role: "Frontend", image: "/images/930acb057460c14cea70cb705b62a024.jpg" }
];

export default function DeveloperCards() {
    return (
        <div className={styles.cardContainer}>
            {developers.map((dev, index) => (
                <Card key={index} className={styles.card}>
                    <CardContent>
                        <img src={dev.image} alt={dev.name} className={styles.cardImage} />
                        <Typography variant="h5" component="div" className={styles.cardTitle}>
                            {dev.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {dev.role}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
