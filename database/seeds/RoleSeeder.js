'use strict'

/*
|--------------------------------------------------------------------------
| RoleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

const roles = [
  {
    name: 'Admin'
  },
  {
    name: 'Maestro'
  }
]

class RoleSeeder {
  async run () {
    await Database.table('roles').insert(roles)
  }
}

module.exports = RoleSeeder
