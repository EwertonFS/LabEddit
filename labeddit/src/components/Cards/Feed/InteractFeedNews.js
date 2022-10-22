import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useEffect, useState } from "react";



import { ButtonContainer, FeedButton, MiniCardFeedContainer } from "./styled";

const InteractFeedNews = () => {
 
  const[ news,setNews] = useState(   {
    "dateLong": 1636422074235,
    "url": "https://sanfrancisco.cbslocal.com/2021/11/08/elon-musk-asks-twitter-sell-tesla-shares-tsla-stock-slides/",
    "title": "Tesla Shares Slide After Elon Musk Asks Twitter If He Should Sell",
    "sub_title": "More than $30 billion was wiped off Tesla's market value on Monday after millions of Elon Musk's Twitter followers voted in favor of him selling 10% of his shares.",
    "image": "https://sanfrancisco.cbslocal.com/wp-content/uploads/sites/15116056/2019/10/Elon-Musk.jpg?w=1024",
    "author": "sanfrancisco.cbslocal.com",
    "slug": "https-sanfrancisco-cbslocal-com-2021-11-08-elon-musk-asks-twitter-sell-tesla-shares-tsla-stock-slides",
    "type": "text/html",
    "content": "More than $30 billion was wiped off Tesla’s market value on Monday. Millions of Elon Musk’s twitter followers voted in favor of him selling 10% of his shares in the Bay Area-based electric car company. Tesla shares fell by about 3% in morning trading in New York, recovering slightly from a premarket drop of 6%."
  })  
  
   
    
    
 
  
    //url do site da api : https://rapidapi.com/machaao-inc-machaao-inc-default/api/newsx/
 
    //Não consegui executar a requisição da maneira habitual
   
  //  const method = 'GET'
  //  const params=  {limit: '10', skip: '0'}
  //  const headers= {
  //     'X-RapidAPI-Key': 'aff209994bmsh2f9e8344d0e4802p11ef80jsn3b93d61695ed',
  //     'X-RapidAPI-Host': 'newsx.p.rapidapi.com'
  //   }
  
  //   axios.get(method,'https://newsx.p.rapidapi.com/search',params,headers)
  //  .then((response)=>{
  //     console.log(response.data)
  //     setNews(response.data);
  //   })
  
  const options = {
    method: 'GET',
    url: 'https://newsx.p.rapidapi.com/search',
    params: {limit: '10', skip: '0'},
    headers: {
      'X-RapidAPI-Key': 'aff209994bmsh2f9e8344d0e4802p11ef80jsn3b93d61695ed',
      'X-RapidAPI-Host': 'newsx.p.rapidapi.com'
    }
  };
  
  useEffect(() => {
    axios.request(options).then(function (response) {
      console.log('PERFIL',response.data);
      
    }).catch(function (error) {
      console.error(error);
    });
    
  }, [news]) 

   
    
  
  
   
    
   
 



 
   
 
 
  return (
    <MiniCardFeedContainer>
      <Card sx={{ maxWidth: 345 }}>
        {news.id}
        <Typography gutterBottom variant="p5" component="div" align="center">
          <strong>{news.title} </strong>
        </Typography>
        <CardMedia
          component="img"
          alt="news"
          height="200"
          image={news.image}
        />
        <CardContent>
          <Typography variant="p5" color="text.secondary">
            {news.content}
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
