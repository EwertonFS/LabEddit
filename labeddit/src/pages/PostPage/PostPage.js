import SearchAppBar from "../../components/AppBar/SearchAppBar";
import * as React from "react";
import CreatePostCard from "../../components/Cards/Create/CreatePostCard";
import { CardContainer, Container } from "./styled";
import InteractFeedNews from "../../components/Cards/Feed/InteractFeedNews";
import { CircularProgress,LinearProgress,listItemAvatarClasses,} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import SideBarClosed from "../../components/SideBar/SideBarClosed";

const PostPage = () => {
  const [news, setNews] = React.useState([{}]);

  const [peaple, setPeaple] = React.useState("");

  const [isloading, setLoading] = useState(false);

  const [openSideBar, setOpenSideBar] = useState(true);

  const handleSidebarOpen = () => {
    setOpenSideBar(!openSideBar);
    return true;
  };

  const handleSidebarclosed = () => {
    if (openSideBar === true) {
      return setOpenSideBar(false);
    }
  };

  const [busca, setBusca] = useState("");

  const pessoas = ["Ana", "maria", "lucia", "joao"];

  const pessoasFiltradas = pessoas.filter((pessoa) =>
    pessoa.toLowerCase().includes(peaple.toLocaleLowerCase())
  );

  //url do site da api : https://rapidapi.com/machaao-inc-machaao-inc-default/api/newsx/

  const options = {
    method: "GET",
    url: "https://newsx.p.rapidapi.com/search",
    params: { limit: "10", skip: "0" },
    headers: {
      "X-RapidAPI-Key": "aff209994bmsh2f9e8344d0e4802p11ef80jsn3b93d61695ed",
      "X-RapidAPI-Host": "newsx.p.rapidapi.com",
    },
  };

  React.useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        // console.log('PERFIL',response.data);
        setNews(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [news]);


  console.log(news);

  return (
    <>
      <SearchAppBar
        search={busca}
        changeSearch={(e) => setBusca(e.target.value)}
      />

      <Container>
        {openSideBar === false ? (
          <SideBar change={handleSidebarOpen} />
        ) : (
          <SideBarClosed changeOpen={handleSidebarclosed} />
        )}

        {/* <SideBarClosed/> */}

        {/* <SideBar /> */}

        {/* <input 
      placeholder='pesquisa'
      value={peaple}
      onChange={(e)=>setPeaple(e.target.value)}
      
      ></input>
      
      {pessoasFiltradas.map((gentes)=>(<li>{gentes}</li>))} */}
        {isloading === false ? (
          <CircularProgress /> && (
            <CardContainer>
              {/* precisei fazer um map  */}

              <CreatePostCard />

              {news
                .filter((neo) =>
                  neo.title?.toString().toLowerCase().includes(busca)
                )
                .map((list) => (
                  <InteractFeedNews info={list} key={list.id} />
                ))}
            </CardContainer>
          )
        ) : (
          <h>Busca N??o Encontrada</h>
        )}
      </Container>
    </>
  );
};

export default PostPage;
