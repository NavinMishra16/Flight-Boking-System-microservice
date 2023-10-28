const { Flight } = require('../models/flighttable');

const flightdata = [
  {
    flight_number: '6E-379',
    departure_airport: 'Delhi',
    arrival_airport: 'Mumbai',
    departure_time: new Date('2023-10-23 09:00:00'),
    arrival_time: new Date('2023-10-23 13:30:00'),
    price: 500.00,
    available_seats: 150,
  },
  {
    flight_number: '6E-379',
    departure_airport: 'Mumbai',
    arrival_airport: 'Delhi',
    departure_time: new Date('2023-10-24 15:30:00'),
    arrival_time: new Date('2023-10-24 17:45:00'),
    price: 400.00,
    available_seats: 120,
  }
];

Flight.bulkCreate(flightdata)
  .then(() => {
    console.log('Bulk insert successful.');
  })
  .catch((error) => {
    console.error('Error inserting records:', error);
  });
