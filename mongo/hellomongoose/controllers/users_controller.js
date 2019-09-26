const User = require('../models/user')

module.exports = {

    users: function(req, res){
        var users = User.find({}, function(err, users) {
            res.render('index', {all_users: users});
        });
    },

    create_user: function(req, res){
        console.log('attempting to create user')
        console.log(req.body)
        const user = new User();
        user.name = req.body.name;
        user.age = req.body.age;
        user.save()
            .then(newUserData => console.log('user created: ', newUserData))
            .catch(err => console.log(err));
        
        res.redirect('/');
    }
}