import SearchAppBar from "../../components/AppBar/SearchAppBar";
import * as React from "react";
import CreatePostCard from "../../components/Cards/Create/CreatePostCard";
import { CardContainer } from "./styled";
import InteractFeedNews from "../../components/Cards/Feed/InteractFeedNews";
import { listItemAvatarClasses } from "@mui/material";
import axios from 'axios'
import { useState } from "react";

const PostPage = () => {

  const[ news,setNews] = React.useState( [{
  
  }]  )  
  
  // const [search,setSearch] = useState("")
    
  //  const number = [ 0,1,2,3,4,5,6,7,8,9] 

    const pessoas = ["maria", "luiza", "rita", "Morgana"]  
   
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
  
  React.useEffect(() => {
    axios.request(options)
    .then(function (response) {
    // console.log('PERFIL',response.data);
    setNews(response.data)
      
    }).catch(function (error) {
      console.error(error);
    });
    
  }, []) 

   
  
    
   
 
  // {news.map(news =>{
  //   return <p>{news.title}</p>
  // })}

    
  return (
    <>
      <SearchAppBar />

      {/* <p>{number.filter((numero)=>{
       if(numero > 5){
         return true
        }
        })}</p> */}
        {pessoas.filter((pessoa)=>{
          if(pessoa.includes()){
            return true 
          }else{
            return false 
          }
          
        })}
      
      <CardContainer>
        {/* precisei fazer um map  */}
        { news.map((list) => <InteractFeedNews 
        info={list} />) } 

        {news.map((listing)=>{
          return <CreatePostCard  post={listing}/>
        })}
        
        

        
      </CardContainer>
      
    </>
  );
};

export default PostPage;
