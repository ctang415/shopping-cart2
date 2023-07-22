import { useContext } from "react"
import { Link } from "react-router-dom"
import { ShopContext } from "../../ShopContext"

const Header = () => {

    const { cartItems } = useContext(ShopContext)

    return (
        <nav className="header">
            <div>

            </div>
            <div>
                <ul>
                    <Link to="/">
                        <li>
                            Home    
                        </li>
                    </Link>
                    <Link to="/store">
                        <li>
                            Store
                        </li>
                    </Link>
                </ul>
            </div>
            <div>
                <Link to="/bag">{cartItems.length}</Link>
            </div>
        </nav>
    )

}

export default Header