'use strict'
let timezone = use('App/Models/TimeZone');
let Database = use('Database')
const Helpers = use('Helpers')
const fs = require('fs')
const xml2js = require('xml2js')
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
/**
 * Resourceful controller for interacting with timezones
 */
class TimeZoneController {
  /**
   * Show a list of all timezones.
   * GET timezones
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let timezoneslist = await timezone.query().fetch();
    var path = require('path');
    console.log("directory path",path.resolve(__dirname));
    return response.json(timezoneslist);
  }

  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new timezone.
   * POST timezones
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response })
  {
    const profilePic = request.file('timezone-data', {
      types: ['xml'],
      size: '2mb'
    })
  let filename = `TimeZoneData_${Date.now()}.xml`;
    await profilePic.move(Helpers.appRoot('FileUploads'), {
      name: filename
    })
    var path = require('path');
    console.log("directory path",path.resolve(__dirname));
    fs.readFile('/app/FileUploads/'+filename,"utf8", (err, data) => {
        if (err) console.log(err);
        var parser = new xml2js.Parser();
        parser.parseString(data, function (err, result) {
          console.dir(result.TimeZones.TimeZone.length);
          for (const element of result.TimeZones.TimeZone) {
            let tzone = {name:element.Name[0],TimeZone_id:element.Hours.toString()+':'+element.Mins.toString()+':'+element.Secs.toString()};
            const Timezone = use('App/Models/TimeZone');
            const timezoneobj = new Timezone();
            timezoneobj.name = tzone.name;
            timezoneobj.TimeZone_id = tzone.TimeZone_id;
            timezoneobj.save();
          }
          console.log('Done');
      });
    })
    if (!profilePic.moved()) {
      return profilePic.error()
    }
    return response.json({database:'successfull'});
  }

  /**
   * Display a single timezone.
   * GET timezones/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing timezone.
   * GET timezones/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }
  async query ({ params, request, response, view }) {
    console.dir(`select * from time_zones where name Like '%${params.query}%'`);
    const timezonelist = await Database.raw(`select * from time_zones where name Like '%${params.query}%'`);
    return response.json(timezonelist[0]);
  }

  /**
   * Update timezone details.
   * PUT or PATCH timezones/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a timezone with id.
   * DELETE timezones/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}
module.exports = TimeZoneController
