import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (productId, quantity = 1) => {
    setCart((prev) => {
      const found = prev.find((p) => p.id === productId);
      if (found) {
        const newQuantity = Math.min(found.quantity + quantity, 99); 
        return prev.map((p) =>
          p.id === productId ? { ...p, quantity: newQuantity } : p
        );
      }
      return [...prev, { id: productId, quantity: Math.min(quantity, 99) }]; 
    });
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCart((prev) =>
      prev.map((p) =>
        p.id === productId
          ? { ...p, quantity: Math.min(newQuantity, 99) } 
          : p
      )
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
