class AuthorizationService {
  verifyPermission(resource, user) {
    if (resource.user_id !== user.id) {
      throw new Error() // TODO: invalid access exception
    }
  }
}

module.exports = new AuthorizationService()
