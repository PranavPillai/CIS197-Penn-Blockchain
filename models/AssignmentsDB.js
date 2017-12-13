//Import the mongoose module
var mongoose = require('mongoose');

//Define User Schema
var Schema = mongoose.Schema;

var assignmentSchema = new Schema({
  assignment: String
});

var Assignment = mongoose.model('Assignment', assignmentSchema);

module.exports = {
  Assignment: Assignment
}