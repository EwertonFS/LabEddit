import SignUpFormPage from "./SignUpFormPage";
import { ContainerSignUpFormPage, LogoImg } from "./styled";
import Logo from "../../assets/image/RoboAzulClaro.png";

const SignUpPage = () => {
  

  return (
    <ContainerSignUpFormPage>
      <LogoImg src={Logo} />
      <p>Seja bem vindo</p>

      <SignUpFormPage />
    </ContainerSignUpFormPage>
  );
};

export default SignUpPage;
