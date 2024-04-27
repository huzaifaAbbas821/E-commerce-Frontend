import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Container from "./Components/Container";
import Navbar from "./Components/Navbar";
import EnterProd from "./Components/EnterProd";
import Product from "./Components/Product";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* <CartProvider> */}
      <Route path="/cart" element={<Cart/> } /> 
      <Route
        path="/products"
        element={
          <>
            <EnterProd></EnterProd>
          </>
        }
      />
      {/* </CartProvider> */}
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Container />
            <Footer />
          </>
        }
      />
      <Route path="/:userid/:prodid" element={<Product></Product>}></Route>
      
    </Routes>
  );
}

export default App;
