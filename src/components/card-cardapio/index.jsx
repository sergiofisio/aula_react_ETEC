import "./card-cardapio.css";
import { useNavigate } from "react-router-dom";

export function CardCardapio({ imagem, texto, link }) {
  const navigate = useNavigate();

  return (
    <div className="cards-container">
      <img src={imagem} alt={texto} className="card-image" />
      <h3 className="card-title">{texto}</h3>
      <button className="card-button" onClick={() => alert("Em breve")}>
        Visitar
      </button>
    </div>
  );
}
