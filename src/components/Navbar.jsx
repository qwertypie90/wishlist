import avi from '../img/avi.jpg';
import logo from '../img/logo.png';
import { Link } from 'react-router-dom';

const Navbar = ({ user }) => {
  return (
    <div className="Navbar">
      <div className="logo">
        <img src={logo} alt="" className="image_logo" />
        <Link className="link" to="/">
          <span>w!shl!st </span>
        </Link>
      </div>
      {user ? (
        <ul className="list">
          <li className="listItem">
            <img src={avi} alt="" className="avatar" />
          </li>
          <li className="listItem">juan doe</li>
          <li className="listItem">logowt</li>
        </ul>
      ) : (
        <Link className="link" to="login">
          {'log !n'}
        </Link>
      )}
    </div>
  );
};

export default Navbar;
