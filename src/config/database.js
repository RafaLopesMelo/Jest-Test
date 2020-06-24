const path = require('path');

module.exports = {
    "storage" : path.resolve('src', 'database', 'database.sqlite'),
    "dialect": "sqlite",
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true
    }
};