import { useContext } from "react"
import { ShopContext } from "../../ShopContext"

const Store = () => {
    const { products }  = useContext(ShopContext)

    return (
        <>
        <h2>Store</h2>
        {products.map(product => {
            return (
                <div key={product.name}>
                    <img src={product.image} alt={product.name}/>
                    {product.name}
                    {product.price}
                </div>
            )
        })}
    </>
    )
}

export default Store