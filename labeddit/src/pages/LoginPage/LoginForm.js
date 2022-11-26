import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { ContainerLoginPage, InputsContainer } from "./styled";
import useForm from "../../hooks/useform";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import { Link, useNavigate} from "react-router-dom";


const LoginForm = () => {
  const [form, onChange, clear] = useForm({ email: "", password: "" });

  let navigate = useNavigate()
  const onSubmitForm = (event) => {
    event.preventDefault();
    // console.log(form);
    Login()
    navigate('/')
    
    
  };

  const Login = () =>{
    const axios = require("axios");

    const options = {
    method: 'POST',
    url: 'https://logintesting.p.rapidapi.com/login',
    headers: {
    'content-type': 'application/json',
    Authentication: 'header',
    'X-RapidAPI-Key': 'aff209994bmsh2f9e8344d0e4802p11ef80jsn3b93d61695ed',
    'X-RapidAPI-Host': 'logintesting.p.rapidapi.com'
  },
  data: '{"username":"tung1234","password":"tu1234556"}'
};

axios.request(options,form).then(function (response) {
	// console.log(response.data);
  window.localStorage.setItem("token",response.data)
  alert("Cadastro realizado com sucesso")
  clear()
}).catch(function (error) {
	console.error(error);
  alert("algo está errado , tente novamente")
});
  
 
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
            Acesse
          </Button>
          
        </form>
      </InputsContainer>
    </ContainerLoginPage>
  );
};

export default LoginForm;
