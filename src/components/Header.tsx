import './header.css';
 import logo from '../saketaLogo.png'
const Header = ()=> {
    return (
        <div id="HeaderComp">
              <div className='header-logo'>
                <div className='header-logo-inner'>
                <img src={logo} alt="not to show"/>
                </div>
              </div>
              <div className='directory-name'>
                <div className='empDir'>Employee Directory</div>
                <div className='empDir2'>The Ultimate People Directory Experience</div>
              </div>
              <div className='profile'>
              <h4 className="text-muted fw-normal"><span className="cyan-shade-text">Welcome , </span> Andrew Philips</h4>
              </div>
        </div>
    )
}

export default Header;