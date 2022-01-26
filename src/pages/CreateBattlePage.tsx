import React, {useState} from "react";
import {Box, Typography} from "@mui/material";
import {LoadingButton} from '@mui/lab';
import {defaultState, reducer, START_GLOBAL_LOADING} from "../reducers/GlobalReducer";
import useGlobalAppState from "../contexts/useGlobalAppState";


interface Props {

}

const CreateBattlePage: React.FC<Props> = ({}) => {
  const [, dispatch] = useGlobalAppState();
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    setLoading(true);
    dispatch({ type: START_GLOBAL_LOADING });
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