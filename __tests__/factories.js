const { factory } = require('factory-girl');

const { User } = require('../src/app/models');

factory.define('User', User, {
    name: 'Rafael',
    email: 'rafael.melo@gmail.com',
    'password': '123456'
});

module.exports = factory;