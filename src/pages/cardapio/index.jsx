import { CardCardapio } from "../../components/card-cardapio";
import imgPicanha from "../../assets/img/picanha.svg";
import imgCocaPepsi from "../../assets/img/cocapepsi.svg";
import imgBolos from "../../assets/img/bolos.svg";
import imgBuffet from "../../assets/img/buffet1.svg";
import imgChurras from "../../assets/img/churrascobg.svg";
import Titulo from "./../../components/titulo/index";
import "./cardapio.css";

const cardapio = [
  {
    imagem: imgPicanha,
    texto: "Nossas Especialidades",
    link: "",
  },
  {
    imagem: imgCocaPepsi,
    texto: "Bebidas",
    link: "",
  },
  {
    imagem: imgBolos,
    texto: "Sobremesas",
    link: "",
  },
  {
    imagem: imgBuffet,
    texto: "Pratos recomendados",
    link: "",
  },
  {
    imagem: imgChurras,
    texto: "Combos",
    link: "",
  },
];

export default function Cardapio() {
  return (
    <div className="section card-container">
      <Titulo texto="Cardápio" style="cinza" />
      <div>
        {cardapio.map((info, key) => {
          return (
            <CardCardapio
              key={key}
              imagem={info.imagem}
              texto={info.texto}
              link={info.link}
            />
          );
        })}
      </div>
    </div>
  );
}
