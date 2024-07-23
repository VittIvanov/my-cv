import styled from "styled-components"
import colors from "../../consts/colors/colors"

export const CvHeaderWrapper = styled.div`
position: relative;
flex-direction: column;
align-items: center;
justify-content: center;
min-width:322px;
height: 780px;
border: 1px solid ${colors.background_second};
border-radius: 20px;
overflow: hidden;

.header-description::after {
  content: "";
  position: absolute;
  width: 50px; /* Задайте нужные размеры */
  height: 50px; /* Задайте нужные размеры */
  top: -8px;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0deg);
  background: url(${process.env.PUBLIC_URL}/assets/svg/Union.svg) no-repeat center center;
  /* background-color: gold; */
  background-size: contain;
}

.header-description {
position: absolute;
width: 100%;
height: 460px;
top: 320px;
padding: 15px 25px;
background-color: ${colors.background_second};

color: ${colors.second_font_color};
border-radius: 24px 24px 0 0 ;
z-index: 100;
}

.contacts{
  padding-bottom: 20px;

  a{
    display: flex;
    align-items: center;

    .contacts_icon{
      padding-right: 10px;
    }
  }
}

.contacts:last-child{
    padding-bottom: 39px;
  }

.name {
  padding-bottom: 30px;
  p{
    padding-top: 10px;
  }
}
`
