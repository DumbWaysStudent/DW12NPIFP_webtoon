const models = require('./../../models')
const Webtoons = models.list_comics
const Users = models.users

exports.index = (req, res) => {
    Webtoons.findAll({
        include: [{
            model: Users,
            as: "createdby"
        }]
    }).then(result => res.send(result))
}

exports.show = (req, res) => {
    Webtoons.findOne({
        where: { id: req.params.id },
        include: [{
            model: Users,
            as: "createdby"
        }]
    }).then(result => res.send(result))
}

exports.store = (req, res) => {
    Webtoons.create(req.body).then(result => {
        res.send({
            message: "success",
            result
        })
    })
}

exports.update = (req, res) => {
    Webtoons.update(
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
    Webtoons.destroy(
        { where: { id: req.params.id } }).then(result => {
            res.send({
                message: "success",
                result
            })
        })
}