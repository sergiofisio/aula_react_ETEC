import "./footer.css";
import pinIcon from "../../assets/img/pin.svg";
import phoneIcon from "../../assets/img/phone.svg";
import mailIcon from "../../assets/img/mail.svg";

const icons = [
    { icon: pinIcon },
    { icon: phoneIcon },
    { icon: mailIcon }
];
export default function Footer() {
    return (
        <footer className="footer">
            <p className="p_footer">
                Todos os direitos reservados Fogo&Água©
                <br />
                <br />
                <img className="icons" src={pinIcon} />Av. Pereira Barreto, 400 - Baeta Neves, São Bernardo do Campo
                <br />
                <img className="icons" src={phoneIcon} />(11) 95765-4521
                <br />
                <img className="icons" src={mailIcon} />fogoeagua@gmail.com ||
                @FogoeAgua
            </p>
        </footer>
    );
}