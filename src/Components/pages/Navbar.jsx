import { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";



export const Navbar = () => {

const navstyle = {
  margin: "20px",
  padding : "20px"
}
  // const { token } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully
 
  return (
    <>
      <nav style={{margin: "20px", backgroundColor: "lightgreen", padding:"20px"}}>
        {/* keep all the NavLinks here */}
        <NavLink to='/' style={navstyle}>Home</NavLink>
        <NavLink to='/about'style={navstyle}>About</NavLink>
        <NavLink to='/books'style={navstyle}>Books</NavLink>
        <NavLink to='/login'style={navstyle}>Login</NavLink>
      </nav>
    </>
  );
};
