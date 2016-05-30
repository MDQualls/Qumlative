var mongoose = require('mongoose');
var encrypt = require('../util/encryption');

var userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    salt: String,
    hashedPwd: String,
    roles: [String]
  });
  userSchema.methods = {
    authenticate: function(passwordToMatch)  {
      return hashPwd(this.salt, passwordToMatch) === this.hashedPwd;
    }
  };

var User = mongoose.model('User', userSchema);

function createDefaultUsers() {
  User.find({}).exec(function(err, collection) {
    if (collection.length === 0) {
      var salt, hash;
      salt = encrypt.createSalt();
      hash = encrypt.hashPwd(salt, 'MichaelQ');
      User.create({firstName: 'Michael', lastName: 'Qualls', username:'MichaelQ', salt: salt, hashedPwd: hash, roles: ['admin']});
      salt = encrypt.createSalt();
      hash = encrypt.hashPwd(salt, 'MichaelaQ');
      User.create({firstName: 'Michaela', lastName: 'Qualls', username:'MichaelaQ', salt: salt, hashedPwd: hash, roles: []});
      salt = encrypt.createSalt();
      hash = encrypt.hashPwd(salt, 'HollyQ');
      User.create({firstName: 'Holly', lastName: 'Qualls', username:'HollyQ', salt: salt, hashedPwd: hash});
    }
  });
}

module.exports = {
    User : User,
    createDefaultUsers: createDefaultUsers
};
