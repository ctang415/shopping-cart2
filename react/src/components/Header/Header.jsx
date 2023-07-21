import { Link } from "react-router-dom"

const Header = () => {

    return (
        <nav>
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
                    <Link to="/cart">
                    <li>
                        Cart
                    </li>
                </Link>
                </ul>
            </div>
        </nav>
    )

}

export default Header