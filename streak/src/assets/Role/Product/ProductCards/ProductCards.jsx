import React, { useEffect, useState, useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { CardActions } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import styles from './productcards.module.css';
import axios from 'axios';
import { AppContext } from '../../../Context/AppContext';

export default function ProductCards() {
    const [products, setProducts] = useState([]);
    const { filteredProducts } = useContext(AppContext);

    useEffect(() => {
        if (!filteredProducts) {
            fetchProducts();
        } else {
            setProducts(filteredProducts);
        }
    }, [filteredProducts]);

    const fetchProducts = () => {
        axios
            .get('http://localhost:8080/streak/api/products/get/5/1')
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error('Hiba történt a termékek betöltésekor:', error);
            });
    };

    return (
        <div className={styles.cardContainer}>
            {products.map((product) => (
                <Card key={product.id} className={styles.card}> 
                    <div className={styles.cardImageContainer}>
                        <img 
                            src={product.image || './public/images/jarvis.jpg'} 
                            alt={product.name}
                            className={styles.cardImage}
                        />
                        <IconButton className={styles.shopMobile}>
                            <AddShoppingCartIcon />
                        </IconButton>
                    </div>
                    <CardContent className={styles.cardContent}>
                        <Typography variant="h6" className={styles.cardTitle}>
                            {product.name}
                        </Typography>
                        <Typography className={styles.cardDescription}>
                            {product.description}
                        </Typography>
                        <Typography className={styles.cardCategory}>
                            Kategória: {product.category}
                        </Typography>
                        <Typography className={styles.cardPrice}>
                            HUF {product.price}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton aria-label="add to cart" className={styles.addButton}>
                            <AddShoppingCartIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            ))}
        </div>
    );
}