(function() {
  describe('quIdentity', function() {
    beforeEach(module('app'));

    describe('isAdmin', function() {
      it('should return false if the roles array does not have an admin entry', inject(function(quIdentity) {
        var user = {firstName: 'Michael', lastName: 'Qualls', username:'MichaelQ', salt: salt, hashedPwd: hash, roles: ['not admin'] };
        quIdentity.setCurrentUser(user)
        expect(quIdentity.isAdmin()).to.be.falsey;
      }));

      it('should return true if the roles array has an admin entry', inject(function(quUser) {
        var user = {firstName: 'Michael', lastName: 'Qualls', username:'MichaelQ', salt: salt, hashedPwd: hash, roles: ['admin'] };
        quIdentity.setCurrentUser(user)
        expect(quIdentity.isAdmin()).to.be.true;
      }));
    })
  })
})()
