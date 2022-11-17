import React from "react";
import { MenuItems, MenuIcon, Profile, SideBarContainer, SideBarMin } from "./styled";
import TocIcon from "@mui/icons-material/Toc";
import { Button, ButtonBase } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import LegendToggleIcon from '@mui/icons-material/LegendToggle';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import TopicIcon from '@mui/icons-material/Topic';
const SideBar = () => {
  // const [sideBar,setSideBar] = useState(false)

  return (
    <SideBarContainer>
      <SideBarMin>
       
        <MenuIcon>
        <ButtonBase>
          <TocIcon />
        </ButtonBase>
        
        </MenuIcon>
        <Profile src='https://i.picsum.photos/id/64/4326/2884.jpg?hmac=9_SzX666YRpR_fOyYStXpfSiJ_edO3ghlSRnH2w09Kg' alt= 'imagem'/>

        <MenuItems>
        <h6 >Feed</h6>
        
        <ButtonBase>
        <HomeIcon fontSize='small' />
        <h4>Paginal Inicial </h4>
        </ButtonBase>
        
        <ButtonBase>
        <ExploreIcon fontSize='small'/>
        <h4>Popular</h4>
        </ButtonBase>
       

        <h6>Comunidades Recentes</h6>
        
        
        <ButtonBase>
        <TopicIcon />
        <h4>react</h4>
        </ButtonBase>
        

        <h6>topicos</h6>
        
        <ButtonBase>
        <SportsEsportsIcon  fontSize='small' width="100%"/>
        <h4>Gaming</h4>
        </ButtonBase>
        
        <ButtonBase>
        <SportsBaseballIcon fontSize='small'/>
        <h4>Sports</h4>
        </ButtonBase>
        

        <ButtonBase>
        <LegendToggleIcon fontSize='small'/>
        <h4>Business</h4>
        </ButtonBase>
        
        <ButtonBase>
        <CurrencyBitcoinIcon/>
        <h4>Cripto</h4>
        </ButtonBase>

        <ButtonBase>
        <LiveTvIcon />
        <h4>Television</h4>
        </ButtonBase>
        </MenuItems>
      </SideBarMin>
    </SideBarContainer>
  );
};

export default SideBar;
