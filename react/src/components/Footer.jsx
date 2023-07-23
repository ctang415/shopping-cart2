import styled from "styled-components"
import StyledList from "./Header/StyledList"
import StyledNav from "./Header/StyledNav"

export const StyledFooter = styled.nav`
    bottom: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2em;
    background-color: grey;
    position: fixed;
    z-index: 1;
    padding: 1.5em;
    width: 100%;
    justify-content: space-evenly;
    box-sizing: border-box;
`

const Footer = () => {
    return (
        <StyledFooter>
            <StyledList>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Email</li>
            </StyledList>
        </StyledFooter>
    )
}

export default Footer