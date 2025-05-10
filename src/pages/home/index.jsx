import CardHome from "../../components/card-home";
import Titulo from "../../components/titulo";
import "./home.css";
import fachada from "../../assets/img/fachada.svg";
import melhor from "../../assets/img/melhor.svg";
import buffet from "../../assets/img/buffet2.svg";

const cards = [
  {
    imagem: fachada,
    texto: [
      {
        paragrafo:
          "Criada pela Chef Maria Cardoso dos Santos, no ano de 1982, a Churrascaria e Adega Fogo & Água carrega uma forte tradição familiar passada por diferentes gerações.",
      },
      {
        paragrafo:
          "Venha conhecer uma das nossas unidades! Temos espaços muito aconchegantes e acolhedores, queremos que você possa vir aqui para sair da monotonia e experimentar verdadeiras iguarias.",
      },
    ],
    vermelho: true,
    style: "primeiro-card",
    invertido: false,
    style_imagem: "imagem-card-grande",
  },
  {
    imagem: melhor,
    texto: [
      {
        paragrafo:
          "Fogo & Água, churrascaria nomeada como melhor restaurante brasileiro do ano de 2012, exibe um espaço aconchegante em cada unidade.Procuramos sempre fazer com que você sinta como nossos restaurantes são agradáveis e convidativos a todos que queiram provar uma autêntica obra da culinária brasileira, com sabor de comida caseira.",
      },
      {
        paragrafo:
          "À todos os nossos fregueses, algo sempre fica irrefutável ao experimentarem nossas especialidades: a dedicação à qualidade e à tradição.",
      },
    ],
    vermelho: false,
    style: "segundo-card",
    invertido: false,
    style_imagem: "imagem-card-pequeno",
  },
  {
    imagem: buffet,
    texto: [
      {
        paragrafo:
          "Fogo & Água é mais do que um simples restaurante; é um marco cultural, pois buscamos levar a cada lugar um pouco da culinária brasileira que tanto amamos.",
      },
      {
        paragrafo:
          "A cada refeição servida, uma história é contada sobre perseverança, tradição e amor pela boa comida e pelo bom vinho, fazendo com que cada visita seja uma celebração da história de um lugar que continua a encantar gerações.",
      },
    ],
    vermelho: true,
    style: "terceiro-card",
    invertido: true,
    style_imagem: "imagem-card-medio",
  },
];

export default function Home() {
  return (
    <section>
      <Titulo texto="nossa historia" style="cinza" />
      <div className="container-home">
        {cards.map((card, key) => {
          return (
            <CardHome
              key={key}
              imagem={card.imagem}
              texto={card.texto}
              style={card.style}
              vermelho={card.vermelho}
              invertido={card.invertido}
              style_imagem={card.style_imagem}
            />
          );
        })}
      </div>
    </section>
  );
}
