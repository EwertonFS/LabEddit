import { TextField } from '@mui/material';
import Logo from '../../assets/image/RoboAzulClaro.png'
import { ContainerLoginPage, LogoImg , InputsContainer} from './styled';

const LoginPage = () => {
    

  
  
  
  return (
     <ContainerLoginPage>
      <LogoImg src={Logo}/>
      <p>Seja Bem vindo a maior Rede Social do Mundo</p>
      <InputsContainer>
        <form>
          <TextField 
          name='email'
          value={''}
          onChange={''}

          />

        </form>
      </InputsContainer>

      
      
      

     </ContainerLoginPage>
    )
  }
  
  export default LoginPage;
  