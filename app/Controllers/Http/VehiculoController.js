'use strict'

const Vehiculo = use('App/Models/Vehiculo');
const Cliente = use('App/Models/Cliente');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with vehiculos
 */
class VehiculoController {
  /**
   * Show a list of all vehiculos.
   * GET vehiculos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let vehiculos = await Vehiculo.query().with('cliente').fetch();
    console.log(vehiculos.row)
    return view.render('vehiculo/index',{vehiculo: vehiculos.toJSON()});
  }

  /**
   * Render a form to be used for creating a new vehiculo.
   * GET vehiculos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    let client = await Cliente.all();
    return view.render('vehiculo/crear',{cliente: client.rows})
  }

  /**
   * Create/save a new vehiculo.
   * POST vehiculos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const vehiculos = new Vehiculo();
    vehiculos.modelo = request.input('modelo');
    vehiculos.color = request.input('color');
    vehiculos.fecha_ent = request.input('fecha_ent');
    vehiculos.hora_ent = request.input('hora_ent');
    vehiculos.cliente_id = request.input('cliente_id')
    await vehiculos.save();
    return response.redirect("back")
  }

  /**
   * Display a single vehiculo.
   * GET vehiculos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing vehiculo.
   * GET vehiculos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    let vehiculos = await Vehiculo.find(params.id);
    let client = await Cliente.all();
    return view.render('vehiculo/editar',{cliente: client.rows, vehiculo: vehiculos})
  }

  /**
   * Update vehiculo details.
   * PUT or PATCH vehiculos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const vehiculos = await Vehiculo.find(params.id);
    vehiculos.modelo = request.input('modelo');
    vehiculos.color = request.input('color');
    vehiculos.fecha_ent = request.input('fecha_ent');
    vehiculos.hora_ent = request.input('hora_ent');
    vehiculos.cliente_id = request.input('cliente_id')
    await vehiculos.save();
    return response.redirect("back")
  }

  /**
   * Delete a vehiculo with id.
   * DELETE vehiculos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const vehiculos = await Vehiculo.find(params.id);
    await vehiculos.delete();
    return response.redirect('back');
  }
}

module.exports = VehiculoController
