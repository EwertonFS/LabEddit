import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ButtonContainer, FeedButton, MiniCardFeedContainer } from './styled';


 const InteractFeedNews = () => {
    return (
        <MiniCardFeedContainer>
        <Card sx={{ maxWidth: 345 }}>
        <Typography gutterBottom variant="p5" component="div"align="center">
          Lizard
        </Typography>
      <CardMedia
        component="img"
        alt="news"
        height="100"
        image='https://picsum.photos/seed/picsum/200/300'
      />
      <CardContent>
        <Typography variant="p5"  color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
        </Typography>
      </CardContent>
      <CardActions >
        <ButtonContainer>
        <FeedButton size="small">Share</FeedButton>
        <FeedButton size="small">Share</FeedButton>
        <FeedButton size="small">Share</FeedButton>
        </ButtonContainer>
      </CardActions>
    </Card>
    </MiniCardFeedContainer>
    )
}

export default InteractFeedNews