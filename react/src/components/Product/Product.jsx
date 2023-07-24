import { useContext } from "react"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { ShopContext } from "../../ShopContext"
import { Div } from "../Home/Home"
import { Image } from "../Store/Store"

export const ProductBox = styled.div`
    display: flex;
    max-width: 50vw;
    max-height: 50vh;
    gap: 3em;
    align-items: center;
    text-align: center;
`

export const ProductText = styled.div`
    max-width: 25vw;
`

export const ProductHeaderText = styled.h4`
    font-size: 1.4em;
    font-weight: bold;
`
export const ProductImage = styled(Image)`
    max-height: 15em;
`

const Product = () => {
    const params = useParams()
    const { products } = useContext(ShopContext)
    const [ product, setProduct ] = useState(null)
    const { addToCart } = useContext(ShopContext)
    const [ quantity, setQuantity ] = useState(1)
    let ignore = false

    const increaseValue = () => {
        if (quantity >= 1) {
        setQuantity(quantity + 1)
        }
    }

    const decreaseValue = () => {
        if (quantity > 1 ) {
        setQuantity(quantity - 1)
        }
    }

    useEffect(() => {
        if (!ignore) {
            if (params.id) {
                let item = products.find( item => item.name === params.id)
                setProduct(item)
            }
        }
        return () => { ignore = true }
    }, [])

    if (product) {
    return (
        <ProductBox id={product.name}>
            <ProductImage src={product.image} alt={product.name}/>
            <Div>
                <ProductHeaderText>{product.name}</ProductHeaderText>
                <ProductHeaderText>
                    ${product.price} 
                    <button onClick={() => increaseValue()}>+</button>
                    <input type="number" onChange={(e) => setQuantity(e.target.value)} value={quantity}/>
                    <button onClick={() => decreaseValue()} id={product.name}>-</button>
                    <button id={product.name} onClick={(e) => addToCart(e, quantity)} >Add to Cart</button>
                </ProductHeaderText>
                <ProductText><h6>{product.description}</h6></ProductText>
            </Div>
        </ProductBox>
    )
    }
}

export default Product