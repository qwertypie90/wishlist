import Google from '../img/google.png';
import Github from '../img/github.png';
import Facebook from '../img/facebook.png';

const Login = () => {
  return (
    <div className="login">
      <h1 className="loginTitle word1">log the frig in</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginBtn google">
            <img src={Google} alt="" className="icon" />
            Google
          </div>
          <div className="loginBtn facebook">
            <img src={Facebook} alt="" className="icon" />
            Facebook
          </div>
          <div className="loginBtn github">
            <img src={Github} alt="" className="icon" />
            Github
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="right">
          <input type="text" placeholder="username" />
          <input type="text" placeholder="password" />
          <button className="submit">log INN &#10084;</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
