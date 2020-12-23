import { useState, useCallback, useEffect } from 'react';

const defaultRecipes = [
  { id: 1, name: 'Creepy Halloween Skull Cupcakes', category: 'Dessert' },
  { id: 2, name: 'Blueberry Sour Cream Coffee Cake', category: 'Dessert' },
  { id: 3, name: 'To Die For Fettuccine Alfredo', category: 'Pasta' },
  { id: 4, name: 'Caprese cake', category: 'Meal' },
  { id: 5, name: 'Light and Fluffy Spinach Quiche', category: 'Dessert' },
  { id: 6, name: 'Chicken Cordon Bleu II', category: 'Meat' },
  { id: 7, name: 'Banana Banana Bread', category: 'Bread' },
  { id: 8, name: 'Beef Stew VI', category: 'Meat' },
];

// const searchForRecipe = (recipes, searchValue) => (recipes
//   ? recipes.filter(r => r.name.toLowerCase().includes(searchValue.toLowerCase())
//             || r.category.toLowerCase().includes(searchValue.toLowerCase())
//             || r.calories.toLowerCase().includes(searchValue.toLowerCase())
//             || r.ingredients.toLowerCase().includes(searchValue.toLowerCase())
//             || r.steps.toLowerCase().includes(searchValue.toLowerCase()))
//   : defaultRecipes.filter(r => r.name.toLowerCase().includes(searchValue.toLowerCase())
//             || r.category.toLowerCase().includes(searchValue.toLowerCase())));

const searchForRecipe = (recipes, searchValue) => (recipes
  ? recipes.filter(r => r.name.toLowerCase().includes(searchValue.toLowerCase())
    || r.category.toLowerCase().includes(searchValue.toLowerCase()))
  : defaultRecipes.filter(r => r.name.toLowerCase().includes(searchValue.toLowerCase())
    || r.category.toLowerCase().includes(searchValue.toLowerCase())));

const useSearchRecipes = ({ recipes }) => {
  const [recipeList, setRecipeList] = useState(recipes);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    setRecipeList(searchValue === '' ? recipes : searchForRecipe(recipes, searchValue));
  }, [recipes, searchValue]);

  const onInputSearchValue = useCallback((event) => {
    const { value } = event.currentTarget;
    setSearchValue(value);
  }, []);

  return { recipeList, searchValue, onInputSearchValue };
};

export default useSearchRecipes;
