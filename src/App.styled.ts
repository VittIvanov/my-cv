import styled, { createGlobalStyle } from "styled-components"
import colors from "./consts/colors/colors"

export const AppStyles = createGlobalStyle`

  @font-face {
    font-family: 'TT Commons';
    src: url('/public/assets/fonts/tt-commons/TT Commons Regular.otf') format('truetype');
    font-weight: normal;
    font-style: 400;
  }

  @font-face {
    font-family: 'TT Commons';
    src: url('./public/assets/fonts/tt-commons/TT Commons Bold.otf') format('truetype');
    font-weight: bold;
    font-style: 600;
  }

  body{
      -webkit-font-smoothiing: antialiased;
      -moz-osx-font-smoothiing: grayscale;
      font-family: 'TT Commons', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      margin: auto;
      max-width: 320px;
      overflow-x: hidden;
      background: linear-gradient(45deg, ${colors.background_first}, ${colors.background_second}, ${colors.background_third}, ${colors.background_fourth});
      background-size: 200% 200%;
      background-color: ${colors.background_primary};
      animation: gradientAnimation 15s ${colors.animation} infinite;


      @media screen and (min-width: 769px) {
        max-width: 1440px;
        margin: 0 auto;

}
    }


    @keyframes gradientAnimation {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
}

  *,
  *:before,
  *:after{
    box-sizing: border-box;
  }

  a{
    color: inherit;
    text-decoration: inherit;
  }

  ul,li{
    list-style: none;
  }

  img{
    display: block;
    max-width: 100%;
    height: auto;
  }

  button{
    cursor: pointer;
    border: none;
    box-sizing: border-box;
  }

  tr,
  td,
  th,
  p,
  button,
  ul,
  li,
  h1, h2, h3, h4, h5, h6{
    margin: 0;
    padding: 0;
  }

  h1, .h1{
    font-size: 26px;
  }

  h2, .h2{
    font-size: 22px;
  }

  h3, .h3{
    font-size: 18px;
  }

  h4, .h4{
    font-size: 16px;
  }

  p, li{
    font-size: 21px;
  }

`
