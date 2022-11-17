import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { MiniCardPostContainer } from "./styled";
import { ButtonBase, TextField } from "@mui/material";
import AddBoxIcon from '@mui/icons-material/AddBox';



const CreatePostCard = (props) => {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  return (
    <MiniCardPostContainer>
      <Card sx={{ minWidth: 345 }}>
        <CardContent>
          <TextField 
          label="your posts"
          
          >
          </TextField>
          <ButtonBase >
          < AddBoxIcon fontSize="large"/>
          </ButtonBase>
          
        </CardContent>
      </Card>
    </MiniCardPostContainer>
  );
};

export default CreatePostCard;
