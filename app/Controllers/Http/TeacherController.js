'use strict'
const Teacher = use('App/Models/Teacher')
const Ws = use('Ws')

class TeacherController {
    async index({response}){
        const teachers = await Teacher.all()
        return response.ok(teachers)
    }
    async store({request,response}){
        const teacherData = request.only(Teacher.store)
        const teacher = await Teacher.create(teacherData)
        const topic = Ws.getChannel("notification").topic('notification')
        if (topic) {
            topic.broadcast("new:notification", teacher)
        }
        return response.ok(teacher)
    }
    async update({request,params,response}){
        const teacher = await Teacher.findOrFail(params.id)
        const teacherData = request.only(Teacher.update)
        teacher.merge(teacherData)
        await teacher.save()
        return response.json(teacher)
    }
    async destroy({params,response}){
        const teacher = await Teacher.findOrFail(params.id)
        teacher.status = !teacher.status
        await teacher.save()
        return response.json(teacher)
    }

}

module.exports = TeacherController
