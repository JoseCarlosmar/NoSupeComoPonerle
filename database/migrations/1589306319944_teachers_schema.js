'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TeachersSchema extends Schema {
  up () {
    this.create('teachers', (table) => {
      table.bigIncrements()
      table.bigInteger('user_id').unsigned().references('id').inTable('users')
      table.string('name', 100).notNullable()
      table.string('paternal', 100).notNullable()
      table.string('maternal', 100)
      table.string('phone', 15)
      table.date('birthdate', 100)
      table.boolean('status').notNullable().default(true)
    })
  }

  down () {
    this.drop('teachers')
  }
}

module.exports = TeachersSchema
