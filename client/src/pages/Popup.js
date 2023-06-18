import React from "react";
import recepies from "../../recipies";
import Home from './Home'
import './HomePage.css'

const HomePage = () => {

    return (
            <div>
                <h1 className="fresh-new">Fresh & New</h1>
                {
                    recepies.map((recipe,i) => {
                        return <Home recipe={recipe} key={i} />
                    })
                }
            </div>
    )
}

export default HomePage;