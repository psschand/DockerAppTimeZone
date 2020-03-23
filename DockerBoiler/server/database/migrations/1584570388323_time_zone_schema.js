'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TimeZoneSchema extends Schema {
  up () {
    this.create('time_zones', (table) => {
      table.increments()
      table.string('name')
      table.string('TimeZone_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('time_zones')
  }
}

module.exports = TimeZoneSchema
