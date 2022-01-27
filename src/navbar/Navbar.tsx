import React from "react";
import {AppBar, Box} from "@mui/material";
import './Navbar.css';
import NavButton from "./NavButton";
import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import CreateBattlePage from "../pages/CreateBattlePage";
import ListBattlesPage from "../pages/ListBattlesPage";


const pages = ['Create New Battle', 'List Battles'];

const Navbar: React.FC = () => {

  return (
    <Router>
      <AppBar position="fixed" className="Navbar" sx={{ background: '#600101' }}>
        <Box sx={{ flexGrow: 1, display: 'flex' }}>
          {pages.map((page) => (
              <NavButton key={page} label={page} route={"/" + page.toLowerCase().replaceAll(' ', '-')}/>
          ))}
        </Box>
      </AppBar>
      <Routes>
        <Route path="/" element={<ListBattlesPage/>} />
        <Route path="/create-new-battle" element={<CreateBattlePage/>} />
        <Route path="/list-battles" element={<ListBattlesPage/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  );
};

function NotFound() {
  return <h2>Page Not Found (404)</h2>;
}

export default Navbar;