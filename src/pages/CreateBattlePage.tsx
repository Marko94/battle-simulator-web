import React, {useState} from "react";
import {Box, Typography} from "@mui/material";
import {LoadingButton} from '@mui/lab';
import {START_GLOBAL_LOADING, STOP_GLOBAL_LOADING} from "../reducers/GlobalReducer";
import useGlobalAppState from "../contexts/useGlobalAppState";

const CreateBattlePage: React.FC = ({}) => {
  const [, dispatch] = useGlobalAppState();
  const [loading, setLoading] = useState(false);
  const handleClick = async () => {
    setLoading(true);
    dispatch({type: START_GLOBAL_LOADING});

    const url = `http://localhost:8080/createNewBattle`;
    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    setLoading(false);
    dispatch({type: STOP_GLOBAL_LOADING});
    console.log(response);
    if (response.ok) {
      console.log(await response.json());
    } else {
      console.error(`Failed to request:`, response.status, response.statusText);
    }
  };

  return (
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h4" gutterBottom>
          Battle creation Page
        </Typography>
        <LoadingButton
            onClick={handleClick}
            loading={loading}
            variant="contained"
            sx={{
              background: '#600101',
              color: 'white',
              display: 'flex',
              width: 'max-content',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              px: 4,
              '&:hover': { background: '#440000' },
              '&:disabled': {background: '#600101'},
            }}
            disabled={loading}
        >
          Create New Battle
        </LoadingButton>
      </Box>
  );
};

export default CreateBattlePage;