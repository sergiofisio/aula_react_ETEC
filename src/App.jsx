import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./componets/header";
import Home from "./pages/home";
import Sobre from "./pages/sobre";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </div>
  );
}

export default App;
