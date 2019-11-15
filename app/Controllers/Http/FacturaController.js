'use strict'

const Factura = use('App/Models/Factura');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with facturas
 */
class FacturaController {
  /**
   * Show a list of all facturas.
   * GET facturas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let factu = await Factura.all();
    console.log(factu.row)
    return view.render('factura/index',{factura: factu.rows});
  }

  /**
   * Render a form to be used for creating a new factura.
   * GET facturas/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    let factu = await Factura.all();
    return view.render('factura/crear',{factura: factu.row})
  }

  /**
   * Create/save a new factura.
   * POST facturas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const factu = new Factura();
    factu.fecha = request.input('fecha');
    factu.imp_pesos = request.input('imp_pesos');
    factu.imp_dol = request.input('imp_dol');
    factu.rfc = request.input('rfc');
    await factu.save();
    return response.redirect("back")
  }

  /**
   * Display a single factura.
   * GET facturas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const factu = await Factura.find(params.id);
    return view.render('factura/crear',{factura: factu});
  }

  /**
   * Render a form to update an existing factura.
   * GET facturas/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    let factu = await Factura.find(params.id);
    return view.render('factura/editar',{factura: factu})
  }

  /**
   * Update factura details.
   * PUT or PATCH facturas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const factu = await Factura.find(params.id);
    factu.fecha = request.input('fecha');
    factu.imp_pesos = request.input('imp_pesos');
    factu.imp_dol = request.input('imp_dol');
    factu.rfc = request.input('rfc');
    await factu.save();
    return response.redirect("back")
  }

  /**
   * Delete a factura with id.
   * DELETE facturas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const factu = await Factura.find(params.id);
    await factu.delete();
    return response.redirect('back');
  }
}

module.exports = FacturaController
