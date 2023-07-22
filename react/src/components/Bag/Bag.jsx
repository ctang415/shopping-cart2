import { useContext } from "react"
import { ShopContext } from "../../ShopContext"

const Bag = () => {
    const { cartItems } = useContext(ShopContext)

    return (
        <>
        <h2>Shopping cart</h2>
        {cartItems.map(item => {
            return (
                <div>
                    {item.name}
                </div>
            )
        })}
        </>
    )
}

export default Bag