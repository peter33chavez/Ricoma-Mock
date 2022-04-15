import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Home from "./components/Home";
import Layout from "./components/Layout";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </Layout>
      </Router>
      <ShoppingCart />
    </>
  );
}
export default App;
