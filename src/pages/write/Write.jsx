import "./write.css";
import Img from '../../assets/write.jpg';

function Write() {
  return (
    <div className="write">
        <img  className = "writeImg" src={Img} alt=""/>
      <for className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{display:"none"}} />
          <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
        </div>
        <div className="writeFormGroup">
            <textarea placeholder="tell your story ..." type="text" className="writeInput writeText"/>
        </div>
        <button className="writeSubmit">Publish</button>
      </for>
    </div>
  );
}

export default Write;
