import { Helmet } from "react-helmet"
import { Page } from "./styled"

const HomePage: React.FC = () => {
  return <Page>
    <Helmet>
      <title>Резюме</title>
    </Helmet>

    <h1>Главная страница</h1>
  </Page>
}
export default HomePage
