import React from 'react';
import './App.css';
import Navbar from "./navbar/Navbar";
import {Backdrop, CircularProgress} from "@mui/material";
import useGlobalAppState from "./contexts/useGlobalAppState";


function App() {
  const [state,] = useGlobalAppState();

  return (
    <div className="App">
      <Navbar/>
      <Backdrop
          open={state.isGlobalLoadingInProgress}
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div>

      </div>
    </div>
  );
}

export default App;
