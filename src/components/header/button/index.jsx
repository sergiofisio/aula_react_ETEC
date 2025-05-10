import { useNavigate } from "react-router-dom";
import "./button.css";

export default function Button({ link, icon, className }) {
  const navigate = useNavigate();
  return (
    <button onClick={link} className={className}>
      <img src={icon} alt="Icone de login" />
    </button>
  );
}
