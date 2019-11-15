'use strict'

const HojaParte = use('App/Models/HojaParte');
const MecanicoRe = use('App/Models/MecanicoRe');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with hojapartes
 */
class HojaParteController {
  /**
   * Show a list of all hojapartes.
   * GET hojapartes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let hoja = await HojaParte.query().with('mecanicore').fetch();
    console.log(hoja.row)
    return view.render('hojaparte/index',{hojaparte: hoja.toJSON()});
  }

  /**
   * Render a form to be used for creating a new hojaparte.
   * GET hojapartes/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    let meca = await MecanicoRe.all();
    return view.render('hojaparte/crear',{mecanicore: meca.rows})
  }

  /**
   * Create/save a new hojaparte.
   * POST hojapartes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const hoja = new HojaParte();
    hoja.concepto = request.input('concepto');
    hoja.cantidad = request.input('cantidad');
    hoja.reparacion = request.input('reparacion');
    hoja.mecanicore_id = request.input('mecanicore_id')
    await hoja.save();
    return response.redirect("back")
  }

  /**
   * Display a single hojaparte.
   * GET hojapartes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing hojaparte.
   * GET hojapartes/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    let hoja = await HojaParte.find(params.id);
    let meca = await MecanicoRe.all();
    return view.render('hojaparte/editar',{mecanicore: meca.rows, hojaparte: hoja})
  }

  /**
   * Update hojaparte details.
   * PUT or PATCH hojapartes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const hoja = await HojaParte.find(params.id);
    hoja.concepto = request.input('concepto');
    hoja.cantidad = request.input('cantidad');
    hoja.reparacion = request.input('reparacion');
    hoja.mecanicore_id = request.input('mecanicore_id')
    await hoja.save();
    return response.redirect("back")
  }

  /**
   * Delete a hojaparte with id.
   * DELETE hojapartes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const hoja = await HojaParte.find(params.id);
    await hoja.delete();
    return response.redirect('back');
  }
}

module.exports = HojaParteController
