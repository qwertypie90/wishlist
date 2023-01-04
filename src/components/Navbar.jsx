import avi from '../img/avi.jpg';
import logo from '../img/logo.png';

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="logo">
        <img src={logo} alt="" className="image_logo" />
        <span>w!shl!st </span>
      </div>
      <ul className="list">
        <li className="listItem">
          <img src={avi} alt="" className="avatar" />
        </li>
        <li className="listItem">juan doe</li>
        <li className="listItem">logowt</li>
      </ul>
    </div>
  );
};

export default Navbar;
