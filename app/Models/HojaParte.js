'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class HojaParte extends Model {
    static get table(){
        return 'hojaparte'
    }

    mecanicore(){
        return this.belongsTo('App/Models/MecanicoRe','mecanicore_id');
    }
}

module.exports = HojaParte
