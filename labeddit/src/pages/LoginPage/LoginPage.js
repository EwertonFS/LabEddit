
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Logo from "../../assets/image/RoboAzulClaro.png";
import LoginForm from "./LoginForm";
import { ContainerLoginPage,LogoImg, SignUpButtonPage,} from "./styled";


const LoginPage = () => {
  

  return (
    <ContainerLoginPage>
      <LogoImg src={Logo} />
      <p>Seja Bem vindo a maior Rede Social do Mundo</p>
      <LoginForm />

      <SignUpButtonPage>
        <Link to={'/cadastrar'}>
        <Button
          type={"submit"}
          fullWidth
          variant={"text"}
          color={"secondary"}
          margin="normal"   
        >
          Não possui conta ? Cadastre-se
        </Button>
        </Link>
      </SignUpButtonPage>
    </ContainerLoginPage>
  );
};

export default LoginPage;
