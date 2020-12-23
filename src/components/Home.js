import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';
import useSearchRecipes from './SearchRecipes';
import SearchBar from './containers/SearchBar';
import API_URL from '../static/recipes/recipesURL';

const Home = (props) => {
  const [currentRecipe, setCurrentRecipe] = useState(null);
  const { recipes, favorites } = props.state;
  const { recipeList, searchValue, onInputSearchValue } = useSearchRecipes(recipes);

  const onRecipeClick = id => {
    fetch(`${API_URL}/v1/recipes/${id}`)
      .then(res => res.json())
      .then(recipe => {
        setCurrentRecipe(recipe);
      });
  };

  return (
    <>
      <main className="px4 flex">
        <div style={{ flex: 3 }} className="p1">
          <h2 className="h2">Recipes</h2>
          <SearchBar
            searchValue={searchValue}
            onInputSearchValue={onInputSearchValue}
          />
          <RecipeList
            recipes={recipeList || recipes}
            favorites={favorites}
            onClick={onRecipeClick}
            onFavorited={props.toggleFavorite}
          />
        </div>
        <RecipeDetail
          recipe={currentRecipe}
          className="ml3"
          style={{ flex: 5 }}
        />
      </main>
    </>
  );
};

Home.propTypes = {
  state: PropTypes.object,
  toggleFavorite: PropTypes.func,
};

Home.defaultProps = {
  state: {},
  toggleFavorite: () => {},
};

export default Home;
