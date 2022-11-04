import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    input{
        height: 25px;
    }
    button{
        height: 30px;
        min-width: 80px;
        background-color: blue;
        color: white;
        font-weight: 600;
        border-radius: 5px;
        cursor: pointer;
    }
    span{
        padding: 1em;
        border-radius: 10px;
        &:hover{
            background-color: white;
            color: black;
        }
    }
`;

export default GlobalStyles;
