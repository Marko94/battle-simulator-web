import React from "react";
import {Box, Button, Divider} from "@mui/material";
import {useNavigate} from "react-router-dom";

interface Props {
  label: string;
  route: string;
}

const NavButton: React.FC<Props> = ({label, route}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  return (
    <Box display="flex">
      <Button
          key={label}
          onClick={handleClick}
          sx={{ color: 'white', display: 'block', fontWeight: 700, px: 4 }}
      >
        {label}
      </Button>
      <Divider orientation="vertical" />
    </Box>
  );
};

export default NavButton;