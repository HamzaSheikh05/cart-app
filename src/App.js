import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Cart } from "./Pages/Cart";
import { InvalidUrl } from "./components/InvalidUrl";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<InvalidUrl />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
