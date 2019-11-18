import React from 'react';
import PropTypes from 'prop-types';
// import { Spring, animated as a, Transition } from 'react-spring/renderprops';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentRecipe: null,
      // show: true,
    };
  }

  // toggle = () => (
  //   this.setState({
  //     show: !state.show,
  //   })
  // );

  onRecipeClick = id => {
    fetch(`${API_URL}/v1/recipes/${id}`)
      .then(res => res.json())
      .then(recipe => {
        this.setState({ currentRecipe: recipe });
      });
  };

  render() {
    const { currentRecipe } = this.state;
    const { recipes, favorites } = this.props.state;

    return (
      <div>
        <main className="px4 flex">
          <div style={{ flex: 3 }}>
            <h2 className="h2">Recipes</h2>
            <RecipeList
              recipes={recipes}
              favorites={favorites}
              onClick={this.onRecipeClick}
              onFavorited={this.props.toggleFavorite}
            />
          </div>
          {/* <div>
            <Transition
              items={this.state.show}
              from={{ position: 'absolute', opacity: 0 }}
              enter={{ opacity: 1 }}
              leave={{ opacity: 0 }}
            >
              {show => (show
                ? props => <div style={props}><span role="img" aria-label="peace">😄</span></div>
                : props => <div style={props}><span role="img" aria-label="peace">🤪</span></div>)}
            </Transition>
          </div> */}
          <RecipeDetail
            recipe={currentRecipe}
            className="ml4"
            style={{ flex: 5 }}
          />
        </main>
      </div>
    );
  }
}

Home.propTypes = {
  state: PropTypes.object,
  toggleFavorite: PropTypes.func,
};

export default Home;
