import * as model from "./model.js";
import recipeView from "./views/recipeViews.js";
import searchView from "./views/searchView.js";
import resultsView from "./views/resultsView.js";
import paginationView from "./views/paginationView.js";

import "core-js/stable";
import "regenerator-runtime/runtime";
import { async } from "regenerator-runtime/runtime";

if (module.hot) {
  module.hot.accept();
}

const controleRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpiner();
    // Load recipe
    await model.loadRecipes(id);
    // Render recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};
const controlSearchResults = async function () {
  try {
    resultsView.renderSpiner();
    const query = searchView.getQuery();
    if (!query) return;
    await model.loadSearchResults(query);
    // Render results
    resultsView.render(model.getSearchGetResults());
    // Render the initial paination buttons
    paginationView.render(model.state.search);
  } catch (err) {}
};
const controlPagination = function (page) {
  // Render New results
  resultsView.render(model.getSearchGetResults(page));
  // Render New paination buttons
  paginationView.render(model.state.search);
};
const init = function () {
  recipeView.addHandlerRender(controleRecipe);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
};
init();
