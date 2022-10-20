import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import {  ContainerSignUpFormPage, InputsContainer } from "./styled";
import useForm from "../../hooks/useform";
import axios from "axios";
import { BASE_URL } from "../../constants/url";


const SignUpFormPage = () => {
  const [form, onChange, clear] = useForm({ name:"",email: "", password: "" });

  const onSubmitForm = (event) => {
    event.preventDefault();
    // console.log(form);
    handleSignup() 
  };
  // o body é o form
  const handleSignup = () =>{
    axios.post(`${BASE_URL}/users/signup`,form)
    .then((res)=> console.log(res))
    .catch((err)=> console.log(err))
  
 
}

  return (
    <div>
      <ContainerSignUpFormPage>
        <InputsContainer>
          <form onSubmit={onSubmitForm}>
          <TextField
              name="name"
              value={form.name}
              onChange={onChange}
              label={"Nome"}
              variant={"outlined"}
              fullWidth
              required
              autoFocus
              margin="normal"
            />
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
              Acessar
            </Button>
          </form>
        </InputsContainer>
      </ContainerSignUpFormPage>
    </div>
  );
};

export default SignUpFormPage;
