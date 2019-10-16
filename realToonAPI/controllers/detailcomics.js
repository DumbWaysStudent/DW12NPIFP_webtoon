const models = require('../../models')
const DetailWebtoons = models.detailComics

exports.showWebtoon = (req, res) => {
    DetailWebtoons.findAll({ where: { idComics: req.params.id } }).then(result => res.send(result))
}