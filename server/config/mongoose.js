var mongoose = require('mongoose')
var crypto = require('crypto');

module.exports = function(config) {
  mongoose.connect(config.db);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error'));
  db.once('open', function callback()  {
    console.log('qumlative db opened');
  });

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

  User.find({}).exec(function(err, collection) {
    if(collection.length === 0)  {
      var salt, hash;
      salt = createSalt();
      hash = hashPwd(salt, 'MichaelQ');
      User.create({firstName: 'Michael', lastName: 'Qualls', username:'MichaelQ', salt: salt, hashedPwd: hash, roles: ['admin'] });
      salt = createSalt();
      hash = hashPwd(salt, 'MichaelaQ');
      User.create({firstName: 'Michaela', lastName: 'Qualls', username:'MichaelaQ', salt: salt, hashedPwd: hash, roles: []  });
      salt = createSalt();
      hash = hashPwd(salt, 'HollyQ');
      User.create({firstName: 'Holly', lastName: 'Qualls', username:'HollyQ', salt: salt, hashedPwd: hash  });
    }
  });
}

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
