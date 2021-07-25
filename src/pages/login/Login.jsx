import "./login.css";

function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input className="loginInput" type="text" readonly="" id="email" placeholder="enter email ..." />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="enter Password..." />
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton">Register</button>
    </div>
  );
}

export default Login;
