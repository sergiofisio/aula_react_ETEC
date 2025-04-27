import logo from "../../assets/img/logo_header.svg";
import loginIcon from "../../assets/img/login.svg";
import userIcon from "../../assets/img/user.svg";
import shopIcon from "../../assets/img/cart.svg";
import Button from "./button";
import "./header.css";
import { useNavigate } from "react-router-dom";
import Menu from "./link";

const links = [
  {
    link: "/",
    text: "Home",
  },
  {
    link: "/cardapios",
    text: "Cardapios",
  },
  {
    link: "/novidades",
    text: "Novidades",
  },
  {
    link: "/sobre",
    text: "Sobre",
  },
  {
    link: "/reservas",
    text: "Reservas",
  },
];

const buttons = [
  {
    icon: loginIcon,
  },
  {
    icon: userIcon,
  },
  {
    icon: shopIcon,
  },
];

export function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <div onClick={() => navigate("/")} className="header__logo">
        <img className="logo" src={logo} />
      </div>
      <nav className="header__content">
        {links.map((link, key) => {
          return <Menu key={key} link={link.link} text={link.text} />;
        })}
      </nav>
      <div className="header__buttons">
        {buttons.map((button, key) => {
          return (
            <Button className="header__button" icon={button.icon} key={key} />
          );
        })}
      </div>
    </header>
  );
}
