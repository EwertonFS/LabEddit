import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { MiniCardPostContainer, PostButton } from "./styled";

const CreatePostCard = (props) => {
 
  
  
  
  return (
      <MiniCardPostContainer>
    <Card sx={{ maxWidth: 350 }} >
      
      <Typography gutterBottom variant="p5" component="div" align="center" >
       <p>{props.post.title}</p>
      </Typography>
      <CardMedia
        component="img"
        alt="poster"
        height="100"
        image='https://picsum.photos/seed/picsum/200/300'
      />
    
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
        </Typography>
        <PostButton size="small" 
        fullWidth
        >POSTAR</PostButton>
      </CardContent>
    </Card>
    </MiniCardPostContainer>

        
  );
};

export default CreatePostCard;
