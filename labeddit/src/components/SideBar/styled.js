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
height:95%;
justify-content:start;
align-items: start;
border: 1px solid #cdefff;
padding: 15px;
margin:3px 10px 3px 0;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
border-radius:2px;
background: rgb(0,212,255);
background: linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(205,239,255,1) 30%);
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

button{
    
}
`
// SideBar Fechada Mundança//

export const SideBarClosedContainer = styled.div`
display:flex;
background-color: #cdefff;
height:100vh;
position:fixed;
top:4em;
left:0;
justify-content:start;
alignt-items:left;
flexdirection:column;
width:10px;
border: 0,2px solid;
border-radius:2px;

`





export const SideBarMinClosed= styled.div`
width:5em;
height:95%;
min-height:844px;
justify-content:start;
align-items: start;
border: 1px solid #cdefff;
padding: px;
margin:3px 10px 3px 0;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
border-radius:2px;
background: rgb(0,212,255);
background: linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(205,239,255,1) 60%);

button{
margin-top:10px;
}

`
export const MenuIconClosed = styled.div`
display:flex;
justify-content:center;
`

export const ProfileClosed = styled.img`
display:flex;
width:100%;
align-items: center;
border-radius:50%;
margin-bottom:1rem;
margin-left:0;
margin-top:2rem;
aling-items:center;
justify-content:center;
`