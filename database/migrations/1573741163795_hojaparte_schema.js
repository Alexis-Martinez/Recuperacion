'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HojaparteSchema extends Schema {
  up () {
    this.create('hojaparte', (table) => {
      table.increments()
      table.string('concepto',45)
      table.integer('cantidad')
      table.string('reparacion',45)
      table.integer('mecanicore_id').unsigned().references('id').inTable('mecanicore')
      table.timestamps()
    })
  }

  down () {
    this.drop('hojaparte')
  }
}

module.exports = HojaparteSchema
