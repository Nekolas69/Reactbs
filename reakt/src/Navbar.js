import './Navbar.css';
function Navbar() {
    return (
        <nav class="navbar sticky-top navbar-light bg-light" className='navbar'>
            <div className='vlajky'>
                <button  type="button" >
                    <img width={70} height={40} src="cz.png"/>
                </button>
                <button  type="button" >
                    <img width={70} height={40} src="us.png"/>
                </button>
            </div>
            <div className="dark-mode-switch">
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
                <span className="dark-mode-label">Dark Mode</span>
            </div>
        </nav>
    );
  }
  
  export default Navbar;
  
