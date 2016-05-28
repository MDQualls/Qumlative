var mongoose = require('mongoose');
var userSchema = require('../schema/userSchema');

module.exports = function(config) {
  mongoose.connect(config.db);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error'));
  db.once('open', function callback()  {
    console.log('qumlative db opened');
  });

  userSchema.User.find({}).exec(function(err, collection) {
    if (collection.length === 0) {
      var salt, hash;
      salt = userSchema.createSalt();
      hash = userSchema.hashPwd(salt, 'MichaelQ');
      userSchema.User.create({firstName: 'Michael', lastName: 'Qualls', username:'MichaelQ', salt: salt, hashedPwd: hash, roles: ['admin']});
      salt = userSchema.createSalt();
      hash = userSchema.hashPwd(salt, 'MichaelaQ');
      userSchema.User.create({firstName: 'Michaela', lastName: 'Qualls', username:'MichaelaQ', salt: salt, hashedPwd: hash, roles: []  });
      salt = userSchema.createSalt();
      hash = userSchema.hashPwd(salt, 'HollyQ');
      userSchema.User.create({firstName: 'Holly', lastName: 'Qualls', username:'HollyQ', salt: salt, hashedPwd: hash  });
    }
  });
}