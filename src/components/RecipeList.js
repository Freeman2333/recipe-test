import React, { Component } from "react";
import Recipe from "./Recipe";
import RecipeSearch from "./RecipeSearch";
export default class RecipeList extends Component {
  render() {
    const {
      recipes,
      handleDetails,
      handleSubmit,
      handleChange,
      value,
      error
    } = this.props;
    return (
      <React.Fragment>
        <RecipeSearch
          value={value}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <div className="container my-5">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 text-canter text-uppercase mb-3">
              <h1 className="text-slanted">recipe-list</h1>
            </div>
          </div>
          <div className="row">
            {error ? (
              <div className="col-12">
                <h1 className="text-danger text-center">{error}</h1>
              </div>
            ) : (
              recipes.map(recipe => {
                return (
                  <Recipe
                    key={recipe.recipe_id}
                    recipe={recipe}
                    handleDetails={() => handleDetails(0, recipe.recipe_id)}
                  />
                );
              })
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
