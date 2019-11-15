'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Repuesto extends Model {
    static get table(){
        return 'repuesto'
    }

    hojaparte(){
        return this.belongsTo('App/Models/HojaParte','hojaparte_id');
    }

    hojapartemec_id(){
        return this.belongsTo('App/Models/HojaParte','hojapartemec_id');
    }
}

module.exports = Repuesto
