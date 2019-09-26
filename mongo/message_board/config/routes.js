const animals_controller = require('../controllers/messages_controller');

module.exports = function(app) {
    app.get('/', messages_controller.index);
}