export const MainController = class {
    async get(req, res, next) {
        JsonRoutes.sendResult(res, { data: 'ToDo' });
    }
    async delete(req, res, next) {
        JsonRoutes.sendResult(res, { data: 'ToDo' });
    }
    async create(req, res, next) {
        JsonRoutes.sendResult(res, { data: 'ToDo' });
    }
    async change(req, res, next) {
        JsonRoutes.sendResult(res, { data: 'ToDo' });
    }
}