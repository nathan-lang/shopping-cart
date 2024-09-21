import { useState, createContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home.jsx";
import Navbar from "./Navbar.jsx";
import Shop from "./Shop.jsx";
import "./App.css";

export const ShopContext = createContext({
  cartItems: 0,
  addToCart: () => {},
});

const App = () => {
  const [cartItems, setCartItems] = useState(0);
  const addToCart = () => {
    setCartItems(cartItems + 1);
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ShopContext.Provider value={{ cartItems, addToCart }}>
          <Navbar />
          <Home />
        </ShopContext.Provider>
      ),
    },
    {
      path: "Shop",
      element: (
        <ShopContext.Provider value={{ cartItems, addToCart }}>
          <Navbar />
          <Shop />
        </ShopContext.Provider>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
