import styled from "styled-components";


export const MiniCardPostContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
margin-top:1em;
height:5em;
fontSize:1px;

input{
    width:100%;
}

@media screen and (min-device-width : 320px) and (max-device-width :480px){
    display:none;
    // flex-direction:column;
    // justify-content:end;
    // align-items:end;
    // margin-top:0px;
    // margin-left:1px;


    // height:8vh;
    
   
    // input{
       
    //     width:80%;
    //     height:28px;
    //     padding:0px 6px 4px 2px;
    // }
}

`

export const PostButton = styled.button`
color:#01cfff;
font-weight:bolder;
width:100%;
`