import { createGlobalStyle } from "styled-components";
import bc_img from "./images/background_2@2x.png";

export const GlobalStyle = createGlobalStyle`
  :root {
    --maxWidth: 1280px; 
    --white: #fff;
    --black: rgba(0,0,0,1);
    --lightGrey: #eee;
    --medGrey: #353535; 
    --darkGrey: #1c1c1c;
    --fontColorBlue: #076696;
    --fontSuperBig: 3.2rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
  }

  * {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;  
  }

  body {  
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #E370A7;
    background-image: url('${bc_img}');
    background-repeat: no-repeat;
    background-size: cover;

    h1 {
      font-size: 2rem;
      font-weight: 600;
      color: var(--fontColorBlue);
    }

    h3 {
      font-size: 1.1rem;
      font-weight: 600;
    }

    p {
      font-size: 1rem;
      color: var(--black);
    }
    span {
      /* white-space: nowrap; */
      text-align: left;
      font-style: normal;
      font-weight: lighter;
      font-size: var(--fontMedium);
      color: var(---black);
    }
  }
`;
