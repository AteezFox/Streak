import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateCeo from '../CreateCeo/CreateCeo';
import UpdateCeo from '../UpdateCeo/UpdateCeo';

export default function Ceo() {
    const [id, setid] = useState('');
    const [ceos, setCeo] = useState([]);
    const [isCreateCeoOpen, setIsCreateCeoOpen] = useState(false);
    const [isUpdateCeoOpen, setIsUpdateCeoOpen] = useState(false);
    const [editedCeoOpen, setEditedCeo] = useState(null);

    useEffect(() => {
        loadCeos();
    }, []);

    function loadCeos() {
        axios.get('http://localhost:8080/api/ceo')
            .then(({data}) => setCeo(data))
            .catch((error) => console.error(error));
    }

}