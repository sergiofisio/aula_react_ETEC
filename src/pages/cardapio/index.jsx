import "./cardapio.css";
import Render from "./render";

import sombremesas from "../../assets/img/bolos.svg";
import bebidas from "../../assets/img/cocapepsi.svg";
import especialidades from "../../assets/img/picanha.svg";
import recomendacoes from "../../assets/img/buffet1.svg";
import combos from "../../assets/img/churrascobg.svg";

const cardapio = [
  {
    imagem: especialidades,
    text: "especialidades",
  },
  {
    imagem: bebidas,
    text: "Bebidas"
  },
  {
    imagem: sombremesas,
    text: "sobremesas"
  },
  {
    imagem: recomendacoes,
    text: "recomendações"
  },
  {
    imagem: combos,
    text: "Combos"
  }
];

export default function Cardapio() {
  return (
    <div id="main_cardapio">
      <h2>Menu principal</h2>
      <div className="card-container">
        {cardapio.map((item, key) => (
          <Render
            key={key}
            imagem={item.imagem}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
}