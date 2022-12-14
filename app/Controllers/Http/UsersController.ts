import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index({view}: HttpContextContract) {
    const users = await User.query().orderBy('id')
    return view.render('users/index', {users})
  }

  public async create({view}: HttpContextContract) {
    return view.render('users/create')
  }

  public async store({request}: HttpContextContract) {
    const dados = request.only(['login', 'password'])
    await User.create(dados)
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
