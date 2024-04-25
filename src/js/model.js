import { API_URL } from "./config";
import { getJSON } from "./helper";
export const state = {
    recipe: {},
    search: {
      query: '',
      results: [],
    }
};
export const loadRecipe = async function(id){
  try{
    
    // const data = await getJSON()
    const res = await fetch(`${API_URL}/${id}`);
    const data = await res.json();
    const {recipe} = data.data;

  
  state.recipe = {
      id: recipe.id, 
      title: recipe.title, 
      publisher: recipe.publisher, 
      sourceUrl: recipe.source_url, 
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time, 
      ingredients: recipe.ingredients,
  }
}catch (err) {
   console.error(err);
}};
export const loadSearchResults = async function (query){
  try {
    const data = await getJSON(`${API_URL}?search=${query}`);
    console.log(data); // Log the entire response object

    // Adjust the following line based on the actual structure of the response object
    state.search.results = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
      }
      }
    );
    }
  catch(err){
    console.error(err);
  }
};
// loadSearchResults('pizza');

