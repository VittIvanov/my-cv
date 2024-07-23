import { CvHeaderWrapper } from "./styled"

const CvHeader: React.FC = () => {
  return (
    <CvHeaderWrapper>
      <img src={process.env.PUBLIC_URL + "assets/img/photo_1_2024-07-23_13-19-27.jpg"} className="photo_header" alt="Photo" width={"322px"} height={"355px"}></img>

      <section className="header-description">
        <div className="name">
          <h1>Иванов Виталий</h1>
          <p> 37лет, Бишкек</p>
        </div>

        <div className="phone contacts">
          <a href="tel:+996555679857">
            <div className="contacts_icon" aria-label="Phone Icon" >
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9475 3.07318C11.2466 3.77616 11.2466 4.91601 11.9475 5.619L13.2166 6.89191C13.4712 7.14728 13.7832 7.3099 14.1109 7.37978C14.4616 7.45456 14.7845 7.77059 14.6883 8.11626C14.2434 9.7154 13.3895 11.1703 12.2115 12.3365C11.0334 13.5028 9.57182 14.3401 7.97178 14.7653C7.683 14.842 7.42097 14.5757 7.37977 14.2796C7.32769 13.9054 7.15817 13.5445 6.87127 13.2568L5.60217 11.9838C4.90129 11.2808 3.76485 11.2808 3.06397 11.9838L0.525661 14.5297C-0.17522 15.2327 -0.17522 16.3726 0.525661 17.0755C1.0367 17.5881 1.52271 18.229 2.13983 18.6193C2.80193 19.0187 3.6668 18.9644 4.43948 18.99C5.71553 19.0323 7.70468 18.9469 8.98662 18.6062C11.2539 18.0036 13.3249 16.8171 14.9943 15.1645C16.6638 13.5119 17.8736 11.4504 18.5042 9.18437C18.9243 7.67415 19 6.36072 19 4.55509C19 3.65227 18.9873 2.76143 18.506 2.05708C18.4441 1.96664 18.3732 1.8806 18.2931 1.80026L17.024 0.52724C16.3231 -0.175747 15.1866 -0.175747 14.4858 0.52724L11.9475 3.07318Z" fill="white" />
                <path d="M8.03595 15.0069L8.03599 15.0069C9.67825 14.5705 11.1783 13.7111 12.3873 12.5142C13.5964 11.3173 14.4727 9.82427 14.9292 8.18328C15.0048 7.91133 14.9097 7.66223 14.7572 7.48393C14.607 7.30836 14.3891 7.18348 14.163 7.13527C13.8813 7.0752 13.6131 6.93552 13.3936 6.7154L12.1245 5.44249C11.5209 4.83707 11.5209 3.8551 12.1245 3.24969L14.6628 0.703751C15.266 0.0987497 16.2437 0.0987495 16.8469 0.703743L18.116 1.97677L18.1161 1.9768C18.1852 2.04618 18.2464 2.12033 18.2995 2.19813C18.7301 2.82816 18.75 3.63712 18.75 4.55509C18.75 6.35342 18.6743 7.63997 18.2633 9.11735C17.6444 11.3416 16.4569 13.3649 14.8184 14.9868L14.8184 14.9868C13.18 16.6088 11.1475 17.7732 8.92241 18.3646C7.67575 18.696 5.71538 18.7822 4.44776 18.7402C4.3222 18.736 4.19842 18.7339 4.07589 18.7318C3.80408 18.7271 3.53841 18.7226 3.27306 18.6961C2.89584 18.6583 2.55668 18.5781 2.2712 18.4066C1.98903 18.2277 1.73042 17.9876 1.47319 17.72C1.36972 17.6124 1.26047 17.4935 1.14978 17.3731C0.999814 17.21 0.847199 17.044 0.702702 16.899C0.0990993 16.2936 0.0990992 15.3116 0.702702 14.7062L3.24101 12.1603C3.8442 11.5553 4.82193 11.5553 5.42512 12.1603C5.42513 12.1603 5.42513 12.1603 5.42513 12.1603L6.69422 13.4333L6.69425 13.4333C6.94146 13.6812 7.08729 13.9917 7.13215 14.314C7.16082 14.52 7.26506 14.7154 7.41772 14.8498C7.57316 14.9867 7.79442 15.0711 8.03595 15.0069Z" stroke="white" stroke-opacity="0.3" stroke-width="0.5" />
              </svg>
            </div>
            +996 (555) 67-98-57
          </a>
        </div>

        <div className="email contacts">
          <a href="ivanov.vitaly.wdm@mail.ru">
            <div className="contacts_icon" aria-label="Email Icon" >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1_64_618" fill="white">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.00012 7.15124V16.0001C2.00012 17.6569 3.34327 19.0001 5.00012 19.0001H19.0001C20.657 19.0001 22.0001 17.6569 22.0001 16.0001V7.15198L14.7279 14.4242C13.2216 15.9305 10.7794 15.9305 9.27308 14.4242L2.00012 7.15124ZM21.5725 5.65083C21.5316 5.76205 21.4653 5.86854 21.3706 5.96323L13.8188 13.5151C12.8146 14.5193 11.1864 14.5193 10.1822 13.5151L2.63039 5.96323C2.53553 5.86837 2.46914 5.76168 2.42828 5.65024C2.88889 4.95697 3.67689 4.5 4.57162 4.5H19.4288C20.3237 4.5 21.1119 4.95722 21.5725 5.65083Z" />
                </mask>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.00012 7.15124V16.0001C2.00012 17.6569 3.34327 19.0001 5.00012 19.0001H19.0001C20.657 19.0001 22.0001 17.6569 22.0001 16.0001V7.15198L14.7279 14.4242C13.2216 15.9305 10.7794 15.9305 9.27308 14.4242L2.00012 7.15124ZM21.5725 5.65083C21.5316 5.76205 21.4653 5.86854 21.3706 5.96323L13.8188 13.5151C12.8146 14.5193 11.1864 14.5193 10.1822 13.5151L2.63039 5.96323C2.53553 5.86837 2.46914 5.76168 2.42828 5.65024C2.88889 4.95697 3.67689 4.5 4.57162 4.5H19.4288C20.3237 4.5 21.1119 4.95722 21.5725 5.65083Z" fill="white" />
                <path d="M2.00012 7.15124L2.35368 6.79768L1.50012 5.94413V7.15124H2.00012ZM22.0001 7.15198H22.5001V5.94487L21.6466 6.79842L22.0001 7.15198ZM14.7279 14.4242L15.0815 14.7777H15.0815L14.7279 14.4242ZM9.27308 14.4242L8.91953 14.7777L9.27308 14.4242ZM21.3706 5.96323L21.7241 6.31679L21.7241 6.31678L21.3706 5.96323ZM21.5725 5.65083L22.0418 5.82331L22.1292 5.5854L21.989 5.37425L21.5725 5.65083ZM13.8188 13.5151L13.4652 13.1615L13.8188 13.5151ZM10.1822 13.5151L9.82866 13.8686L10.1822 13.5151ZM2.63039 5.96323L2.98395 5.60968L2.98395 5.60968L2.63039 5.96323ZM2.42828 5.65024L2.01182 5.37354L1.87164 5.58453L1.95884 5.82236L2.42828 5.65024ZM2.50012 16.0001V7.15124H1.50012V16.0001H2.50012ZM5.00012 18.5001C3.61941 18.5001 2.50012 17.3808 2.50012 16.0001H1.50012C1.50012 17.9331 3.06712 19.5001 5.00012 19.5001V18.5001ZM19.0001 18.5001H5.00012V19.5001H19.0001V18.5001ZM21.5001 16.0001C21.5001 17.3808 20.3808 18.5001 19.0001 18.5001V19.5001C20.9331 19.5001 22.5001 17.9331 22.5001 16.0001H21.5001ZM21.5001 7.15198V16.0001H22.5001V7.15198H21.5001ZM21.6466 6.79842L14.3744 14.0706L15.0815 14.7777L22.3537 7.50553L21.6466 6.79842ZM14.3744 14.0706C13.0633 15.3817 10.9377 15.3817 9.62663 14.0706L8.91953 14.7777C10.6211 16.4793 13.3799 16.4793 15.0815 14.7777L14.3744 14.0706ZM9.62663 14.0706L2.35368 6.79768L1.64657 7.50479L8.91953 14.7777L9.62663 14.0706ZM21.7241 6.31678C21.8697 6.1712 21.9757 6.00305 22.0418 5.82331L21.1032 5.47835C21.0875 5.52106 21.0608 5.56588 21.017 5.60968L21.7241 6.31678ZM14.1723 13.8686L21.7241 6.31679L21.017 5.60968L13.4652 13.1615L14.1723 13.8686ZM9.82866 13.8686C11.0281 15.0681 12.9729 15.0681 14.1723 13.8686L13.4652 13.1615C12.6563 13.9704 11.3447 13.9704 10.5358 13.1615L9.82866 13.8686ZM2.27684 6.31679L9.82866 13.8686L10.5358 13.1615L2.98395 5.60968L2.27684 6.31679ZM1.95884 5.82236C2.02487 6.00245 2.13099 6.17094 2.27684 6.31679L2.98395 5.60968C2.94007 5.5658 2.91341 5.5209 2.89772 5.47812L1.95884 5.82236ZM4.57162 4C3.50243 4 2.56115 4.54673 2.01182 5.37354L2.84474 5.92694C3.21663 5.3672 3.85135 5 4.57162 5V4ZM19.4288 4H4.57162V5H19.4288V4ZM21.989 5.37425C21.4398 4.54704 20.4983 4 19.4288 4V5C20.1492 5 20.7841 5.36741 21.156 5.92741L21.989 5.37425Z" fill="white" fill-opacity="0.3" mask="url(#path-1-inside-1_64_618)" />
              </svg>
            </div>
            ivanov.vitaly.wdm@mail.ru
          </a>
        </div>

        <div className="telegramm contacts">
          <a href="https://t.me/IvanovVitaly_WDM">
            <div className="contacts_icon" aria-label="Telegram Icon" >
              <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.0399 1.02493C21.0399 1.02493 23.1674 0.202504 22.9894 2.19967C22.9308 3.02209 22.3991 5.90085 21.9851 9.01412L20.5668 18.2372C20.5668 18.2372 20.4485 19.5884 19.3845 19.8234C18.321 20.058 16.7253 19.001 16.4296 18.766C16.193 18.5895 11.9972 15.9458 10.5198 14.6538C10.1058 14.301 9.63264 13.5964 10.5789 12.7739L16.7839 6.89916C17.4931 6.19454 18.2022 4.54969 15.2473 6.54685L6.97289 12.1274C6.97289 12.1274 6.02717 12.7153 4.25455 12.1866L0.412512 11.0113C0.412512 11.0113 -1.0058 10.1302 1.41738 9.24918C7.32775 6.48822 14.5973 3.66863 21.0388 1.02493H21.0399Z" fill="white" />
              </svg>

            </div>
            IvanovVitaly_WDM
          </a>
        </div>
        <div className="github contacts">
          <a href="https://github.com/VittIvanov">
            <div className="contacts_icon" aria-label="GitHub Icon">
              <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 0C4.9225 0 0 4.8176 0 10.7656C0 15.5294 3.14875 19.553 7.52125 20.9794C8.07125 21.0736 8.2775 20.7507 8.2775 20.4681C8.2775 20.2124 8.26375 19.3646 8.26375 18.463C5.5 18.9609 4.785 17.8036 4.565 17.198C4.44125 16.8885 3.905 15.9331 3.4375 15.6774C3.0525 15.4755 2.5025 14.9776 3.42375 14.9642C4.29 14.9507 4.90875 15.7447 5.115 16.0676C6.105 17.6959 7.68625 17.2384 8.31875 16.9558C8.415 16.256 8.70375 15.785 9.02 15.5159C6.5725 15.2468 4.015 14.3182 4.015 10.2004C4.015 9.02963 4.44125 8.06073 5.1425 7.30714C5.0325 7.038 4.6475 5.93453 5.2525 4.45426C5.2525 4.45426 6.17375 4.17166 8.2775 5.55773C9.1575 5.31551 10.0925 5.19439 11.0275 5.19439C11.9625 5.19439 12.8975 5.31551 13.7775 5.55773C15.8813 4.15821 16.8025 4.45426 16.8025 4.45426C17.4075 5.93453 17.0225 7.038 16.9125 7.30714C17.6138 8.06073 18.04 9.01618 18.04 10.2004C18.04 14.3317 15.4688 15.2468 13.0213 15.5159C13.42 15.8523 13.7638 16.4983 13.7638 17.5075C13.7638 18.9474 13.75 20.1047 13.75 20.4681C13.75 20.7507 13.9563 21.0871 14.5063 20.9794C16.6901 20.2581 18.5877 18.8846 19.932 17.0524C21.2764 15.2201 21.9996 13.0213 22 10.7656C22 4.8176 17.0775 0 11 0Z" fill="white" />
              </svg>

            </div>
            https://github.com
          </a>
        </div>

      </section>
    </CvHeaderWrapper>
  )
}
export default CvHeader

