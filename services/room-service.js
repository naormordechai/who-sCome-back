const mongoService = require('./mongo-service');
const ObjectId = require('mongodb').ObjectId;

function query() {
    return mongoService.connect()
        .then(db => db.collection('team').find({}).toArray())
}

function getById(_id) {
    _id = new ObjectId(_id)
    return mongoService.connect()
        .then(db => db.collection('team').findOne({ _id }))
}

function checkPassword(roomInfo) {
    let { _id } = roomInfo;
    _id = new ObjectId(_id)
    return mongoService.connect()
        .then(db => db.collection('team').findOne({ _id, password: roomInfo.password }))
}

function checkIfIsExsist(room) {
    return mongoService.connect()
        .then(db => db.collection('team').findOne({ roomName: room.roomName }))
}

function addRoom(room) {
    return mongoService.connect()
    .then(db => db.collection('team').insertOne(room))
    .then(_ => room)
}

module.exports = {
    query,
    getById,
    checkPassword,
    checkIfIsExsist,
    addRoom
}
