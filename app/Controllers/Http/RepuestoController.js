'use strict'

const Repuesto = use('App/Models/Repuesto');
const HojaParte = use('App/Models/HojaParte');
const MecanicoRe = use('App/Models/MecanicoRe');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with repuestos
 */
class RepuestoController {
  /**
   * Show a list of all repuestos.
   * GET repuestos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let repues = await Repuesto.query().with('hojaparte').with('mecanicore').fetch();
    console.log(repues.row)
    return view.render('repuesto/index',{repuesto: repues.toJSON()});
  }

  /**
   * Render a form to be used for creating a new repuesto.
   * GET repuestos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    let hoja = await HojaParte.all();
    let hoja2 = await MecanicoRe.query().with('mecanicore').fetch();
    return view.render('repuesto/crear',{hojaparte: hoja.rows, hojaparte2: hoja2.toJSON()})
  }

  /**
   * Create/save a new repuesto.
   * POST repuestos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const repues = new Repuesto();
    repues.descripcion = request.input('descripcion');
    repues.costounit = request.input('costounit');
    repues.preciounit = request.input('preciounit');
    repues.hojaparte_id = request.input('hojaparte_id');
    repues.hojapartemec_id = request.input('hojapartemec_id')
    await repues.save();
    return response.redirect("back")
  }

  /**
   * Display a single repuesto.
   * GET repuestos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing repuesto.
   * GET repuestos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    let repues = await Repuesto.find(params.id);
    let hoja = await HojaParte.all();
    let hoja2 = await MecanicoRe.query().with('mecanicore').fetch();
    return view.render('repuesto/editar',{hojaparte: hoja.rows, hojaparte2: hoja2.toJSON, repuesto: repues})
  }

  /**
   * Update repuesto details.
   * PUT or PATCH repuestos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const repues = await Repuesto.find(params.id);
    repues.descripcion = request.input('descripcion');
    repues.costounit = request.input('costounit');
    repues.preciounit = request.input('preciounit');
    repues.hojaparte_id = request.input('hojaparte_id');
    repues.hojapartemec_id = request.input('hojapartemec_id')
    await repues.save();
    return response.redirect("back")
  }

  /**
   * Delete a repuesto with id.
   * DELETE repuestos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const repues = await Repuesto.find(params.id);
    await repues.delete();
    return response.redirect('back');
  }
}

module.exports = RepuestoController
