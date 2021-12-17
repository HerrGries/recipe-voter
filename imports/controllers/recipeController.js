import { MainController } from './mainController.js'
export const RecipeController = class extends MainController {
    async getRecipes(req, res, next) {
        JsonRoutes.sendResult(res, { data: 'ToDo' });
    }
}


