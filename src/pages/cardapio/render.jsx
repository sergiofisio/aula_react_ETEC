

export default function Render({ imagem, text }) {
  return (
    <div className="card-item">
      <img 
        src={imagem} 
        alt={text} 
      
      />
      <p className="item-text">{text}</p>

      <button className="btn_cardapio">Visitar</button>
    </div>
  );
}