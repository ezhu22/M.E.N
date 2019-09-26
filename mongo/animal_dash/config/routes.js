const animals_controller = require('../controllers/animals_controller');

module.exports = function(app) {
    app.get('/', animals_controller.index);
    app.get('/animals/new', animals_controller.new);
    app.get('/animals/:id', animals_controller.show);
    app.post('/animals', animals_controller.create);
    app.get('/animals/edit/:id', animals_controller.edit);
    app.post('/animals/:id', animals_controller.update);
    app.get('/animals/destroy/:id', animals_controller.destroy);
}