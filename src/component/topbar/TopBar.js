import { Link } from "react-router-dom";
import "./Topbar.css";
import profile from "../../assets/profile.jpg";
function TopBar() {
  const user = false;
  return (
    <div className="top">
      <div className=" topLeft">
        <i className="topIcon fab fa-facebook"></i>
        <i className="topIcon fab fa-twitter"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" style={{color:"inherit", textDecoration:"none"}} >
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about" >
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact" >
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/write" className="link">
              WRITE
            </Link>
          </li>
          <li className="topListItem">
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user? (
          <img className="topImg" src={profile} alt="" />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">REGISTER</Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}

export default TopBar;
