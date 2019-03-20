const connection = require("../../database/connection");


class Trips {
  static async saveToDB(tripName, description, organiserID) {
        let tripId = await connection.pool.query(`INSERT INTO trips (name, description, organiser) VALUES ('${tripName}', '${description}', '${organiserID}') returning id`);
      await connection.pool.query(`INSERT INTO trips_users (trip_id, user_id) VALUES ('${tripId.rows[0].id}', '${organiserID}')`);
      return tripId.rows[0]
  };

  static async getById(id) {
        let data = await connection.pool.query(`SELECT * FROM trips WHERE id = '${id}'`);
        return data.rows[0]
    };

  static async getTripUsers(tripId) {
      let result = await connection.pool.query(`SELECT * FROM trips_users where trip_id = '${tripId}'`);
      return result.rows
  }
}

module.exports = Trips;