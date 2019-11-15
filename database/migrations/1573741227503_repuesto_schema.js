'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RepuestoSchema extends Schema {
  up () {
    this.create('repuesto', (table) => {
      table.increments()
      table.string('descripcion',45)
      table.integer('costounit')
      table.integer('preciounit')
      table.integer('hojaparte_id').unsigned().references('id').inTable('hojaparte')
      table.integer('hojapartemec_id').unsigned().references('mecanicore_id').inTable('hojaparte')
      table.timestamps()
    })
  }

  down () {
    this.drop('repuesto')
  }
}

module.exports = RepuestoSchema
