const models = require('../models')
// const Webtoons = models.comics
const DetailWebtoons = models.detailComics
const DetailEpisodes = models.detailepisodes

exports.showEpisodes = (req, res) => {
    const webtoonId = req.params.id_comic
    const episodeId = req.params.id_episode

    DetailWebtoons.findOne({
        where: { idComics: webtoonId }
    })
        .then(() => {
            DetailEpisodes.findAll({
                where: { idDetailComics: episodeId },
                attributes: ['id', 'page', 'image'],
                include: [{
                    model: DetailWebtoons,
                    as: 'detailComicId'
                }]
            })
                .then(episodes => res.send(episodes))
        })
}