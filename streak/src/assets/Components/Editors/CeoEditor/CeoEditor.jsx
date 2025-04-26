import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './ceoeditor.module.css';

export default function CeoEditor({ ceoId, onSave, onCancel }) {
    const [ceo, setCeo] = useState({ firstName: '', lastName: '', email: '', phone: '', address: '' });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCeo = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/ceos/${ceoId}`);
                const { firstName, lastName, email, phone, address } = response.data;
                setCeo({ firstName, lastName, email, phone, address });
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch CEO data.');
                setLoading(false);
            }
        };

        if (ceoId) {
            fetchCeo();
        }
    }, [ceoId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCeo((prevCeo) => ({ ...prevCeo, [name]: value }));
    };

    const handleSave = async () => {
        try {
            const { firstName, lastName, email, phone, address } = ceo;
            await axios.put(`http://localhost:8080/api/ceos/update/${ceoId}`, {
                id: ceoId,
                firstName,
                lastName,
                email,
                phone,
                address,
                userType: "CEO"
            });
            onSave();
        } catch (err) {
            setError('Failed to update CEO data.');
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div className={styles.error}>{error}</div>;

    return (
        <div className={styles.editorContainer}>
            <h2>Edit CEO</h2>
            <form>
                <label>
                    First Name:
                    <input
                        type="text"
                        name="firstName"
                        value={ceo.firstName}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Last Name:
                    <input
                        type="text"
                        name="lastName"
                        value={ceo.lastName}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={ceo.email}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Phone:
                    <input
                        type="text"
                        name="phone"
                        value={ceo.phone}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Address:
                    <input
                        type="text"
                        name="address"
                        value={ceo.address}
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