import SearchAppBar from "../../components/AppBar/SearchAppBar";
import * as React from "react";
import CreatePostCard from "../../components/Cards/Create/CreatePostCard";
import { CardContainer } from "./styled";
import InteractFeedNews from "../../components/Cards/Feed/InteractFeedNews";

const PostPage = () => {
 
 
  return (
      
    
    <>
      <SearchAppBar />
      <CardContainer>
        <CreatePostCard />
        <InteractFeedNews />
        <InteractFeedNews />
      </CardContainer>
    </>
  );
};

export default PostPage;
