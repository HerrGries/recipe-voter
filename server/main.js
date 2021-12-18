import { Meteor } from 'meteor/meteor';

import { RecipeController } from './../imports/controllers/recipeController.js'
import { SuggestionController } from './../imports/controllers/suggestionController.js'
import { VoteController } from './../imports/controllers/voteController.js'
import { FamilyController } from './../imports/controllers/familyController.js'

Meteor.startup(() => {
  // Family/Families
  const familyController = new FamilyController();
  JsonRoutes.add("get", "api/families/:id", (req, res, next) => familyController.getFamilies(req, res, next));
  JsonRoutes.add("get", "api/family/:id", (req, res, next) => familyController.get(req, res, next));
  JsonRoutes.add("delete", "api/family/:id", (req, res, next) => familyController.delete(req, res, next));
  JsonRoutes.add("post", "api/family", (req, res, next) => familyController.create(req, res, next));
  JsonRoutes.add("put", "api/family", (req, res, next) => familyController.change(req, res, next));
  // Recipe/Recipes
  const recipeController = new RecipeController();
  JsonRoutes.add("get", "api/recipes/:id", (req, res, next) => recipeController.getRecipes(req, res, next));
  JsonRoutes.add("get", "api/recipe/:id", (req, res, next) => recipeController.get(req, res, next));
  JsonRoutes.add("delete", "api/recipe/:id", (req, res, next) => recipeController.delete(req, res, next));
  JsonRoutes.add("post", "api/recipe", (req, res, next) => recipeController.create(req, res, next));
  JsonRoutes.add("put", "api/recipe", (req, res, next) => recipeController.change(req, res, next));
  // Suggestion/Suggestions
  const suggestionController = new SuggestionController();
  JsonRoutes.add("get", "api/suggestions/:id/:day", (req, res, next) => suggestionController.getSuggestions(req, res, next));
  JsonRoutes.add("get", "api/suggestion/:id", (req, res, next) => suggestionController.get(req, res, next));
  JsonRoutes.add("delete", "api/suggestion/:id", (req, res, next) => suggestionController.delete(req, res, next));
  JsonRoutes.add("post", "api/suggestion", (req, res, next) => suggestionController.create(req, res, next));
  // Vote/Votes
  const voteController = new VoteController();
  JsonRoutes.add("get", "api/votes/:id", (req, res, next) => voteController.getVotes(req, res, next));
  JsonRoutes.add("delete", "api/vote/:id", (req, res, next) => voteController.delete(req, res, next));
  JsonRoutes.add("post", "api/vote", (req, res, next) => voteController.create(req, res, next));
});