import "./App.css";
import Products from "./page/Products";
import Checkout from "./page/Checkout";
import Header from "./component/Header";
import ProductDetails from "./page/ProductDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./component/NotFound";
import Cart from "./page/Cart";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/" element={<Products />} />
        <Route path="#" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
