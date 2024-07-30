import styled from "styled-components"
import colors from "../../consts/colors"

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

  @media (min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 320px;
    min-height: 100vh;
    padding: 0px;
  }


  .logo_image{
    margin: 20px;
    position: absolute;
    top: 6px;
    right: 41px;

    @media (min-width: 320px) and (max-width: 768px) {
      position: static;
    }
  }
`;
