import { Link } from "react-router-dom";
import "./link.css";

export default function Menu({ link, text }) {
  return <Link to={link}>{text}</Link>;
}
