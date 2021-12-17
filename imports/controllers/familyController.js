import { MainController } from './mainController.js'
export const FamilyController = class extends MainController {
    async getFamilies(req, res, next) {
        JsonRoutes.sendResult(res, { data: 'ToDo' });
    }
}


