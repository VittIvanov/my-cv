import React, { useState } from "react";
import { CvDescriptionWrapper } from "./styled";
import Button from "../Wrappers/Button/Button";

const CvDescription: React.FC = () => {
  const [isMoreInfoVisible, setMoreInfoVisible] = useState(false);
  const [isCareerVisible, setCareerVisible] = useState(false);
  const [isSkillsVisible, setSkillsVisible] = useState(false);

  const toggleMoreInfo = () => {
    setMoreInfoVisible(!isMoreInfoVisible);
  };

  const toggleCareerInfo = () => {
    setCareerVisible(!isCareerVisible);
  };

  const toggleSkillsInfo = () => {
    setSkillsVisible(!isSkillsVisible);
  }

  const moreInfoClassName = isMoreInfoVisible ? "visible" : "hidden";
  const minInfoClassName = isMoreInfoVisible ? "hidden" : "visible";
  const careerInfoClassName = isCareerVisible ? "visible" : "hidden";
  const skillsInfoClassName = isSkillsVisible ? "visible" : "hidden";

  return (
    <CvDescriptionWrapper>
      <article className="cv-description cv-container">
        <section className="cv-info">

          <div className={`cv-info_min-information ${minInfoClassName}`}>
            <p>Привет! Я фронтенд-разработчик, обладаю  знаниями в HTML, CSS, JavaScript и фреймворках, таких как React. Я всегда стараюсь быть в курсе последних технологических тенденций и постоянно улучшать свои навыки. И люблю свою работу.
            </p>

          </div>

          <div className={`cv-info_more-information ${moreInfoClassName}`}>

            <div className="more-information_intro ">
              <p >
                Здравствуйте, меня зовут Виталий, я фронтенд-разработчик, с небольшим опытом работы. Вкратце расскажу о себе, более десяти лет проработал в нескольких сферах: торговля, маркетинг и достиг определенного уровня в этом направлении. Нашел себя в web-разработке, IT-сфера всегда привлекала меня, перспективами и постоянным развитием.
                А фронтенд непосредственно - своей красотой и функциональностью. Мне очень нравится создавать приложения, которые могут удовлетворить потребности пользователей и дать им лучший пользовательский опыт.
              </p>
            </div>

            <div className="more-information_facts">
              <p>А сейчас, несколько фактов обо мне:</p>

              <ul className="facts-list">

                <li className="facts-list_item"> Я закончил университет, имею высшее техническое образование.</li>

                <li className="facts-list_item"> Я занимаюсь самостоятельным обучением, постоянно повышаю свои знания, изучаю современные технологии и инструменты разработки. </li>

                <li className="facts-list_item"> Я работаю во фрилансе, выполняю различные задачи по разработке сайтов, верстке и SEO.</li>

                <li className="facts-list_item"> Я обладаю знаниями и могу работать с HTML, CSS, JavaScript, TypeScript, React, а также с такими инструментами разработки как: Redux, styled-components, GitHub, Eslint...</li>

              </ul>
            </div>

            <div className="more-information_experience">
              <p>Плюсы моего опыта:</p>

              <ul className="experience-list">

                <li className="experience-list_item">Я трудился в разных сферах и обладаю всесторонне развитым опытом</li>

                <li className="experience-list_item">За время работы я развил много софт-скиллов, которые помогают в общении с коллегами и клиентами.</li>

                <li className="experience-list_item">Благодаря самостоятельной практике и обучению, я привык решать большинство задач без помощи коллег, а также ценить моменты когда коллеги приходят на помощь и делятся своим опытом.</li>

              </ul>
            </div>

          </div>
        </section>

        <Button>
          <button className="more-information_button" onClick={toggleMoreInfo}>
            {isMoreInfoVisible ? "Меньше информации" : "Больше информации"}
          </button>
        </Button>

        <section className="cv-details details-container">

          <div className="cv-details_education details-container_item">
            <h2>Образование</h2>
            КГТУ им. И.Раззакова
            <div>Энергетический факультет</div>
            <div>2005-2010</div>
          </div>

          <Button>
            <button className="more-information_button" onClick={toggleCareerInfo}>
              {isCareerVisible ? "Меньше информации" : "Больше информации"}
            </button>
          </Button>

          <div className="cv-details_career">
            <h2>Карьера</h2>
            <ul>
              <div className={`details-container_item ${careerInfoClassName}`}>
                <li>
                  Торговая кампания "ТЕХНИКОFF"
                  <div>Продавец-консультант</div>
                  <div>2007-2009</div>
                </li>
                <li>
                  ОСОО "Лунтай-трейд"
                  <div>Экспедитор</div>
                  <div>2009-2011</div>
                  <div>Завсклад, продавец автошин</div>
                  <div>2011-2016</div>
                </li>
                <li>
                  Индивидуальный предприниматель
                  <div>Продажа автошин, автохимии</div>
                  <div>с 2016г</div>
                </li>
              </div>
              <div className="details-container_item">
                <li>
                  Работаю во фрилансе:
                  <div>frontend-разработка, верстка лендингов, SPA-приложеий, оптимизация и расширение готовых проектов</div>
                  <div>с 2021г</div>
                </li>
              </div>
              <li></li>
            </ul>
          </div>

          <Button>
            <button className="more-information_button" onClick={toggleSkillsInfo}>
              {isCareerVisible ? "Меньше информации" : "Больше информации"}
            </button>
          </Button>

          <div className="cv-details_skills details-container_item">
            <h2>Навыки</h2>
            <ul className="cv-details_skills_list">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Redux</li>

              <div className={`${skillsInfoClassName}`}>
                <h3>Среда разработки и технологии, котороые я использую в моих проектах:</h3>
                <li>CSS-модули ,styled-components, БЭМ, SASS, адаптивная верстка, кроссбраузерная верстка</li>
                <li>Figma, Photoshop - для верстки по макетам</li>
                <li>Git, GitHub</li>
                <li>Node.js, WebPack, VSCode</li>
              </div>
            </ul>
          </div>



        </section>

      </article>
    </CvDescriptionWrapper >
  )
}

export default CvDescription
