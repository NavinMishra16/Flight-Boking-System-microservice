const express = require('express');
const { Flight } = require('./models/flighttable');
const PORT = 8080;
const app = express();

app.listen(PORT, () => console.log(`It's alive on http://localhost:${PORT}`));

app.get("/getAllflights", async (req, res) => {
    try {
        const flights = await Flight.findAll(); 
        res.status(200).json(flights); 
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

app.get("/f/:src/:des", async (req, res) => {
    try {
        const { src, des } = req.params;

        // Assuming you have a Flight model or database query function
        const filteredFlights = await Flight.findAll({
            where: {
                departure_airport: src,   // Modify to match your actual column names
                arrival_airport: des    // Modify to match your actual column names
            }
        });

        if (filteredFlights.length === 0) {
            res.status(404).json({ error: "No flights found for the given airports." });
        } else {
            res.status(200).json(filteredFlights);
        }
    } catch (error) {
        console.log(error); // Log the error to the console for debugging
        res.status(500).json({ error: "Internal server error" });
    }
});


