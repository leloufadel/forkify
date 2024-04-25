 import 'core-js/stable';
 import 'regenerator-runtime/runtime'; 
 import * as modal from './model.js'
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import { async } from 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');
 
if(module.hot) {
module.hot.accept();
 }


  const showRecipe = async function () {
    try {
      resultsView.renderSpinner();
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
  try {
    resultsView.renderSpinner();
  
    const query = searchView.getQuery();
    if(!query) return;
    // load search result
   await modal.loadSearchResults(query);

   // Render Results: 
   console.log(modal.state.search.results);
    resultsView.render(modal.state.search.results);
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