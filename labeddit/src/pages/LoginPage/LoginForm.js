import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { ContainerLoginPage, InputsContainer } from "./styled";
import useForm from "../../hooks/useform";
import axios from "axios";
import { BASE_URL } from "../../constants/url";

const LoginForm = () => {
  const [form, onChange, clear] = useForm({ email: "", password: "" });

  const onSubmitForm = (event) => {
    event.preventDefault();
    console.log(form);
  };

  //faremos a requisição agora
  
  const Login = () =>{
    axios.post(`${BASE_URL}/users/login`,form)
    .then((res)=> console.log)
    .catch((err)=> console.log)
  
 
}

  return (
    <ContainerLoginPage>
      <InputsContainer>
        <form onSubmit={onSubmitForm}>
          <TextField
            name="email"
            value={form.email}
            onChange={onChange}
            label={"E-mail"}
            variant={"outlined"}
            fullWidth
            margin="normal"
            required
            type={"email"}
          />
          <TextField
            name="password"
            value={form.password}
            onChange={onChange}
            label={"senha"}
            variant={"outlined"}
            fullWidth
            margin="normal"
            required
            type={"password"}
          />

          <Button
            type={"submit"}
            fullWidth
            variant={"contained"}
            color={"secondary"}
            margin="normal"
          >
            Cadastrar
          </Button>
        </form>
      </InputsContainer>
    </ContainerLoginPage>
  );
};

export default LoginForm;
