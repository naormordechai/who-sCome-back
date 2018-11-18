const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const addTeamRoutes = require('./routes/team-routes')

const app = express(); 

app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true // enable set cookie
}));

app.use(bodyParser.json())

addTeamRoutes(app)

if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use(express.static('./build'));
  
    // Express serve up index.html file if it doesn't recognize route
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
    });
  }

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`phone app listening on port ${PORT}`))