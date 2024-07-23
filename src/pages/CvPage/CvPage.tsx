import { Helmet } from "react-helmet"
import { PageWrapper } from "./styled"
import CvHeader from "../../components/CvHeader/CvHeader"
import CvDescription from "../../components/CvDescription/CvDescription"

const HomePage: React.FC = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>Резюме</title>
      </Helmet>
      <img src={process.env.PUBLIC_URL + "/assets/svg/Logo.svg"} className="logo_image" alt="logo-image" />
      <CvHeader />
      <CvDescription />
    </PageWrapper>
  )
}
export default HomePage
