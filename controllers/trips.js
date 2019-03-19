const tripsModel = require("../models/trips.js");

exports.saveTripToDB = async (req, res) => {
  await tripsModel.saveToDB(req.body.tripName, req.body.description)
  // res.send(id)
};

exports.getByName = async(req, res) => {
  let trip = await tripsModel.getByName(req.params.name);
  res.send(trip);
};