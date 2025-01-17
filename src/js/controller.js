 import 'core-js/stable';
 import 'regenerator-runtime/runtime'; 
 import * as modal from './model.js'
import recipeView from './views/recipeView.js';

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};



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
      console.error('Error fetching recipe:', err);
      alert('Failed to fetch recipe. Please try again later.');
    }
  }

document.addEventListener('DOMContentLoaded', (event) => {
    ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, showRecipe));
});