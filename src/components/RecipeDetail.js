import React from 'react';

const RecipeDetail = (props) => (
    <div style={props.style}>
       <h2>Creepy Halloween Skull Cupcakess</h2>
       <img src="src/static/images/meowth.png" height='300px' width='300px'/>
       <div>
           <span>Desert</span>
           <span>1200 cal</span>
       </div>
       <h3>Ingredients</h3>
       <ul>
            <li>1 package</li>
            <li>2 spoons of sugar</li>
            <li>3 eggs</li>
       </ul>
       <h3>Steps</h3>
       <ol>
            <li>Do this</li>
            <li>Do that</li>
            <li>Do even this</li>
            <li>Do even that</li>
       </ol>
    </div>
);

export default RecipeDetail;