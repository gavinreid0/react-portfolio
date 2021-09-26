import "./topbar.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';




export default function Topbar() {
  return (
    <div className="topbar active">
      <div className="wrapper">
        <div className="topbar-left">
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
          <div className="hamburger active">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
        </div>

        <div className="menu active">
        <div className="menu-center">
          <div className="menu-item">
            <i className="fas fa-home"></i>
            <a href="#intro" className="topbarA">About Me</a>
          </div>
          <div className="menu-item">
            < a href="#portfolio" className="topbarA">Portfolio</a>
          </div>
          <div className="menu-item">
          < a href="#works" className="topbarA">Works</a>
          </div>
          <div className="menu-item">
          < a href="#resume" className="topbarA">Resume</a>
          </div>
          <div className="menu-item">
          < a href="#contact" className="topbarA">Contact</a>
          </div>
        </div>
        </div>

      </div>
    </div>
  );
}
