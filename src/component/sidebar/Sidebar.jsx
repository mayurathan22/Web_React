import "./sidebar.css";
import sidebarimg from "../../assets/sidebar2.jpg";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About me</span>
        <img className='sidebarImg' src={sidebarimg} alt="" />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione sed
          dolor veritatis nihil
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Friends</li>
          <li className="sidebarListItem">Cricket</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">travel</li>
          <li className="sidebarListItem">lonely</li>
          <li className="sidebarListItem">social media</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow US</span>
        <div className="sidebarSociall">
          <i className="sidebarIcon fab fa-facebook"></i>
          <i className="sidebarIcon fab fa-twitter"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
