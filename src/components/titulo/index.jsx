import "./titulo.css";

export default function Titulo({ texto, style }) {
  return <h1 className={`titulo ${style}`}>{texto}</h1>;
}
