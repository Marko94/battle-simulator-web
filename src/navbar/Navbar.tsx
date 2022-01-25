import React from "react";
import {AppBar, Box, Button, Divider} from "@mui/material";
import './Navbar.css';
import NavButton from "./NavButton";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


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
        <Route path="/" element={<Home/>} />
        <Route path="/create-new-battle" element={<CreateBattle/>} />
        <Route path="/list-battles" element={<ListBattles/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  );
};

function Home() {
  return <h2>Home</h2>;
}

function CreateBattle() {
  return <h2>Crate New Battle</h2>;
}

function ListBattles() {
  return <h2>List Battles</h2>;
}

function NotFound() {
  return <h2>Page Not Found (404)</h2>;
}

export default Navbar;