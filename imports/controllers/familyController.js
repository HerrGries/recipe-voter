import { MainController } from './mainController.js'
import {Families } from './../api/families.js'
export const FamilyController = class extends MainController {
    async getFamilies(req, res, next) {
        const families = new Families();
        families.findAllByAttribute('UserID', 1)
        JsonRoutes.sendResult(res, { data: 'ToDo' });
    }
}


