import styled from "styled-components"
import colors from "../../consts/colors/colors"

export const PageWrapper = styled.div`
  position: relative;
  font-size: 16px;
  color: ${colors.first_font_color};
  display: flex;
  flex-direction: row;
  /* max-height: 860px; */
  max-width: 1440px;
  min-height: 860px;
  margin: 0px auto;
  padding: 40px 0px;
  box-sizing: border-box;

  @media screen and (max-width: 650px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 360px;
    min-height: 100vh;
  }


  .logo_image{
    margin: 20px;
    position: absolute;
    top: 6px;
    right: 41px;

    @media screen and (max-width: 650px){
      position: static;
    }
  }
`;
