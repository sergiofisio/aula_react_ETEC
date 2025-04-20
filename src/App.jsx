import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./componets/header";
import Home from "./pages/home";
import Sobre from "./pages/sobre";
import Footer from "./componets/footer";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
