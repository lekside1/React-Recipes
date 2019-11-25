import React from 'react';
// eslint-disable-next-line object-curly-newline
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header';
import Welcome from './Welcome';
import Home from './containers/Home';
import Favorites from './Favorites';
import Recipe from './Recipe';
import NotFound from './NotFound';
import Footer from './Footer';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      favorites: [],
    };
  }

  componentDidMount() {
    fetch(`${API_URL}/v1/recipes`)
      .then(res => res.json())
      .then(recipes => {
        this.setState({ recipes });
      });
  }

  toggleFavorite = id => {
    this.setState(({ favorites, ...state }) => {
      if (favorites.includes(id)) {
        return { ...state, favorites: favorites.filter(f => f !== id) };
      }
      return { ...state, favorites: [...favorites, id] };
    });
  }

  render() {
    return (
      <BrowserRouter>
        <main>
          <Header />
          <Switch>
            <Redirect from="/welcome" to="/" />
            <Route exact path="/" component={Welcome} />
            <Route
              path="/home"
              render={() => (
                <Home state={this.state} toggleFavorite={this.toggleFavorite} />
              )}
            />
            <Route
              path="/favorites"
              render={() => (
                <Favorites state={this.state} toggleFavorite={this.toggleFavorite} />
              )}
            />
            <Route path="/favourites"><Redirect to="/favorites" /></Route>
            <Route path="/recipe/:id" component={Recipe} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
