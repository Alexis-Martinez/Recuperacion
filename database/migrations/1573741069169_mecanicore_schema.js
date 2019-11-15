'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MecanicoreSchema extends Schema {
  up () {
    this.create('mecanicore', (table) => {
      table.increments()
      table.string('nombre',45)
      table.string('direccion',45)
      table.string('telefono',45)
      table.float('costoxhora',4)
      table.string('categoria',45)
      table.timestamps()
    })
  }

  down () {
    this.drop('mecanicore')
  }
}

module.exports = MecanicoreSchema
