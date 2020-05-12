'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')
const Hash = use('Hash') 

class UserSeeder {
  async run () {
    await Database.table('users').insert([
      {
        username:'Admin',
        email:'admin@gmail.com' ,
        password: await Hash.make('1234'),
        status: false,
        role_id:1 
      },
      {
        username:'teacher',
        email:'teacher@gmail.com' ,
        password: await Hash.make('1234'),
        status: false,
        role_id:2 
      }
    ])
  }
}

module.exports = UserSeeder
