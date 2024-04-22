import { API_URL } from "./config";
import { getJSON } from "./helper";
export const state = {
    recipe: {},
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