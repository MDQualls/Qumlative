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
      //hash = encrypt.hashPwd(salt, '[*p00p#t0wn!]');
      hash = encrypt.hashPwd(salt, 'MichaelQ');
      User.create({firstName: 'Michael', lastName: 'Qualls', username:'MichaelQ', emailAddress:'qumlative@gmail.com',
                      salt: salt, hashedPwd: hash, banned:0, suspended:0, suspendDate: '', roles: ['admin']});
    }
  });
}

module.exports = {
    User : User,
    createDefaultUsers: createDefaultUsers
};