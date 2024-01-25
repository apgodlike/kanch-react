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

function App() {
  const cartItemsFromLocalStorage = localStorage.getItem("cartItems") || [
    {
      id: 1,
      name: "test1",
      quantity: 12,
    },
    {
      id: 2,
      name: "test1",
      quantity: 12,
    },
    {
      id: 3,
      name: "test1",
      quantity: 12,
    },
    {
      id: 4,
      name: "test1",
      quantity: 12,
    },
  ];

  const [cartItems, setCartItems] = useState(cartItemsFromLocalStorage);

  const itemsSchema = {
    id: 1,
    name: "test1",
    quantity: 5,
  };

  function handleCartItems(item) {
    // setCartItems((prevValue) => {
    //   return prevValue + 1;
    // });
    setCartItems((prevValue) => {
      console.log(prevValue);
      // const prevItem = prevValue.filter((i) => {
      //   if (i.id === item.id) return i;
      // });
      // if (prevItem) {
      let currentValueToSave = prevValue.map((cItem) => {
        if (cItem.id === item.id) {
          return item;
        }
        return cItem;
      });
      const isPresent = currentValueToSave.filter((i) => {
        return i.id === item.id;
      });
      if (isPresent.length == 0) {
        currentValueToSave.push(item);
      }
      return currentValueToSave;
      // }
    });
  }

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className="App bg-[#EBD9B4]">
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
