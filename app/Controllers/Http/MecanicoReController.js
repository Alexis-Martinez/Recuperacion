'use strict'

const MecanicoRe = use('App/Models/MecanicoRe');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with mecanicores
 */
class MecanicoReController {
  /**
   * Show a list of all mecanicores.
   * GET mecanicores
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let meca = await MecanicoRe.all();
    console.log(meca.row)
    return view.render('mecanicore/index',{mecanicore: meca.rows});
  }

  /**
   * Render a form to be used for creating a new mecanicore.
   * GET mecanicores/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    let meca = await MecanicoRe.all();
    return view.render('mecanicore/crear',{mecanicore: meca.row})
  }

  /**
   * Create/save a new mecanicore.
   * POST mecanicores
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const meca = new MecanicoRe();
    meca.nombre = request.input('nombre');
    meca.direccion = request.input('direccion');
    meca.telefono = request.input('telefono');
    meca.costoxhora = request.input('costoxhora');
    meca.categoria = request.input('categoria');
    await meca.save();
    return response.redirect("back")
  }

  /**
   * Display a single mecanicore.
   * GET mecanicores/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const meca = await MecanicoRe.find(params.id);
    return view.render('mecanicore/crear',{mecanicore: meca});
  }

  /**
   * Render a form to update an existing mecanicore.
   * GET mecanicores/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    let meca = await MecanicoRe.find(params.id);
    return view.render('mecanicore/editar',{mecanicore: meca})
  }

  /**
   * Update mecanicore details.
   * PUT or PATCH mecanicores/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const meca = await MecanicoRe.find(params.id);
    meca.nombre = request.input('nombre');
    meca.direccion = request.input('direccion');
    meca.telefono = request.input('telefono');
    meca.costoxhora = request.input('costoxhora');
    meca.categoria = request.input('categoria');
    await meca.save();
    return response.redirect("back")
  }

  /**
   * Delete a mecanicore with id.
   * DELETE mecanicores/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const meca = await MecanicoRe.find(params.id);
    await meca.delete();
    return response.redirect('back');
  }
}

module.exports = MecanicoReController
