const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Flight = sequelize.define('Flight', {
  flight_number: {
    type: DataTypes.STRING(10),
    primaryKey: true,
    allowNull: false,
  },
  departure_airport: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  arrival_airport: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  departure_time: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  arrival_time: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 3),
    allowNull: false,
  },
  available_seats: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  // Add timestamps: true to enable createdAt and updatedAt columns
  timestamps: true,
});

module.exports = { Flight };