import React from 'react';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      favorites: [],
      currentRecipe: null,
    };
  }

  componentDidMount() {
    fetch(`${API_URL}/v1/recipes`)
      .then(res => res.json())
      .then(recipes => {
        this.setState({ recipes });
      });
  }

  onRecipeClick = id => {
    fetch(`${API_URL}/v1/recipes/${id}`)
      .then(res => res.json())
      .then(recipe => {
        this.setState({ currentRecipe: recipe });
      });
  };

  toggleFavorite = id => {
    this.setState(({ favorites, ...state }) => {
      const idx = favorites.indexOf(id);

      if (idx !== -1) {
        return { ...state, favorites: favorites.filter(f => f.id === id) };
      }
      return { ...state, favorites: [...favorites, id] };
    });
  }

  render() {
    const { recipes, favorites, currentRecipe } = this.state;

    return (
      <div>
        <main className="px4 flex">
          <RecipeList
            recipes={recipes}
            favorites={favorites}
            style={{ flex: 3 }}
            onClick={this.onRecipeClick}
            onFavorited={this.toggleFavorite}
          />
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

export default Home;
