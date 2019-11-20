import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Welcome from '../../components/Welcome';

describe('<Welcome />', () => {
  let component;
  let tree;

  test('Should Render Welcome', () => {
    component = renderer.create(
      <BrowserRouter>
        <Welcome />
      </BrowserRouter>,
    );
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
