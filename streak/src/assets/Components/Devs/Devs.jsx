import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import styles from './devs.module.css';

export default function DeveloperCards() {
    return (
        <div className={styles.cardContainer}>
            <Card className={styles.card}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        Gazdóf Ferenc
                    </Typography>
                    <img src="../../../../public/images/9f7c0a02014c46c7efe917f724ccc5f0.jpg" alt="Gazdóf Ferenc" />
                    <Typography variant="body2" color="text.secondary">
                        Backend
                    </Typography>
                </CardContent>
            </Card>
            <Card className={styles.card}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        Gyurcsák Attila
                    </Typography>
                    <img src="../../../../public/images/930acb057460c14cea70cb705b62a024.jpg" alt="Gyurcsák Attila" />
                    <Typography variant="body2" color="text.secondary">
                        Frontend
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}