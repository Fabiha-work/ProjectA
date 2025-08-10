import React from "react";
import { useCart } from "../context/CartContext";
import Footer from "../components/Footer";

const Cart = () => {
  const {
    cart,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
    paymentMode,
    setPaymentMode,
    placeOrder,
  } = useCart();

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container flex-grow-1 mt-5 pb-5">
        <h2 className="mb-4">Your Cart</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div className="list-group mb-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="list-group-item d-flex align-items-center"
                >
                  <img
                    src={item.Image}
                    alt={item.name}
                    style={{ width: "80px", height: "80px", objectFit: "cover" }}
                    className="me-3 rounded"
                  />
                  <div className="flex-grow-1">
                    <h5>{item.name}</h5>
                    <p className="mb-1">Price: ₹{item.price}</p>
                    <p className="mb-1">Quantity: {item.quantity}</p>
                    <div>
                      <button
                        className="btn btn-sm btn-outline-primary me-2"
                        onClick={() => decrementQuantity(item.id)}
                      >
                        -
                      </button>
                      <button
                        className="btn btn-sm btn-outline-primary me-2"
                        onClick={() => incrementQuantity(item.id)}
                      >
                        +
                      </button>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-3">
              <label htmlFor="paymentMode" className="form-label">
                Select Payment Mode:
              </label>
              <select
                id="paymentMode"
                className="form-select"
                value={paymentMode}
                onChange={(e) => setPaymentMode(e.target.value)}
              >
                <option value="">-- Select --</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Debit Card">Debit Card</option>
                <option value="Net Banking">Net Banking</option>
                <option value="Cash on Delivery">Cash on Delivery</option>
              </select>
            </div>

            <button
              className="btn btn-success"
              onClick={placeOrder}
              disabled={cart.length === 0 || !paymentMode}
            >
              Place Order
            </button>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
