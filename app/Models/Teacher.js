'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Teacher extends Model {
    static get store(){
        return ['user_id','name','paternal','maternal','phone','birthdate']
    }
    static get update(){
        return ['name','paternal','maternal','phone','birthdate']
    }
    user(){
        return this.belongsTo('App/Models/User')
    }

}

module.exports = Teacher
