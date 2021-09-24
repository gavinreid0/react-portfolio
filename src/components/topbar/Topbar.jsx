import "./topbar.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';


export default function topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Portfolio.</a>
                    <div className="itemContainer">
                        <AccountCircleIcon className="icon"/>
                        <span className="leftSpan"> +1 (214) 616 0791 </span>
                        <EmailIcon className="icon"/>
                        <span className="leftSpan">gavinreid94@gmail.com</span>
                    </div>
                </div>
                <div className="right"></div>
                    <div className="hamburger">
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
            </div>
        </div>
    )
}
