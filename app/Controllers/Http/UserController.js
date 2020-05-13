'use strict'
const User = use('App/Models/User')
class UserController {
    async index({response}){
        const users = await User.query().with('role').fetch()
        return response.ok(users)
    }
    async store({request,response}){
        const userData = request.only(User.store)
        const user = await User.create(userData)
        return response.json(user)
    }
    async update({params,request,response}){
        const user = await User.findOrFail(params.id)
        const userData = request.only(User.update)
        user.merge(userData)
        await user.save()
        return response.json(user)
    }
    async destroy({params,response}){
        const user = await User.findOrFail(params.id)
        user.status = !user.status
        await user.save()
        await user.teacher().where('user_id',user.id).update({status:user.status})
        return response.json(user)
    }

    async users_unasigneds({response}){
        const users = await User.query().doesntHave('teacher').where('role_id', 2).fetch()
        return response.json(users)
    }
}

module.exports = UserController
