import "./setting.css";
import Sidebar from "../../components/sidebar/Sidebar";
import settingImg from "../../assets/setting.jpg";
function Setting() {
  return (
    <div className="settings">
      <div className="settingWrapper">
        <div className="settingTitle">
          <span className="settingUpdateTitle">Update Account</span>
          <span className="settingDeleteTitle">Delete Account</span>
        </div>
        <form className="settingForm">
          <label>Profile Picture</label>
          <div className="settingPP">
            <img src={settingImg} alt="" />
            <label htmlFor="fileInput">
              <i className="settingPPIcon fas fa-users"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="enter username" />
          <label>Email</label>
          <input type="email" placeholder="enter email" />
          <label>Password</label>
          <input type="password" placeholder="enter password" />
          <button className="settingSubmit">Update</button>
        </form>
      </div>
      <Sidebar/>
    </div>
  );
}

export default Setting;
