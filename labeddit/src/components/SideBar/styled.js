import styled from "styled-components";

export const SideBarContainer = styled.div`
display:flex;
background-color: #cdefff;
height:100vh;
position:fixed;
top:0
left:0;
justify-content:start;
alignt-items:start;
flexdirection:column;
width:13em;
border: 0,2px solid;
border-radius:2px;


`
export const SideBarMin = styled.div`
width:13em;
height:90%;
justify-content:start;
align-items: start;
border: 1px solid #cdefff;
padding: 15px;
margin:1em;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
border-radius:2px;
backdrop-filter: invert(5%);
`
export const MenuIcon = styled.div`
display:flex;
justify-content: end;
`

export const Profile = styled.img`
display:flex;
width:4rem;
align-items: center;
border-radius:50%;
margin-bottom:1rem;
margin-left:2em;
aling-items:center;
justify-content:center;
`

export const MenuItems = styled.div`
display:flex;
flex-direction:column;
align-Items:start;
width:100
`

