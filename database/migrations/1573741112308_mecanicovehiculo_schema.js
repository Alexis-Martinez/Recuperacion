'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MecanicovehiculoSchema extends Schema {
  up () {
    this.create('mecanicovehiculo', (table) => {
      table.increments()
      table.integer('mecanicore_id').unsigned().references('id').inTable('mecanicore')
      table.integer('vehiculo_id').unsigned().references('id').inTable('vehiculo')
      table.timestamps()
    })
  }

  down () {
    this.drop('mecanicovehiculo')
  }
}

module.exports = MecanicovehiculoSchema
