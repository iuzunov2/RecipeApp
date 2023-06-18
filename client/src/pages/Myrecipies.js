import React, { useState, useEffect } from "react";
import axios from "axios";
import './Myrecipies.css'
import './create-recipe'
import { useGetUserID } from "../hooks/useGetUserID";
import Plus from './ProectIcons/plus-solid.svg'
import Trash from './ProectIcons/trash-can-regular.svg'
import { CreateRecipe } from "./create-recipe";

export const Myrecipies = () => {

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


    const [recipes, setRecipes] = useState([])
    const [savedRecipes, setSavedRecipes] = useState([]);

    const [show, setShow] = useState(true)

    return (
        <div className="recipes-container">
            <div className="headtitle">
                <h2>My Recipes</h2>
                <button className="plus_btn" onClick={() => setShow((prevState) => !prevState)}><img src={Plus} alt="" /></button>
            </div>
            <div>
                {
                    show === true ? <CreateRecipe /> : <div>
                        <div className="table-heads">
                            <span>Recipe Name</span>
                            <span>Category</span>
                            <span>Cooking Time</span>
                            <span>Delete</span>
                        </div>
                        {recipes.map((recipe) => (
                            // <div className="table">
                                <div className="table-recipes">
                                    <h3>{recipe.name}</h3>
                                    <p>{recipe.category}</p>
                                    <p>{recipe.cookingTime}</p>
                                    <button><img src={Trash} alt=""></img></button>
                                </div>
                            // </div>
                        ))}
                    </div>
                }
            </div>
        </div>
    )
}