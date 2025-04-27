import React, { useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { data, useNavigate } from 'react-router-dom';
import { Container, Button, Typography, TextField, Box } from '@mui/material';
import styles from './updateadmin.module.css';

export default function UpdateAdmin() {
    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAdminData = async () => {
            try {
                const userId = "selectedAdminId"; // Replace with logic to get the selected admin's userId dynamically
                const response = await axios.get(`https://localhost:8080/api/users/get/admins/${userId}`);
                const adminData = response.data;

                setValue('firstname', adminData.firstname);
                setValue('lastname', adminData.lastname);
                setValue('email', adminData.email);
                setValue('password', adminData.password);
                setValue('address', adminData.address);
                setValue('userType', adminData.userType);
            } catch (error) {
                console.error('Error fetching admin data:', error);
                alert('Failed to load admin data.');
            }
        };

        fetchAdminData();
    }, [setValue]);

    const onSubmit = async (data) => {
        try {
            const userId = "selectedAdminId"; // Replace with logic to get the selected admin's userId dynamically
            const apiUrl = `https://localhost:8080/api/users/update/${userId}`;
            await axios.put(apiUrl, data);
            alert('Admin updated successfully!');
            navigate(`/${data.userType}/${userId}/admindashboard`);
        } catch (error) {
            console.error('Error updating admin:', error);

            if (error.response) {
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
                console.error('Response headers:', error.response.headers);
                alert(`Failed to update admin: ${error.response.data.message || 'Unknown error'}`);
            } else if (error.request) {
                console.error('Request data:', error.request);
                alert('Failed to update admin: No response from server.');
            } else {
                console.error('Error message:', error.message);
                alert(`Failed to update admin: ${error.message}`);
            }
        }
    };

    return (
        <>
            <Container className={styles.container}>
                <Box className={styles.body}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Edit the selected admin here
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Typography component={"div"} className={styles.name}>
                            <TextField
                              label="Firstname"
                              variant="outlined"
                              className={styles.input}
                              {...register('firstname'  )}
                              error={!!errors.firstname}
                              helperText={errors.firstname?.message}
                            />
                            <TextField
                              label="Lastname"
                              variant="outlined"
                              className={styles.input}
                              {...register('lastname' )}
                              error={!!errors.lastname}
                              helperText={errors.lastname?.message}
                            />
                        </Typography>

                        <TextField
                            type="email"
                            className={styles.input}
                            label="Email"
                            variant="outlined"
                            {...register('email', {
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'Invalid email address'
                                }
                            })}
                            error={!!errors.email}
                            helperText={errors.email?.message}
                        />
                        <TextField
                            label="Jelszó"
                            variant="outlined"
                            type="password"
                            className={styles.input}
                            {...register('password' )}
                            error={!!errors.password}
                            helperText={errors.password?.message}
                        />
                        <TextField
                            label="Állandó lakcím"
                            className={styles.input}
                            variant="outlined"
                            {...register('address', )}
                            error={!!errors.address}
                            helperText={errors.address?.message}
                        />
                        <TextField
                            variant="outlined"
                            placeholder = "ADMIN"
                            className={styles.input}
                            value={watch('userType') || ''} // Display the current value
                            InputProps={{ readOnly: true }} // Make the field read-only
                            style={{ pointerEvents: 'none' }}
                        />
                        <Button type="submit" variant="contained" color="primary">
                            Adat Frissítés
                        </Button>
                    </form>
                </Box>
            </Container>
        </>
    );
}