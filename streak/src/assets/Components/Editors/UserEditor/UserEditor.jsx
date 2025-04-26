import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Box } from '@mui/material';
import styles from '../UserEditor/usereditor.module.css';

export default function UserEditor({ userId, onSave, onCancel }) {
    const [user, setUser] = useState({ firstName: '', lastName: '', email: '', phone: '', address: '' });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/users/${userId}`);
                const { firstName, lastName, email, phone, address } = response.data;
                setUser({ firstName, lastName, email, phone, address });
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch user data.');
                setLoading(false);
            }
        };

        if (userId) {
            fetchUser();
        }
    }, [userId]);

    const handleSave = async () => {
        try {
            const { firstName, lastName, email, phone, address } = user;
            await axios.put(`http://localhost:8080/api/users/update/${userId}`, {
                id: userId,
                firstName,
                lastName,
                email,
                phone,
                address,
                userType: "USER"
            });
            onSave();
        } catch (err) {
            setError('Failed to update user data.');
        }
    };

    return (
        <Container className={styles.editorContainer}>
            <Typography variant="h4" gutterBottom className={styles.title}>
                Edit Your Profile
            </Typography>
            {loading ? (
                <Typography>Loading...</Typography>
            ) : error ? (
                <Typography color="error">{error}</Typography>
            ) : (
                <Box className={styles.formWrapper}>
                    <form>
                        <label>
                            First Name:
                            <input
                                type="text"
                                name="firstName"
                                value={user.firstName}
                                onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                            />
                        </label>
                        <label>
                            Last Name:
                            <input
                                type="text"
                                name="lastName"
                                value={user.lastName}
                                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                            />
                        </label>
                        <label>
                            Email:
                            <input
                                type="email"
                                name="email"
                                value={user.email}
                                onChange={(e) => setUser({ ...user, email: e.target.value })}
                            />
                        </label>
                        <label>
                            Phone:
                            <input
                                type="text"
                                name="phone"
                                value={user.phone}
                                onChange={(e) => setUser({ ...user, phone: e.target.value })}
                            />
                        </label>
                        <label>
                            Address:
                            <input
                                type="text"
                                name="address"
                                value={user.address}
                                onChange={(e) => setUser({ ...user, address: e.target.value })}
                            />
                        </label>
                        <div className={styles.buttonGroup}>
                            <button type="button" onClick={handleSave}>Save</button>
                            <button type="button" onClick={onCancel}>Cancel</button>
                        </div>
                    </form>
                </Box>
            )}
        </Container>
    );
}