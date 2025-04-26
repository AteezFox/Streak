import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './couriereditor.module.css';

export default function CourierEditor({ courierId, onSave, onCancel }) {
    const [courier, setCourier] = useState({ firstName: '', lastName: '', email: '', phone: '', address: '' });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCourier = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/couriers/${courierId}`);
                const { firstName, lastName, email, phone, address } = response.data;
                setCourier({ firstName, lastName, email, phone, address });
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch courier data.');
                setLoading(false);
            }
        };

        if (courierId) {
            fetchCourier();
        }
    }, [courierId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourier((prevCourier) => ({ ...prevCourier, [name]: value }));
    };

    const handleSave = async () => {
        try {
            const { firstName, lastName, email, phone, address } = courier;
            await axios.put(`http://localhost:8080/api/couriers/update/${courierId}`, {
                id: courierId,
                firstName,
                lastName,
                email,
                phone,
                address,
                userType: "COURIER"
            });
            onSave();
        } catch (err) {
            setError('Failed to update courier data.');
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div className={styles.error}>{error}</div>;

    return (
        <div className={styles.editorContainer}>
            <h2>Edit Courier</h2>
            <form>
                <label>
                    First Name:
                    <input
                        type="text"
                        name="firstName"
                        value={courier.firstName}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Last Name:
                    <input
                        type="text"
                        name="lastName"
                        value={courier.lastName}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={courier.email}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Phone:
                    <input
                        type="text"
                        name="phone"
                        value={courier.phone}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Address:
                    <input
                        type="text"
                        name="address"
                        value={courier.address}
                        onChange={handleChange}
                    />
                </label>
                <div className={styles.buttonGroup}>
                    <button type="button" onClick={handleSave}>Save</button>
                    <button type="button" onClick={onCancel}>Cancel</button>
                </div>
            </form>
        </div>
    );
}