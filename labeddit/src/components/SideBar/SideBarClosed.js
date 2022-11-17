import React from "react";
import { MenuItems, MenuIcon, Profile, SideBarContainer, SideBarMin, SideBarClosedContainer, ProfileClosed, SideBarMinClosed, MenuIconClosed } from "./styled";
import TocIcon from "@mui/icons-material/Toc";
import {  ButtonBase } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import LegendToggleIcon from '@mui/icons-material/LegendToggle';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import TopicIcon from '@mui/icons-material/Topic';


const SideBarClosed = (props) => {
  
    

  return (
    <SideBarClosedContainer>
       
      <SideBarMinClosed>
        <MenuIconClosed>
        <ButtonBase>
          <TocIcon 
          onClick={props.changeOpen}
          />
        </ButtonBase>
        </MenuIconClosed>
        
        <ProfileClosed src='https://i.picsum.photos/id/64/4326/2884.jpg?hmac=9_SzX666YRpR_fOyYStXpfSiJ_edO3ghlSRnH2w09Kg' alt= 'imagem'/>

        <MenuItems>
        <h6 >Feed</h6>
        
        <ButtonBase fullWidth>
        <HomeIcon fontSize='small' 
        />
        
        </ButtonBase>
        
        <ButtonBase>
        <ExploreIcon fontSize='small'/>
        
        </ButtonBase>
       

        <h6>Groups</h6>
        
        
        <ButtonBase>
        <TopicIcon />
        </ButtonBase>
        

        <h6>Topics</h6>
        
        <ButtonBase>
        <SportsEsportsIcon  fontSize='small' width="100%"/>
        </ButtonBase>
        
        <ButtonBase>
        <SportsBaseballIcon fontSize='small'/>
        </ButtonBase>
        

        <ButtonBase>
        <LegendToggleIcon fontSize='small'/>
        </ButtonBase>
        
        <ButtonBase>
        <CurrencyBitcoinIcon/>
        </ButtonBase>

        <ButtonBase>
        <LiveTvIcon />
        </ButtonBase>
        </MenuItems>
      </SideBarMinClosed>
    </SideBarClosedContainer>
  );
};

export default SideBarClosed;