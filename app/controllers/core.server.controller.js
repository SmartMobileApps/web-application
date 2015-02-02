'use strict';
var _ = require('lodash'),
    mongoose = require('mongoose'),
    User = mongoose.model('User');


exports.index = function(req, res) {
    res.render('index', {
        user: req.user || null,
        request: req
    });
};

exports.login = function(req, res) {
    res.render('login');
};

exports.reset = function(req, res) {

    User.findOne({
        resetPasswordToken: req.params.token,
        resetPasswordExpires: {
            $gt: Date.now()
        }
    }, function(err, user) {
        if (!user) {
            return res.render('invalidToken');
        }

        res.render('reset', {
            token: req.token || null
        });
    });


};
