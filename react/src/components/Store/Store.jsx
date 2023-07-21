import { useContext } from "react"
import { ShopContext } from "../../App"

const Store = () => {
    const { products } = useContext(ShopContext)

    return (
        <>
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