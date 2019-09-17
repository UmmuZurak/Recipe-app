import React,{Component} from 'react';
import Search from './Components/Search.js';
import Recipes from './Components/Recipes.js';
import './style.css';

const API_KEY = '082d0ddb8840917b8132444e0ef7fb18';

class App extends Component{
    state = {
        recipes: []
    }
    getRecipe = async (e) => {
       const recipeName = e.target.elements.recipeName.value;
       e.preventDefault()
       const api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=12` )
       const data = await api_call.json();
       this.setState({
           recipes: data.recipes
       })
       console.log(data);
    }
    render(){
        return(
            <div className='app'>
                
                <Search getRecipe={this.getRecipe}/>
                <Recipes recipes={this.state.recipes}/>
            </div>
        )
    }
}

export default App;