import { Link } from "react-router-dom";
import Logopng from '../Img/Logo/Logo.png'
import '../StylesCss/Header.css';
import Register from '../BusinnesLogic/Register';

function Header (){
    return(
        <header className="header">
        <div className="header-left">
            <img src={Logopng} alt="Logo" className="logo" />
        </div>

      <div className="header-right">
        <nav className="nav-links">
          <Link to="home" smooth={true} duration={500}>Home</Link>
          <Link to="program" smooth={true} duration={500}>Program</Link>
          <Link to="pricing" smooth={true} duration={500}>Pricing</Link>
          <Link to="community" smooth={true} duration={500}>Community</Link>
        </nav>

        <div className="auth-buttons">
          <button  className="login-btn">Login</button>
          <button className="register-btn">Register</button>
        </div>
      </div>
    </header>
    )
}

export default Header;