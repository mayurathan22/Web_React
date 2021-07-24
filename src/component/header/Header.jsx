import './header.css';
import header from '../../assets/header.jpg'
function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg"
            src={header}
            alt=""
            />
        </div>
    )
}

export default Header
