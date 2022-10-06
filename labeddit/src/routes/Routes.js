import {Routes, Route } from "react-router-dom";
import PostPage from "../pages/PostPage/PostPage";
import LoginPage from "../pages/LoginPage/LoginPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import { theme } from "../constants/theme";
import { ThemeProvider } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline'
const RoutesApp = () => {
    return (
       
           <ThemeProvider theme={theme}>
            <CssBaseline />
        <Routes>
          
          <Route path='/' element={<PostPage />}/>
          <Route path='/login' element={<LoginPage />} />
          <Route path='cadastrar' element={<SignUpPage />} />
          
        
      </Routes>
          </ThemeProvider>
      
    );
  }
  
  export default RoutesApp;