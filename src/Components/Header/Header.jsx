import { Link } from "react-router-dom"
import Logo from "../../assets/Icon/logo.svg"
import "../Header/Header.css"
function Header(){
    return(

        <div className="Header">
            <Link to='/'>
            <nav>
                    <img src={Logo} alt="Logo" className="Logo"/>
                    <div className="LinkHeader">
                    <h3>Start slideshow</h3>
                    </div>

            </nav>
            </Link>

            <div className="Line"></div>
        </div>
    )
}
export default Header