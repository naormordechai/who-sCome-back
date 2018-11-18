const roomService = require('../services/room-service');

function addTeamRoutes(app) {
    app.get('/room', (req, res) => {
        roomService.query()
            .then(rooms => res.json(rooms))
    })

    app.get('/room/:id', (req, res) => {
        const { id } = req.params
        roomService.getById(id)
            .then(room => res.json(room))
    })

    app.post('/room/checkPassword', (req, res) => {
        roomService.checkPassword(req.body)
            .then(room => res.json(room))
    })
}

module.exports = addTeamRoutes