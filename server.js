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

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`phone app listening on port ${PORT}`))