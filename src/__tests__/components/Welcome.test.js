import React from 'react';
import renderer from 'react-test-renderer';
import { Spring } from 'react-spring/renderprops';
import Welcome from '../../components/Welcome';

it('Should Render Welcome', () => {
  const tree = renderer.create(
    <Spring> <Welcome /></Spring>,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
