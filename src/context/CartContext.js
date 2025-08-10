import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [paymentMode, setPaymentMode] = useState("");
  const [orderHistory, setOrderHistory] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const incrementQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const placeOrder = () => {
    if (cart.length === 0 || !paymentMode) {
      alert("Please add items to the cart and select a payment mode.");
      return;
    }
    alert(`Order placed successfully using ${paymentMode}!`);
    setOrderHistory([...orderHistory, { cart, paymentMode, date: new Date() }]);
    setCart([]);
    setPaymentMode("");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        incrementQuantity,
        decrementQuantity,
        removeFromCart,
        paymentMode,
        setPaymentMode,
        placeOrder,
        orderHistory
      }}
    >
      {children}
    </CartContext.Provider>
  );
};