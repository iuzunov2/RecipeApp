import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Logo from '../pages/ProectIcons/logo_color.svg'
import './Navbar.css'

export const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/login");
  };
  return (
    <div className="navbar">

      <Link to="/"><img src={Logo} alt="" className="logo" /></Link>
      <ul>
        <li className="breakfast">Breakfast</li>
        <li>Brunch</li>
        <li>Lunch</li>
        <li>Dinner</li>
      </ul>
      {/* <Link to="/create-recipe">Create Recipe</Link> */}

      <div className="btns">
        {!cookies.access_token ? (
          <Link to="/login" ><button className="btn-1">LOGIN</button></Link>
        ) : (
          <a href="/myrecipes" className="my-recipes">MY RECIPES</a>
        )}

        {!cookies.access_token ? (
          <span>or</span>
        ) : (
          <br></br>
        )}

        {!cookies.access_token ? (
          <Link to="/register" ><button className="btn-2">CREATE ACCOUNT</button></Link>
        ) : (
          <a href="/myprofile" className="my-profile">MY PROFILE</a>
        )}

        {!cookies.access_token ? (
          <br></br>
        ) : (
          <a href="" className="logout" onClick={logout}>LOG OUT</a>
        )}
      </div>

    </div>
  );
};