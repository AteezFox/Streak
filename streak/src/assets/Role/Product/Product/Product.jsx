import React from 'react';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';

export default function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios
      .get('http://localhost:8080/streak/api/products/get/5/1', {

      })
      .then((response) => {
        setProducts(response.data);
        console.log("Ez teás kanna");
      })
      .catch((error) => {
          console.log('EZ NEM TEÁS KANNA', error);
      });
  };

  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          <p>{product.id}</p>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <p>{product.description}</p>
          <p>{product.category}</p>
          <p>{product.companyId}</p>
        </div>
      ))}
    </>
  );
}
