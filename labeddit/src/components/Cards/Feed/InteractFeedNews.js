import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { ButtonContainer, FeedButton, MiniCardFeedContainer } from "./styled";

const InteractFeedNews = () => {
  return (
    <MiniCardFeedContainer>
      <Card sx={{ maxWidth: 345 }}>
        <Typography gutterBottom variant="p5" component="div" align="center">
          Feed
        </Typography>
        <CardMedia
          component="img"
          alt="news"
          height="100"
          image="https://picsum.photos/seed/picsum/200/300"
        />
        <CardContent>
          <Typography variant="p5" color="text.secondary">
            Essas são umas das melhores momentos,ano novo
          </Typography>
        </CardContent>
        <CardActions>
          <ButtonContainer>
            <FeedButton size="small" >Share</FeedButton>
            <FeedButton size="small">Share</FeedButton>
            <FeedButton size="small">Share</FeedButton>
          </ButtonContainer>
        </CardActions>
      </Card>
    </MiniCardFeedContainer>
  );
};

export default InteractFeedNews;
