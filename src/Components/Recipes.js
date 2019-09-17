import React from 'react';
// import Button from './Button';

const Recipes = props => (
    <div className='recipes'>
        {props.recipes.map((recipe)=>{
            return (
                <div key={recipe.title} className='recipeItem'>
                    <img src={recipe.image_url} alt={recipe.title}/>
                    <p>{
                        recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0,30)}...`
                        }</p>
                    <a href={recipe.f2f_url} target='_blank'><button className='recipeButton'>Get Recipe</button></a>
                </div>
            )
        })

        }
    </div>
);
    

export default Recipes;