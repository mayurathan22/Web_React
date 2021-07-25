import "./register.css";

function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input
          className="registerInput"
          readOnly=""
          type="text"
          placeholder="enter Username ..."
        />
        <label>Email</label>
        <input
          className="loginInput"
          type="text"
          readonly=""
          id="email"
          placeholder="enter email ..."
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="enter Password"
        />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">Login</button>
    </div>
  );
}

export default Register;
