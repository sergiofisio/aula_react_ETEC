import "./button.css";

export default function Button({ icon, className }) {
  return (
    <button className={className}>
      <img src={icon} alt="Icone de login" />
    </button>
  );
}
