import { MainController } from './mainController.js'
export const VoteController = class extends MainController {
    async getVotes(req, res, next) {
        JsonRoutes.sendResult(res, { data: 'ToDo' });
    }
}