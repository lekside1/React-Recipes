import React from 'react';
import PropTypes from 'prop-types';
import RecipeDetail from './RecipeDetail';
import API_URL from '../static/recipes/recipesURL';

class Recipe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipe: null,
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const url = `${API_URL}/v1/recipes/${id}`;
    fetch(url)
      .then(res => res.json())
      .then(recipe => {
        this.setState({ recipe });
      });
  }

  render() {
    const { recipe } = this.state;
    return (
      <div className="px4">
        <RecipeDetail recipe={recipe} />
      </div>
    );
  }
}

Recipe.propTypes = {
  match: PropTypes.object,
};

Recipe.defaultProps = {
  match: {},
};

export default Recipe;
