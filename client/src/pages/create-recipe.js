import React, { useState } from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserID";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import './css/Createrecipe.css'

export const CreateRecipe = () => {
  const userID = useGetUserID();
  const [cookies, _] = useCookies(["access_token"]);
  const [recipe, setRecipe] = useState({
    name: "",
    description: "",
    ingredients: [],
    instructions: "",
    imageUrl: "",
    category: "",
    numberOfPersons: 0,
    cookingTime: 0,
    rating: 0,
    userOwner: userID,
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleIngredientChange = (event, index) => {
    const { value } = event.target;
    const ingredients = [...recipe.ingredients];
    ingredients[index] = value;
    setRecipe({ ...recipe, ingredients });
  };

  const handleAddIngredient = () => {
    const ingredients = [...recipe.ingredients, ""];
    setRecipe({ ...recipe, ingredients });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        "http://localhost:3001/recipes",
        { ...recipe },
        {
          headers: { authorization: cookies.access_token },
        }
      );

      alert("Recipe Created");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="create-recipe">
      {/* <h2>Create Recipe</h2> */}
      <form onSubmit={handleSubmit} className="abf">
        <div className="img-container">
          <label htmlFor="imageUrl" >Image URL</label>
          <input
            className="img-field"
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={recipe.imageUrl}
            onChange={handleChange}
          />
        </div>
        <div className="middle-container">
          <label htmlFor="name" className="name-field">Recipe Name</label>
          <input
            className="name-field"
            type="text"
            id="name"
            name="name"
            value={recipe.name}
            onChange={handleChange}
          />
          <div>
            <label htmlFor="category" className="CCN-labels">Category</label>
            <input
              className="CCN-fields"
              type="texy"
              id="category"
              name="category"
              value={recipe.category}
              onChange={handleChange}
            />
            <label htmlFor="cookingTime" className="CCN-labels">Cooking Time (min)</label>
            <input
              className="CCN-fields"
              type="number"
              id="cookingTime"
              name="cookingTime"
              value={recipe.cookingTime}
              onChange={handleChange}
            />
            <label htmlFor="numberOfPersons" className="CCN-labels">Number of Person</label>
            <input
              className="CCN-fields"
              type="number"
              id="numberOfPersons"
              name="numberOfPersons"
              value={recipe.numberOfPersons}
              onChange={handleChange}
            />
            <label htmlFor="description" className="CCN-labels">Short Description</label>
            <br></br>
            <textarea
              className="CCN-fields"
              id="description"
              name="description"
              value={recipe.description}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <div className="right-container">
          {/* <label htmlFor="ingredients">Ingredients</label>
          {recipe.ingredients.map((ingredient, index) => (
            <input
              key={index}
              type="text"
              name="ingredients"
              value={ingredient}
              onChange={(event) => handleIngredientChange(event, index)}
            />
          ))}
          <button type="button" onClick={handleAddIngredient}>
            Add Ingredient
          </button> */}
          <label htmlFor="instructions">Instructions</label>
          <br></br>
          <textarea
          className="instructions-field"
            id="instructions"
            name="instructions"
            value={recipe.instructions}
            onChange={handleChange}
          ></textarea>
          <label htmlFor="rating">Rating</label>
          <br></br>
          <input
            type="number"
            id="rating"
            name="rating"
            value={recipe.rating}
            onChange={handleChange}
          />
          <br></br>
          <button type="submit">Create Recipe</button>
        </div>

      </form>
    </div>
  );
}; 