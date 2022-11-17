//Logica de alteração do tema
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#cdefff",
      contrastText: "#21130d"
    },
    secondary: {
      main: "#01cfff",
      contrastText: "#ffcc00"

    },
    third: {
      main: "#000000",
      contrastText: "#a8d5e5"

    }
  },
});

