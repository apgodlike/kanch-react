import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import ItemPage from "./components/ItemPage";
import Shop from "./components/Shop";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div className="App bg-[#EBD9B4]">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop">
          <Route index element={<Shop />} />
          <Route path="/shop/:id" element={<ItemPage />} />
        </Route>
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
