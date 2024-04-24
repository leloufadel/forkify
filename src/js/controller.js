 import 'core-js/stable';
 import 'regenerator-runtime/runtime'; 
 import * as modal from './model.js'
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';

const recipeContainer = document.querySelector('.recipe');

  const showRecipe = async function () {
    try {

      const id = window.location.hash.slice(1);
        
      if(!id) return;
      recipeView.renderSpinner();
      // Loading recipes
      await modal.loadRecipe(id);
       
     // Rendering recipe: 
      recipeView.render(modal.state.recipe);
       
    } catch (err) {
      // Catch and display any errors that occur during fetch or JSON parsing
      recipeView.renderError();
    }
  }
const constrolSearhResults = async function(){
  try{
    const query = searchView.getQuery();
    if(!query) return;
   await modal.loadSearchResults(query);
   console.log(modal.state.search.results);
  
  } catch (err){
    console.error(err);
  }
}
constrolSearhResults();

const init = function () {
  recipeView.AddHandlerRender(showRecipe);
  searchView.addHandlerSearch(constrolSearhResults);
}
init();