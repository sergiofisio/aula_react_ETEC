import "./card-home.css";

export default function CardHome({
    imagem,
    texto,
    vermelho,
    invertido,
    style_imagem,
}) {
    return (
        <div
            className={`card-home ${vermelho === true ? "card_vermelho" : "card_cinza"
                } ${invertido === true ? "card-home-invertido" : ""}`}
        >
            <p>{texto}</p>
            <img src={imagem} alt="Imagem do card" className={style_imagem} />
        </div>
    );
}
