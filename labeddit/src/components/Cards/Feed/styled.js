import styled from "styled-components";


export const MiniCardFeedContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
margin-top:1em;

@media screen and (min-device-width : 320px) and (max-device-width :480px){
height:99%;
font-size:5px;
margin-top:1%;
img{
    max-height:305px;
}


}
`


export const ButtonContainer= styled.div`
display:flex; 
flex-direction: row;
justify-content: space-between;

`


export const FeedButton = styled.button`
color:#01cfff;
font-weight: bolder;

`