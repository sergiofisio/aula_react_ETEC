import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header";
import Home from "./pages/home";
import Footer from "./components/footer";
import Cardapio from "./pages/cardapio";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cardapios" element={<Cardapio />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
