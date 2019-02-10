

class AuthorizationUtils {

  static isAllowed(user) {
    return user.mod || user.username.toLowerCase() === 'kenobi_sp';
  }

}

module.exports = AuthorizationUtils;