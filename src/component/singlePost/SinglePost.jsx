import "./singlepost.css";
import singlepost from "../../assets/singlepost.jpeg";
import Post from "../post/Post";
function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src={singlepost} alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor,
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
            <i class="singlePostIcon fas fa-eye-slash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            author:<b>mayu</b>
          </span>
          <span className="singlePostData">1 hour ago</span>
        </div>
        <p className='singlePostDesc'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quaerat
          provident at, deserunt maiores doloribus. Culpa labore possimus facere
          totam ipsam esse id, provident sed eveniet alias recusandae
          consequuntur inventore?Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quaerat
          provident at, deserunt maiores doloribus. Culpa labore possimus facere
          totam ipsam esse id, provident sed eveniet alias recusandae
          consequuntur inventore?Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quaerat
          provident at, deserunt maiores doloribus. Culpa labore possimus facere
          totam ipsam esse id, provident sed eveniet alias recusandae
          consequuntur inventore?Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quaerat
          provident at, deserunt maiores doloribus. Culpa labore possimus facere
          totam ipsam esse id, provident sed eveniet alias recusandae
          consequuntur inventore?
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
