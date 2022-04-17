import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./Pages/Products";
import Home from "./Pages/Home";
import Layout from "./Layout/Layout";
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
