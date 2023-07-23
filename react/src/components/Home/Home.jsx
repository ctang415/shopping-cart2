import styled from "styled-components"
import StyledLinks from "../Header/StyledLinks"

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
`

const Home = () => {
    return (
        <Div>
            <h2>Welcome to Mega Shop!</h2>
            <StyledLinks to="store">
                <button>Shop Now</button>
            </StyledLinks>
        </Div>
    )
}

export default Home