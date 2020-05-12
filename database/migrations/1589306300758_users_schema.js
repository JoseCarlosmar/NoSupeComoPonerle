'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsersSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.bigIncrements()
      table.string('username', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.boolean('status').notNullable().default(false)
      table.bigInteger('role_id').unsigned().references('id').inTable('roles')
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UsersSchema
