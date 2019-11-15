'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClienteSchema extends Schema {
  up () {
    this.create('cliente', (table) => {
      table.increments()
      table.string('nombre',45)
      table.string('direccion',45)
      table.string('telefono',45)
      table.timestamps()
    })
  }

  down () {
    this.drop('cliente')
  }
}

module.exports = ClienteSchema
