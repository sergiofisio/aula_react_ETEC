import "./cards.css";
import { useNavigate } from "react-router-dom";
import imgPicanha from "../../../assets/img/picanha.svg";
import imgCocaPepsi from "../../../assets/img/cocapepsi.svg";
import imgBolos from "../../../assets/img/bolos.svg";
import imgBuffet from "../../../assets/img/buffet1.svg";
import imgChurras from "../../../assets/img/churrascobg.svg";

const cardsData = [
    {
        img: imgPicanha
    },
    {
        img: imgCocaPepsi
    },
    {
        img: imgBolos
    },
    {
        img: imgBuffet
    },
    {
        img: imgChurras
    },
];

export function Card() {
    const navigate = useNavigate();

    return (
        <div className="cards-container">
            {cardsData.map((card, index) => (
                <div key={index} className="card">
                    <img src={card.img} alt={card.title} className="card-image" />
                    <h3 className="card-title">{card.title}</h3>
                    <button
                        className="card-button"
                        onClick={() => navigate(card.link)}
                    >
                        Visitar
                    </button>
                </div>
            ))}
        </div>
    );
}