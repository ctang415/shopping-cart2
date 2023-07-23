import { useContext } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { ShopContext } from "../../ShopContext"

export const StoreContainer = styled.div`
    padding: 5em;
`

export const StoreDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2em;
`

export const Image = styled.img`
    object-fit: contain;
    max-height: 7em;
`

export const ProductLink = styled(Link)`
    display: flex;
    flex-direction: column;
    border: 1px solid grey;
    justify-content: center;
    text-align: center;
    color: black;
    padding: 2em;
`

const Store = () => {
    const { products }  = useContext(ShopContext)

    return (
        <StoreContainer>
        <h2 style={{ textAlign: "center", padding: "1em"}}>Store</h2>
        <StoreDiv>
        {products.map(product => {
            return (
                <ProductLink to={`${product.name}`} key={product.name}>
                    <Image src={product.image} alt={product.name}/>
                    {product.name}
                    <div>${product.price}</div>
                </ProductLink>
            )
        })}
    </StoreDiv>
    </StoreContainer>
    )
}

export default Store