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

module.exports = {
    query,
    getById,
    checkPassword
}
