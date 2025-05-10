import "./button.css";

export default function Button({ icon, className, onClick }) {
  return (
    <button onClick={onClick} className={className}>
      <img src={icon} alt="Icone de login" />
    </button>
  );
}
