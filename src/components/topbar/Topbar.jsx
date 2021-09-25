import "./topbar.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Portfolio.
          </a>
          <div className="itemContainer">
            <AccountCircleIcon className="icon" />
            <span className="leftSpan">+1 (214) 616 0791</span>
          </div>
          <div className="itemContainer">
            <EmailIcon className="icon" />
            <span className="leftSpan">gavinreid94@gmail.com</span>
          </div>
        </div>
        <div className="topbar-right">
          <div className="hamburger">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
