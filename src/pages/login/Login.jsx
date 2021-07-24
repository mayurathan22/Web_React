import "./login.css";

function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input className="loginInput" type="text" placeholder="enter email"></input>
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="enter Password"></input>
        <button className="loginButton">Login</button>
      </form>
      <button className="RegisterButton">Register</button>
    </div>
  );
}

export default Login;
