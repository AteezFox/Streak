import React, { useEffect, useState, useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import styles from './company.module.css';
import axios from 'axios';
import { AppContext } from '../../../Context/AppContext';
import { useNavigate } from 'react-router-dom';

export default function CompanyCards() {
    const [Companys, setCompanys] = useState([]);
    const { filteredCompanys } = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!filteredCompanys) {
            fetchCompanys();
        } else {
            setCompanys(filteredCompanys);
        }
    }, [filteredCompanys]);

    const fetchCompanys = () => {
        axios
            .get('http://localhost:8080/streak/api/companies/get')
            .then((response) => {
                setCompanys(response.data);
            })
            .catch((error) => {
                console.error('Hiba történt a termékek betöltésekor:', error);
            });
    };

    const handleCardClick = (companyName, companyId) => {
        navigate(`/USER/${companyName}/${companyId}/products`);
    };

    return (
        <div className={styles.cardContainer}>
            {Companys.map((Company) => (
                <Card key={Company.id} className={styles.card} onClick={() => handleCardClick(Company.userType, Company.userId, Company.name, Company.id)}> 
                    <div className={styles.cardImageContainer}>
                        <img 
                            src={Company.image || './public/images/jarvis.jpg'} 
                            alt={Company.name}
                            className={styles.cardImage}
                        />
                        <IconButton className={styles.shopMobile}>
                            <AddShoppingCartIcon />
                        </IconButton>
                    </div>
                    <CardContent className={styles.cardContent}>
                        <Typography variant="h6" className={styles.cardTitle}>
                            {Company.name}
                        </Typography>
                    </CardContent>
                    <CardActionArea>
                    </CardActionArea>
                </Card>
            ))}
        </div>
    );
}