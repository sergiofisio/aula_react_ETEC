import "./card-cardapio.css";

export function CardCardapio(imagem,
    texto) {
    const navigate = useNavigate();

    return (
        <div className="cards-container">
            <img src={card.img} alt={card.title} className="card-image" />
            <h3 className="card-title">{card.title}</h3>
            <button
                className="card-button"
                onClick={() => navigate(card.link)}
            >
                Visitar
            </button>
        </div>
    );
}
