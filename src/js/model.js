export const state = {
    recipe: {},
};
export const loadRecipe = async function(id){
  const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
  const data = await res.json();

  if (!res.ok) {
      // If response is not ok (HTTP error status), throw a new Error
      throw new Error(`Failed to fetch recipe (${res.status} ${res.status})`);
  }

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
}