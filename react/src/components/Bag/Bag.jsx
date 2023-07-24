import { useEffect, useState } from "react"
import { useContext } from "react"
import styled from "styled-components"
import { ShopContext } from "../../ShopContext"
import { Image } from "../Store/Store"

export const BagDiv = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 1em;
    overflow: scroll;
    max-height: 58vh;
`

export const ProductItem = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1em;
    border: 1px solid grey;
    padding: 1.5em;
`

export const ProductText = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`

export const CheckoutImage = styled(Image)`
    max-height: 4em;
`

const Bag = () => {
    const { cartItems, removeFromCart } = useContext(ShopContext)
    const [ total, setTotal ] = useState(0)

    useEffect(() => {
        setTotal(cartItems.reduce( function( acc, obj ) { return acc + (parseInt(obj.quantity) * parseInt(obj.item.price))}, 0))
    }, [cartItems])

    return (
        <div style={{ textAlign: "center", display: "flex", flexDirection: "column", gap: "1em"}}>        
        <h2>Shopping cart</h2>
        <BagDiv> 
        {cartItems.map(item => {
            return (
                <ProductItem key={item.item.name}>
                    <CheckoutImage src={item.item.image} alt={item.item.name}/>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center"}}>
                    <ProductText>
                    <h5>{item.item.name}</h5>
                    <h5>${item.item.price}</h5>
                    <h5>Quantity: {item.quantity}</h5>
                    </ProductText>
                    <button onClick={(e) => removeFromCart(e)} id={item.item.name}>X</button>
                    </div>
                </ProductItem>
            )
        })}
        </BagDiv>
        <h4>Total: ${total} </h4>
        </div>

    )
}

export default Bag