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
                    <StyledLinks to="store">
                        <StyledListItem>
                            Store
                        </StyledListItem>
                    </StyledLinks>
                    <StyledLinks to="bag">Bag ({cartItems.length})</StyledLinks>
                </StyledList>
            </div>
        </StyledNav>
    )

}

export default Header