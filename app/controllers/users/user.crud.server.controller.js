'use strict';

var _ = require('lodash'),
    mongoose = require('mongoose'),
    User = mongoose.model('User');


exports.allUsers = function(req, res) {

    User.find({}, function(err, users) {
        if (err) {
            return res.status(500).send({
                message: 'error : ' + err,
                data: null
            });
        } else {
            var _u = [];

            users.forEach(function(u) {
                u.salt = undefined;
                u.provider = undefined;
                u.created = undefined;
                u.password = undefined;
                u.__v = undefined;
                _u.push(u);
            });


            return res.status(200).send(_u);
        }

    });
};

exports.deleteUser = function(req, res) {

    User.find({
        _id: req.params._id
    }).remove(function(err) {
        if (err) {
            return res.status(500).send({
                message: 'error : ' + err,
                data: null
            });
        } else {
            return res.status(200).send({
                message: 'success ',
                data: true
            });
        }
    });
};

exports.updateUser = function(req, res) {
    User.findOne({
        _id: req.params._id
    }, function function_name(err, user) {
        if (err) {
            return res.status(500).send({
                message: 'error : ' + err,
                data: null
            });
        }

        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.roles = [req.body.role];
        user.email = req.body.email;
        user.clientName = req.body.clientName;

        user.save(function(err, user) {
            if (err) {
                return res.status(500).send({
                    message: 'error : ' + err,
                    data: null
                });
            }
            return res.status(200).send({
                message: 'success ',
                data: true
            });
        });

    });
};
