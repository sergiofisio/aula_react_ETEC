import "./footer.css";
import pinIcon from "../../assets/img/pin.svg";
import phoneIcon from "../../assets/img/phone.svg";
import mailIcon from "../../assets/img/mail.svg";
import Imagem from "./imagem";

const icons = [
  {
    imagem: pinIcon,
    text: "Av. Pereira Barreto, 400 - Baeta Neves, São Bernardo do Campo",
  },
  { imagem: phoneIcon, text: "(11) 95765-4521" },
  { imagem: mailIcon, text: "fogoeagua@gmail.com || @FogoeAgua" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="p_footer">
        Todos os direitos reservados Fogo&Água©
        {icons.map((icon, key) => {
          return <Imagem key={key} icon={icon.imagem} text={icon.text} />;
        })}
      </div>
    </footer>
  );
}
