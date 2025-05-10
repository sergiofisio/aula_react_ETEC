import { useNavigate } from "react-router-dom";
import "./button.css";

export default function Button({ link, text, icon, className }) {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(link)} className={className}>
      {text ? text : <img src={icon} alt="Icone de login" />}
    </button>
  );
}
