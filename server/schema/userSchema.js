var mongoose = require('mongoose');
var encrypt = require('../util/encryption');

var userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    username: {type: String, required: true},
    emailAddress: {type: String, required: true},
    salt: {type: String, required: true},
    hashedPwd: {type: String, required: true},
    banned: Number,
    suspended: Number,
    suspendDate: Date,
    roles: [String]
  });
  userSchema.methods = {
    authenticate: function(passwordToMatch)  {
      return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashedPwd;
    }
  };

var User = mongoose.model('User', userSchema);

function createDefaultUsers() {
  User.find({}).exec(function(err, collection) {
    if (collection.length === 0) {
      var salt, hash;
      salt = encrypt.createSalt();
      hash = encrypt.hashPwd(salt, '$dr4g0n!');
      User.create({firstName: 'Michael', lastName: 'Qualls', username:'MichaelQ', emailAddress:'qumlative@gmail.com',
                      salt: salt, hashedPwd: hash, banned:0, suspended:0, suspendDate: '', roles: ['admin']});

      salt = encrypt.createSalt();
      hash = encrypt.hashPwd(salt, 'thing1');
      User.create({firstName: 'Thing', lastName: 'One', username:'thing1', emailAddress:'thing1@gmail.com',
                      salt: salt, hashedPwd: hash, banned:0, suspended:0, suspendDate: '', roles: ['user']});

      salt = encrypt.createSalt();
      hash = encrypt.hashPwd(salt, 'thing2');
      User.create({firstName: 'Thing', lastName: 'Two', username:'thing2', emailAddress:'thing2@gmail.com',
                      salt: salt, hashedPwd: hash, banned:0, suspended:0, suspendDate: '', roles: ['user']});
    }
  });

}

module.exports = {
    User : User,
    createDefaultUsers: createDefaultUsers
};