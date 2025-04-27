export default function Imagem({ icon, text }) {
  return (
    <div>
      <img className="icons" src={icon} />
      {text}
    </div>
  );
}
