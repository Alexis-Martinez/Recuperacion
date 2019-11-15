'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MecanicoRe extends Model {
    static get table(){
        return 'mecanicore'
    }
}

module.exports = MecanicoRe
