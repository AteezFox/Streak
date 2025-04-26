import React, { useState } from "react";
import { Container, Box, TextField, Button } from '@mui/material/';
import axios from 'axios';

export default function Editor() {
    const [adminData, setAdminData] = useState({
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        userType: "ADMIN"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAdminData({ ...adminData, [name]: value });
    };

    const handleSave = async () => {
        try {
            const response = await axios.put(`http://localhost:8080/streak/api/users/update/${adminData.id}`, {
                id: adminData.id,
                firstName: adminData.firstName,
                lastName: adminData.lastName,
                email: adminData.email,
                password: adminData.password,
                phone: adminData.phone,
                address: adminData.address,
                userType: "ADMIN"
            });
            console.log("Admin data updated successfully:", response.data);
        } catch (error) {
            console.error("Error updating admin data:", error);
        }
    };

    return (
        <Container>
            <Box>
                <TextField
                    label="ID"
                    name="id"
                    value={adminData.id}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="First Name"
                    name="firstName"
                    value={adminData.firstName}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Last Name"
                    name="lastName"
                    value={adminData.lastName}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Email"
                    name="email"
                    value={adminData.email}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Password"
                    name="password"
                    value={adminData.password}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Phone"
                    name="phone"
                    value={adminData.phone}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Address"
                    name="address"
                    value={adminData.address}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSave}
                >
                    Save
                </Button>
            </Box>
        </Container>
    );
}