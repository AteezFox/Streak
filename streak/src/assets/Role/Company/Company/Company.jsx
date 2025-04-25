import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Company(){
    const [company, setCompany] = useState([]);
    
    useEffect(() => {
        const fetchCompany = async () => {
            try {
                const response = await axios.get("http://localhost:8080/streak/api/companies/get");
                setCompany(response.data);
            } catch (error) {
                console.error("Error fetching company data:", error);
            }
        };

        fetchCompany();
    }
    , []);

    return(
        <>
            <div className="company">
                <h1>Company</h1>
                <div className="company-list">
                    {company.map((item) => (
                        <div key={item.id} className="company-item">
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}