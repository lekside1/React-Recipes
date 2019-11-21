import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import RecipeListItem from '../../components/RecipeListItem';

const testRecipe = {
  id: 1,
  name: 'Test recipe',
  category: 'Dessert',
};

describe('<RecipeListItem />', () => {
  let component;
  let tree;

  test('Should not break if no recipe passed', () => {
    expect(() => renderer.create(
      <BrowserRouter>
        <RecipeListItem />)).not.toThrow();
      </BrowserRouter>,
    ));
  });

  test('Should render passed recipe', () => {
    component = renderer.create(
      <BrowserRouter>
        <RecipeListItem recipe={testRecipe} />);
      </BrowserRouter>,
    );
    tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should render favorited state', () => {
    component = renderer.create(
      <BrowserRouter>
        <RecipeListItem recipe={testRecipe} favorited />,
      </BrowserRouter>,
    );
    tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should call onClick when clicked', () => {
    const onClick = jest.fn();

    component = mount(
      <BrowserRouter>
        <RecipeListItem recipe={testRecipe} onClick={onClick} />);
      </BrowserRouter>,
    );
    component.simulate('click');

    expect(onClick.mock.calls.length).toBe(1);
    expect(onClick.mock.calls[0][0]).toBe(testRecipe.id);
  });

  test('Should call onFavorited when favorited', () => {
    const onFavorited = jest.fn();

    component = mount(
      <BrowserRouter>
        <RecipeListItem recipe={testRecipe} onFavorited={onFavorited} />,
      </BrowserRouter>,
    );
    component.find('div[role="button"]').simulate('click');

    expect(onFavorited.mock.calls.length).toBe(1);
    expect(onFavorited.mock.calls[0][0]).toBe(testRecipe.id);
  });

  // test('Should not call onClick when favorited', () => {
  //   const onClick = jest.fn();
  //   const onFavorited = jest.fn();

  //   component = mount(
  //     <BrowserRouter>
  //       <RecipeListItem
  //         recipe={testRecipe}
  //         onClick={onClick}
  //         onFavorited={onFavorited}
  //       />
  //     </BrowserRouter>,
  //   );
  //   component.find('div[role="button"]').simulate('click');

  //   expect(onFavorited.mock.calls.length).toBe(1);
  //   expect(onClick.mock.calls.length).toBe(0);
  // });
});
