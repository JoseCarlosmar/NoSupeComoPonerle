'use strict'
const Encryption = use('Encryption')
class AuthController {
    async login ({ request, auth,response }) {
        const { email, password } = request.all()
        const token = await auth.withRefreshToken()
                            .attempt(email, password,true)
                            
        return response.ok(token)
      }
      async logout ({ request, response, auth }) {
        const refreshToken = request.input('refreshToken')
        const decryptedToken = Encryption.decrypt(refreshToken)
        
        const isLoggedIn = await this.verify({ auth })
    
        if (isLoggedIn) {
          const user = await auth.getUser()
          await user.tokens()
            .where('token', decryptedToken)
            .delete()
        }
    
        return response.ok({
          success: true,
          message: 'Logged out successfully!',
          data: {}
        })
      }
    
      async verify ({ auth }) {
        try {
          return await auth.check()
        } catch (error) {
          return false
        }
      }
}

module.exports = AuthController
