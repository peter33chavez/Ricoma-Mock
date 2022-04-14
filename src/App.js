import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment } from "./features/counterSlice";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Home from "./components/Home";
import Layout from "./components/Layout";

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Layout>
    </Router>
  );
}
export default App;
