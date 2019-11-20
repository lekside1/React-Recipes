import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import RecipeDetail from '../../components/RecipeDetail';

describe('<RecipeDetail />', () => {
  let component;
  let tree;
  let testRecipeDetail;

  beforeEach(() => {
    testRecipeDetail = {
      id: 1,
      name: 'Test Recipe',
      category: 'Dessert',
      calories: 100,
      image: 'test image url',
      ingredients: ['Ingredient 1', 'Ingredient 2'],
      steps: ['Step 1', 'Step 2'],
    };
  });

  const recipe = (props = {}) => (
    <BrowserRouter>
      <RecipeDetail {...props} />
    </BrowserRouter>
  );

  test('Should render RecipeDetail if no recipe', () => {
    component = renderer.create(recipe());
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Should render RecipeDetail recipe', () => {
    component = renderer.create(recipe({ recipe: testRecipeDetail }));
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
