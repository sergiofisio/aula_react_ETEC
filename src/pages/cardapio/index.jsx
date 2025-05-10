import { CardCardapio } from "../../components/card-cardapio";
import imgPicanha from "../../assets/img/picanha.svg";
import imgCocaPepsi from "../../assets/img/cocapepsi.svg";
import imgBolos from "../../assets/img/bolos.svg";
import imgBuffet from "../../assets/img/buffet1.svg";
import imgChurras from "../../assets/img/churrascobg.svg";
import Titulo from "../../components/titulo";
import "./cardapio.css";

const cardInfo = [
  {
    imagem: imgPicanha,
    texto: "Nossas Especialidades",
  },
  {
    imagem: imgCocaPepsi,
    texto: "Bebidas",
  },
  {
    imagem: imgBolos,
    texto: "Sobremesas",
  },
  {
    imagem: imgBuffet,
    texto: "Pratos Recomendados",
  },
  {
    imagem: imgChurras,
    texto: "Combos",
  },
];

export default function Cardapio() {
  return (
    <section>
      <Titulo texto="menu principal" style="cinza" />
      <div className="container-cardapio">
        {cardInfo.map((card, index) => {
          return (
            <CardCardapio
              key={index}
              imagem={card.imagem}
              texto={card.texto}
              link="/"
            />
          );
        })}
      </div>
    </section>
  );
}
