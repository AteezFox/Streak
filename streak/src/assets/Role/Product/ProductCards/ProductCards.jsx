import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button'
import styles from './productcards.module.css'

export default function ProductCards() {
    const prod = [
        {name: "Tárgy 1", image: "placeholder", desc: "Lorem ipsum..."},
        {name: "Tárgy 2", image: "placeholder", desc: "Lorem ipsum..."}
    ]
    return (
        <>
            <div className={styles.cardContainer}>
                {prod.map((prod, index) => (
                    <Card className={styles.card} key={index}>
                    <CardHeader
                        title={prod.name}
                        className={styles.cardTitles}
                    />
                    <CardMedia title="kép ide" image={prod.image} className={styles.cardImage} />
                    <CardContent className={styles.cardDescription}>
                        {prod.desc}
                    </CardContent>
                    <CardActions>
                        <Button variant="text" color="primary">
                            Kosárba
                        </Button>
                        <Button variant="text" color="primary">
                            Törlés
                        </Button>
                    </CardActions>
                </Card>
                ))}
            </div>
        </>
    )
}