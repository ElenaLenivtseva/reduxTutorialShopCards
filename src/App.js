import "./App.css";
import { Header } from "./containers/Header";
import ProductDetail from "./containers/ProductDetail";
import { Routes, Route, Switch } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route>404 Not found</Route>
      </Routes>
    </div>
  );
}

export default App;
