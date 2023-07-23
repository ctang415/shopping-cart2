import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLinks = styled(Link)`
    text-decoration: none;
    color: black;
    font-weight: bold;

    &:visited {
        color: black;
    }
`

export default StyledLinks