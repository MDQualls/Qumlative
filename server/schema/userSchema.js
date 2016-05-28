var mongoose = require('mongoose');
var crypto = require('crypto');

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

function createSalt()  {
  return crypto.randomBytes(512).toString('base64');
}

function hashPwd(salt, pwd)  {
  var hmac = crypto.createHmac('sha1', salt);
  hmac.setEncoding('hex');
  hmac.write(pwd);
  hmac.end();
  return hmac.read();
}

module.exports = {
    User : User,
    createSalt: createSalt,
    hashPwd: hashPwd
};

