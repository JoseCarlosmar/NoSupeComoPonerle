'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RolesSchema extends Schema {
  up () {
    this.create('roles', (table) => {
      table.bigIncrements()
      table.string('name', 80).notNullable()
    })
  }

  down () {
    this.drop('roles')
  }
}

module.exports = RolesSchema
