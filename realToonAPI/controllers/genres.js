const models = require('../models')
const genre = models.genres

exports.index = (req, res) => {
    genre.findAll().then(result => res.send(result))
}

exports.show = (req, res) => {
    genre.findOne({ id: req.params.id }).then(result => res.send(result))
}

exports.store = (req, res) => {
    genre.create(req.body).then(result => {
        res.send({
            message: "success",
            result
        })
    })
}

exports.update = (req, res) => {
    genre.update(
        req.body,
        { where: { id: req.params.id } }
    ).then(result => {
        res.send({
            message: "success",
            result
        })
    })
}

exports.delete = (req, res) => {
    genre.destroy(
        { where: { id: req.params.id } }).then(result => {
            res.send({
                message: "success",
                result
            })
        })
}