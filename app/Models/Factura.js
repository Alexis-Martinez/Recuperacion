'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Factura extends Model {
    static get table(){
        return 'factura'
    }
}

module.exports = Factura
