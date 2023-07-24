import { useEffect } from "react"
import { useState } from "react"
import { useContext } from "react"
import styled from "styled-components"
import { ShopContext } from "../../ShopContext"
import StyledLinks from "./StyledLinks"
import StyledList from "./StyledList"
import StyledListItem from "./StyledListItem"
import StyledNav from "./StyledNav"

export const StyledLinksLogo = styled(StyledLinks)`
    font-size: 2em;
    font-weight: bold
`

const Header = () => {
    const { cartItems } = useContext(ShopContext)
    const [total, setTotal ] = useState(0)

    useEffect(() => {
        setTotal(cartItems.reduce( function( acc, obj ) { return acc + parseInt(obj.quantity)}, 0))
    }, [cartItems]) 

    return (
        <StyledNav>
            <StyledLinksLogo to="/">
                Mega Shop
            </StyledLinksLogo>
            <div>
                <StyledList>
                    <StyledLinks to="/">
                        <StyledListItem>
                            Home    
                        </StyledListItem>
                    </StyledLinks>
                    <StyledLinks to="/store">
                        <StyledListItem>
                            Store
                        </StyledListItem>
                    </StyledLinks>
                    <StyledLinks to="bag">Bag ( {total} )</StyledLinks>
                </StyledList>
            </div>
        </StyledNav>
    )

}

export default Header