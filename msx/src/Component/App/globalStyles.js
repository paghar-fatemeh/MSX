import { createGlobalStyle } from "styled-components";
import "../../assets/globalStyle.css";

const AppGlobalStyle = createGlobalStyle`
  body {
    margin: 0;   
    background-color: #0d0d1a;    
  }
  *, *:before, *:after {
    box-sizing: border-box;
  }
`;

export default AppGlobalStyle;
