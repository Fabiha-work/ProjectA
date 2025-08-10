// pages/ProductDetail.js
import React from "react";
import { useParams } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Hoodie",
    price: 1000,
    discount: 10,
    rating: 4.5,
    image: "https://static.vecteezy.com/system/resources/previews/043/596/824/non_2x/front-model-wearing-white-hoodie-on-isolated-transparent-background-png.png",
  },
  {
    id: 2,
    name: "Wide Leg Jeans",
    price: 1500,
    discount: 15,
    rating: 4.2,
    image: "https://m.media-amazon.com/images/I/81BM1PNMDfL._AC_UY1100_.jpg",
  },
  {
    id: 3,
    name: "Shacket",
    price: 2000,
    discount: 20,
    rating: 4.8,
    image: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/69f0202b-5cc5-4bc2-934c-d5e723365a6d.__CR0,0,463,625_PT0_SX463_V1___.png",
  },
  {
    id: 4,
    name: "Sharara",
    price: 2300,
    discount: 25,
    rating: 4.6,
    image: "https://i.pinimg.com/736x/5a/ca/01/5aca0170918821f18546f63987b3fc9f.jpg",
  },
  {
    id: 5,
    name: "Co-ord set",
    price: 2000,
    discount: 5,
    rating: 4.3,
    image: "https://5.imimg.com/data5/SELLER/PDFImage/2023/10/356984409/BA/AE/EG/23062678/women-co-ord-set.png",
  },
  {
    id: 6,
    name: "Coat",
    price: 1200,
    discount: 30,
    rating: 4.0,
    image: "https://5.imimg.com/data5/JU/MC/MY-16537275/girl-plain-coat.png",
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) return <div className="container mt-4 text-danger">Product not found.</div>;

  return (
    <div className="container mt-4">
      <h2>{product.name}</h2>
      <img
        src={product.image}
        alt={product.name}
        className="img-fluid mb-3 shadow"
        style={{ maxHeight: "400px", objectFit: "contain" }}
      />
      <p>Price: ₹{product.price}</p>
      <p className="text-success">Discount: {product.discount}%</p>
      <p className="text-warning">Rating: ⭐ {product.rating}</p>
    </div>
  );
};

export default ProductDetail;
