'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FacturaSchema extends Schema {
  up () {
    this.create('factura', (table) => {
      table.increments()
      table.datetime('fecha')
      table.integer('imp_pesos')
      table.integer('imp_dol')
      table.integer('rfc')
      table.timestamps()
    })
  }

  down () {
    this.drop('factura')
  }
}

module.exports = FacturaSchema
