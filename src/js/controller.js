 import 'core-js/stable';
 import 'regenerator-runtime/runtime'; 
 import * as modal from './model.js'
import recipeView from './views/recipeView.js';

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

const init = function () {
  recipeView.AddHandlerRender(showRecipe);
}
init();