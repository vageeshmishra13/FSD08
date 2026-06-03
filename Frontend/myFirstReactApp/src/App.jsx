import Header from "./component/Header";
import Footer from "./component/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contactus from "./pages/Contactus";
import Product from "./pages/Product";
import Login from "./pages/Login";
import login from "./pages/Login";
import Registr from "./pages/Register";
function App() {
  return (
    <div>
      <BrowserRouter>
    <Header />
        <Routes>
          <Route path="/" element={Home()} />
          <Route path="/about" element={About()} />
          <Route path="/contactus" element={Contactus()} />
          <Route path="/product" element={Product()} />
          <Route path="/login" element={login()} />
          <Route path="/register" element={Registr()} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
