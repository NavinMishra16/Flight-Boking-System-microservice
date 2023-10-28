'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Flight.init({
    flight_number: DataTypes.STRING,
    departure_airport: DataTypes.STRING,
    arrival_airport: DataTypes.STRING,
    departure_time: DataTypes.DATE,
    arrival_time: DataTypes.DATE,
    price: DataTypes.DECIMAL,
    available_seats: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Flight',
  });
  return Flight;
};