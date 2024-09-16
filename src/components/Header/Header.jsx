import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <i className="fa fa-home"></i>
      </Link>
      <h1>NC News</h1>
    </div>
  );
}

export default Header;
