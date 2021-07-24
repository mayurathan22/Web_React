import "./post.css";
import PostImg from "../../assets/post.jpg";

function Post() {
  return (
    <div className="post">
      <img className="postImg" src={PostImg} alt="" />

      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">music</span>
          <span className="postCat">cricket</span>
        </div>
        <span className="postTitle">Lorem ipsum, dolor sit </span>
        <hr />
        <span className="postDate">2 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor odio
        magnam consequuntur ad esse sequi quibusdam sunt corporis enim facilis.
        Beatae ab aspernatur temporibus repellat, dignissimos qui at dolore rem?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor odio
        magnam consequuntur ad esse sequi quibusdam sunt corporis enim facilis.
        Beatae ab aspernatur temporibus repellat,
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor odio
        magnam consequuntur ad esse sequi quibusdam sunt corporis enim facilis.
        Beatae ab aspernatur temporibus repellat,
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor odio
        magnam consequuntur ad esse sequi quibusdam sunt corporis enim facilis.
        Beatae ab aspernatur temporibus repellat,
      </p>
    </div>
  );
}

export default Post;
