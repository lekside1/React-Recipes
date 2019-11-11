import React from 'react';
import Header from './Header.js';
import RecipeList from './RecipeList.js';
import RecipeDetail from './RecipeDetail.js';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            recipes: [],
            currentRecipe: null,
        };
    }

    componentDidMount() {
        fetch(`${API_URL}/v1/recipes`)
        .then(res => res.json())
        .then(recipes => {
            this.setState({ recipes });
        }).catch(err => console.log(`an error ${err.message} has occured`));
    }

    onRecipeClick = (id) => {
        fetch(`${API_URL}/v1/recipes/${id}`)
            .then(res => res.json())
            .then(recipe => {
                this.setState({ currentRecipe: recipe });
            }).catch(err => console.log(`an error ${err.message} has occured`));
    }

    render() {
        const { recipes, currentRecipe } = this.state;

        return ( 
            <div>
                <Header />
                <main className="px4 flex">
                    <RecipeList 
                        recipes={recipes} 
                        style={{ flex: 3 }}
                        onClick={this.onRecipeClick}
                    />
                    <RecipeDetail
                        recipe={currentRecipe} 
                        className="ml4"
                        style={{ flex: 5 }}/>
                </main>
            </div> 
        );
    }
}
    

export default App;