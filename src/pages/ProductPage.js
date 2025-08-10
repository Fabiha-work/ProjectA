import React from "react";
import { useParams } from "react-router-dom";
import { Container, Button } from 'react-bootstrap';
import { useCart } from "../context/CartContext";

const ProductPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = { id, name: `Product ${id}`, price: 20 + Number(id) * 5 };

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <Container className="mt-4">
      <h2>{product.name}</h2>
      <p className="mt-2">Price: ${product.price}</p>
      <Button variant="success" onClick={handleAddToCart}>Add to Cart</Button>
    </Container>
  );
};

export default ProductPage;