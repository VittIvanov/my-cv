import styled from "styled-components"
import colors from "../../consts/colors/colors"

export const CvDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: inherit;
  padding: 0px;
  min-height: 100vh;

  @media screen and (max-width: 650px) {
    margin: 0px;
  }


  .cv-container{
    margin: 31px;
    margin-right: 39px;
    margin-top: 0px;

  @media screen and (max-width: 650px) {
    margin: 20px;
  }
}

  .cv-info{
    padding: 20px 0px;
    width: 1129px;
    margin: 0px;
    margin-right: auto;
    @media screen and (max-width: 650px) {
      max-width: 360px;
      flex-direction: column;
      align-items: center;
    }
  }

.cv-info_more-information, .cv-info_min-information{
  width: 690px;
  flex-shrink: 0;

  p, ul{
    margin-bottom: 25px;
  }

  @media screen and (max-width: 650px){
    max-width: 360px;
  }
}


.facts-list, .experience-list{
  padding-left: 30px;
}

.facts-list_item{
list-style: decimal;
padding-left: 10px;
}

.experience-list_item{
  list-style: inside;
  text-indent: -30px;
  padding-left: 10px;
}


  .details-container {
    padding: 40px 15px 30px 15px;
    max-width: 1006px;
    min-height: 656px;
    position: relative;
    border: 1px solid white;

    @media screen and (max-width: 650px) {
    max-width: 360px;
  }
}

.details-container::before {
  content: "";
  position: absolute;
  top: -1px;
  left: 57px;
  transform: translateX(-50%);
  width: 62px;
  height: 20px;
  /* background:url(${process.env.PUBLIC_URL + "assets/svg/border-arrow.svg"}) no-repeat center center; */


  @media screen and (max-width: 650px) {
  left: 50%;
  }
}

.details-container_item{
  position: relative;
  padding: 20px;
  border-bottom: 1px solid ${colors.second_font_color};
  font-size: 24px;
  line-height: 30px;

  div{
    color: ${colors.second_font_color};
  }

  li{
    margin: 8px;
  }

  @media screen and (min-width: 650px) {
  padding-left: 196px;

    h2{
    position: absolute;
    left: 0px;
  }

  }
}

.details-container_item:last-child{
    border: none;
  }

.cv-details_skills_list{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

    li{
    margin: 14px;
  }

  @media screen and (min-width: 650px) {
    li{
    margin-right: 32px;
  }
  }

}

.hidden {
  opacity: 0;
  transform: translateX(100%);
  height: 0;
  overflow: hidden;
  transition: opacity 2s ease-in-out, transform 2s ease-in-out;

  @media screen and (max-width: 650px) {
  transform: translateY(100%);
  }

}
.visible {
  opacity: 1;
  transform: translateX(0);
  transition: opacity 2s ease-in-out, transform 2s ease-in-out;
  @media screen and (max-width: 650px) {
    transform: translateY(0);
  }
  }

.more-information_button{
    width: 150px;
    height: 30px;
    margin: 5px;
    font-weight: bold;
    color: ${colors.second_font_color};
    border: 1px solid ${colors.second_font_color};
    border-radius: 5px;
    background-color: ${colors.background_primary};
    opacity: 0.2;

}

.more-information_button:hover{
      opacity: 0.6;
    }

.more-information_button:active{
      opacity: 0.8;
    }
`
