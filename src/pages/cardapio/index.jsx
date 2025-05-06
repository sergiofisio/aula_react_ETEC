import { CardCardapio } from "../../components/card-cardapio";
import imgPicanha from "../../assets/img/picanha.svg";
import imgCocaPepsi from "../../assets/img/cocapepsi.svg";
import imgBolos from "../../assets/img/bolos.svg";
import imgBuffet from "../../assets/img/buffet1.svg";
import imgChurras from "../../assets/img/churrascobg.svg";


export default function Cardapio() {
  return (
    <div className="section">
      <h2>Cardapio</h2>
      <CardCardapio
        imagem={imgPicanha}
        button={card - button}
      />
      <CardCardapio
        imagem={imgCocaPepsi}
        button={card - button}
      />
      <CardCardapio
        imagem={imgBolos}
        button={card - button}
      />
      <CardCardapio
        imagem={imgBuffet}
        button={card - button}
      />
      <CardCardapio
        imagem={imgChurras}
        button={card - button}
      />
    </div>
  );
}