import React, { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";
import Time from './ProectIcons/icon_time.svg'
import Plate from './ProectIcons/icon_plate.svg'
import Star from './ProectIcons/icon_star.svg'
import Close from './ProectIcons/icon_close.svg'
import "./css/Home.css"

export const Home = (props) => {
  const [recipes, setRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);

  const userID = useGetUserID();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:3001/recipes");
        setRecipes(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/recipes/savedRecipes/ids/${userID}`
        );
        setSavedRecipes(response.data.savedRecipes);
      } catch (err) {
        console.log(err);
      }
    };

    fetchRecipes();
    fetchSavedRecipes();
  }, []);

  const saveRecipe = async (recipeID) => {
    try {
      const response = await axios.put("http://localhost:3001/recipes", {
        recipeID,
        userID,
      });
      setSavedRecipes(response.data.savedRecipes);
    } catch (err) {
      console.log(err);
    }
  };

  const isRecipeSaved = (id) => savedRecipes.includes(id);


  const [popup, setPopup] = useState(false)

  const toggleCard = () => {
    setPopup(!popup)
  }

  return (
    <div className="home">
      <h1>Fresh & New</h1>
      <div className="container" onClick={toggleCard}>
        <div className="overlay"></div>
        {recipes.map((recipe) => (
          <div className="modal" key={recipe._id}>
            <div className="card" >
              <img src={recipe.imageUrl} alt={recipe.name} />
            </div>
            <div className="card-body">
              <h2>{recipe.name}</h2>
              <div className="description">
                <p>{recipe.description}</p>
              </div>
              <div className="rating-field">
                <p><img className="card-icons" src={Time} alt="" />{recipe.cookingTime} minutes</p>
                <p><img className="card-icons" src={Plate} alt="" />{recipe.numberOfPersons} Person</p>
                <p><img className="card-icons" src={Star} alt="" />{recipe.rating} /10</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {
        popup && (
          <div className="modal">
            <div className="overlay"></div>
            <div className="modal-content">
              {recipes.findIndex((recipe,id) => (
                <div className="left-wrapper" key={id}>
                  <h2>{recipe.name}</h2>
                  <img src={recipe.imageUrl} width='300px' alt={recipe.name}></img>
                  <div className="best-served-for">
                    <h4>Best Served For</h4>
                    <span>{recipe.bestServedFor}</span>
                  </div>
                  <p>{recipe.description}
                  </p>
                  <div className="preparation">
                    <ul>
                      <li><img src={Time} alt="icon"></img>{recipe.cookingTime}</li>
                      <li><img src={Plate} alt="icon"></img>  {recipe.numberOfPersons} persons</li>
                      <li><img src={Star} alt="icon"></img>{recipe.rating} /10</li>
                    </ul>
                  </div>
                </div>
              ))}
              <div className='right-wrapper'>
                <h4>Recipe Details</h4>
                <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,
                  combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text.
                  It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,
                  or randomised words which don't look even slightly believable.</p>
                <button><img src={Close} alt="" onClick={toggleCard} /></button>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

