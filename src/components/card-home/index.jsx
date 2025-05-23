import "./card-home.css";

export default function CardHome({
  imagem,
  texto,
  style,
  vermelho,
  invertido,
  style_imagem,
}) {
  return (
    <div
      className={`card-home ${
        vermelho === true ? "card_vermelho" : "card_cinza"
      } ${style} ${invertido === true ? "card-home-invertido" : ""}`}
    >
      <div className="container-texto-card">
        {texto.map((item, key) => {
          return <p key={key}>{item.paragrafo}</p>;
        })}
      </div>
      <img src={imagem} alt="Imagem do card" className={style_imagem} />
    </div>
  );
}
