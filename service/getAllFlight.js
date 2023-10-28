const { Flight } = require('../models/flighttable');


async function getAllFlights() {
    try {
        const flights = await Flight.findAll();
        return JSON.stringify(flights,null,3);
    } 
    catch (error) {
        throw error;
    }
}
module.exports = { getAllFlights };

// getAllFlights()
//     .then((flights) => {
//         console.log(JSON.stringify(flights,null,3));
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//     });
