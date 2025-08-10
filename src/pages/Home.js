import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Footer from "../components/Footer";

const products = [
  {
    id: 1,
    name: "Hoodie",
    price: 1000,
    discount: 10,
    rating: 4.5,
    Image:
      "https://static.vecteezy.com/system/resources/previews/043/596/824/non_2x/front-model-wearing-white-hoodie-on-isolated-transparent-background-png.png",
  },
  {
    id: 2,
    name: "Wide Leg Jeans",
    price: 1500,
    discount: 15,
    rating: 4.2,
    Image: "https://m.media-amazon.com/images/I/81BM1PNMDfL._AC_UY1100_.jpg",
  },
  {
    id: 3,
    name: "Shacket",
    price: 2000,
    discount: 20,
    rating: 4.8,
    Image:
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/69f0202b-5cc5-4bc2-934c-d5e723365a6d.__CR0,0,463,625_PT0_SX463_V1___.png",
  },
  {
    id: 4,
    name: "Sharara",
    price: 2300,
    discount: 25,
    rating: 4.6,
    Image:
      "https://i.pinimg.com/736x/5a/ca/01/5aca0170918821f18546f63987b3fc9f.jpg",
  },
  {
    id: 5,
    name: "Co-ord set",
    price: 2000,
    discount: 5,
    rating: 4.3,
    Image:
      "https://5.imimg.com/data5/SELLER/PDFImage/2023/10/356984409/BA/AE/EG/23062678/women-co-ord-set.png",
  },
  {
    id: 6,
    name: "Coat",
    price: 1200,
    discount: 30,
    rating: 4.0,
    Image: "https://5.imimg.com/data5/JU/MC/MY-16537275/girl-plain-coat.png",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  return (
    <>
      <div className="container mt-2">
        <h2 className="mb-3 text-center">Products</h2>
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card h-100">
                <div
                  className="overflow-hidden"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  <img
                    src={product.Image}
                    className="card-img-top img-fluid"
                    style={{
                      height: "250px",
                      objectFit: "cover",
                      transition: "transform 0.3s",
                    }}
                    alt={product.name}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.transform = "scale(1.1)")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">Price: ₹{product.price}</p>
                  <p className="text-success">Discount: {product.discount}%</p>
                  <p className="text-warning">Rating: ⭐ {product.rating}</p>
                  <button
                    className="btn btn-primary mt-auto w-100"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
