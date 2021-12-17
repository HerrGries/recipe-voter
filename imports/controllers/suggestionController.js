import { MainController } from './mainController.js'
export const SuggestionController = class extends MainController {
    async getSuggestions(req, res, next) {
        JsonRoutes.sendResult(res, { data: 'ToDo' });
    }
}


