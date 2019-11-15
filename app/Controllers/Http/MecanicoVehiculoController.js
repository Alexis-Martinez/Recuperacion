'use strict'

const MecanicoVehiculo = use('App/Models/MecanicoVehiculo');
const MecanicoRe = use('App/Models/MecanicoRe');
const Vehiculo = use('App/Models/Vehiculo');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with mecanicovehiculos
 */
class MecanicoVehiculoController {
  /**
   * Show a list of all mecanicovehiculos.
   * GET mecanicovehiculos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let mecavehi = await MecanicoVehiculo.query().with('mecanico').with('vehiculo').fetch();
    console.log(mecavehi.row)
    return view.render('mecanicovehiculo/index',{mecavehiculo: mecavehi.toJSON()});
  }

  /**
   * Render a form to be used for creating a new mecanicovehiculo.
   * GET mecanicovehiculos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    let meca = await MecanicoRe.all();
    let vehiculos = await Vehiculo.query().with('vehiculo').fetch();
    return view.render('mecanicovehiculo/crear',{mecanicore: meca.rows, vehiculo: vehiculos.toJSON()})
  }

  /**
   * Create/save a new mecanicovehiculo.
   * POST mecanicovehiculos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const mecavehi = new MecanicoVehiculo();
    mecavehi.mecanicore_id = request.input('mecanicore_id');
    mecavehi.vehiculo_id = request.input('vehiculo_id')
    await mecanicore.save();
    return response.redirect("back")
  }

  /**
   * Display a single mecanicovehiculo.
   * GET mecanicovehiculos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing mecanicovehiculo.
   * GET mecanicovehiculos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    let mecavehi = await MecanicoVehiculo.find(params.id);
    let meca = await MecanicoRe.all();
    let vehiculos = await Vehiculo.query().with('vehiculo').fetch();
    return view.render('mecanicovehiculo/editar',{mecanicore: meca.rows, vehiculo: vehiculos.toJSON, mecavehiculo: mecavehi})
  }

  /**
   * Update mecanicovehiculo details.
   * PUT or PATCH mecanicovehiculos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const mecavehi = await MecanicoVehiculo.find(params.id);
    mecavehi.mecanicore_id = request.input('mecanicore_id')
    mecavehi.vehiculo_id = request.input('vehiculo_id');
    await repues.save();
    return response.redirect("back")
  }

  /**
   * Delete a mecanicovehiculo with id.
   * DELETE mecanicovehiculos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const mecavehi = await MecanicoVehiculo.find(params.id);
    await mecavehi.delete();
    return response.redirect('back');
  }
}

module.exports = MecanicoVehiculoController
