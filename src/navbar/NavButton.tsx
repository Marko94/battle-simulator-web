import React from "react";
import {Box, Button, Divider, IconButton} from "@mui/material";
import {useNavigate} from "react-router-dom";
import SecurityIcon from '@mui/icons-material/Security';

interface Props {
  label: string;
  route: string;
  isHomeButton?: boolean;
}

const NavButton: React.FC<Props> = ({label, route, isHomeButton}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  return (
    <Box display="flex">
      {isHomeButton ?
        <IconButton size="large" onClick={handleClick} sx={{borderRadius:0}}>
          <SecurityIcon style={{ color: "#2e0000" }}/>
        </IconButton>
        :
        <Button
          key={label}
          onClick={handleClick}
          sx={{color: 'white', display: 'block', fontWeight: 700, px: 4}}
        >
          {label}
        </Button>
      }
      <Divider orientation="vertical" />
    </Box>
  );
};

export default NavButton;