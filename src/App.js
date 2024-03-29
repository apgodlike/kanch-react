import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import ItemPage from "./components/ItemPage";
import Shop from "./components/Shop";
import ContactUs from "./components/ContactUs";
import ImageSlider from "./components/ImageSlider";
import Cart from "./components/Cart";
import { useEffect, useState } from "react";
import axios from "axios";
import CustomerDetails from "./components/CustomerDetails";
import AddProducts from "./components/AddProducts";
import { CartProvider } from "./context/useCart";
const endpoint = process.env.REACT_APP_BASE_URI;

function App() {
  const [cartItems, setCartItems] = useState();

  async function handleCartItems(item) {
    const response = await axios.post();
  }

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    // <div className="App bg-[#EBD9B4]">
    <div className="App bg-[#fff6e0] min-h-screen">
      <CartProvider>
        <Header cartItems={cartItems} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop">
            <Route index element={<Shop />} />
            <Route
              path="/shop/:id"
              element={<ItemPage handleCartItems={handleCartItems} />}
            />
            {/* <Route path="/shop/:id" element={<ImageSlider />} /> */}
          </Route>
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/customerdetails" element={<CustomerDetails />} />
          <Route path="/addproducts" element={<AddProducts />} />
        </Routes>
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
