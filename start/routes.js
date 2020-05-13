'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.post('/login','AuthController.login')
Route.post('/logout','AuthController.logout').middleware(['auth:jwt'])

Route.resource('/users','UserController').middleware(['auth:jwt'])

Route.resource('/roles','RoleController').middleware(['auth:jwt']).only(['index'])

Route.resource('/teachers','TeacherController').middleware(['auth:jwt'])

Route.get('/users_unasigneds','UserController.users_unasigneds').middleware(['auth:jwt'])

