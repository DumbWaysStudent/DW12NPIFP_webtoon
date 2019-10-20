const models = require('../models')
const Webtoons = models.comics
const DetailWebtoons = models.detailComics
const DetailEpisodes = models.detailepisodes
const Users = models.users

//MY WEBTOON CREATION

//MENAMPILKAN KOMIK MILIK/BUATAN KITA SAJA
exports.showMyWebtoon = (req, res) => {
    Webtoons.findAll({
        where: { createdBy: req.params.id }
    })
        .then(result => res.send(result))
        .catch(err => res.send({
            message: 'tidak bisa menampilkan komik',
            err
        }))
}

//MEMBUAT KOMIK MILIK SENDIRI
exports.storeMyWebtoon = (req, res) => {
    Webtoons.create(req.body)
        .then(
            result => res.send(result)
        )
        .catch(err => res.send({
            message: 'tidak bisa membuat komik',
            err
        }))
}

exports.updateMyWebtoon = (req, res) => {
    const { title, genre, bumpImg, thumbImg } = req.body
    Webtoons.update({
        title,
        genre,
        bumpImg,
        thumbImg
    },
        {
            where: { id: req.params.id_comic, createdBy: req.params.id_user }
        }).then(res.send(req.body))
        .catch(err => res.send({
            message: 'tidak bisa mengupdate komik',
            err
        }))
}

exports.deleteMyWebtoon = (req, res) => {
    const idUser = req.params.id_user
    const idComic = req.params.id_comic
    Webtoons.destroy({
        where: { id: idComic, createdBy: idUser }
    })
        .then(res.send({
            id: idComic,
            message: 'Komik Telah Dihapus'
        }))
        .catch(err => res.send({
            message: 'tidak bisa menghapus komik',
            err
        }))
}


//EPISODES MY WEBTOON CREATION

// url = {your_host}/api/v1/user/{user_id}/webtoon/{webtoon_id}/episodes
// GET SEMUA DETAIL KOMIK KITA SENDIRI
exports.showDetailMyWebtoon = (req, res) => {
    const idComic = req.params.id_comic
    DetailWebtoons.findAll({ where: { idComics: idComic } }).then(result => res.send(result))

}

//MEMBUAT EPISODES DARI KOMIK KITA SENDIRI
exports.storeMyEpisode = (req, res) => {
    const { image, title } = req.body

    DetailWebtoons.create({
        idComics: req.params.id_comic,
        title,
        image
    })
        .then(result => res.send(result))
}

//UPDATE DETAIL EPISODE KOMIK SENDIRI
exports.updateMyEpisode = (req, res) => {
    const { image, title } = req.body

    DetailWebtoons.update({
        title,
        image
    }, {
        where: { id: req.params.id_episode }
    }
    )
        .then(res.send({ ...req.body }))
}

//DELETE EPISODE KOMIK SENDIRI
exports.deleteMyEpisode = (req, res) => {
    const { id_episode } = req.params

    DetailWebtoons.destroy({
        where: { id: id_episode }
    })
        .then(res.send({ ...req.body }))
}


//DETAIL EPISODE / IMAGES 

//GET SEMUA DETAIL EPISODE BERDASARKAN EPISODE

exports.showDetailEpisodes = (req, res) => {
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

//MEMBUAT DETAIL EPISODE DARI KOMIK KITA SENDIRI
exports.storeDetailMyWebtoon = (req, res) => {
    const { image, page } = req.body
    const episodeId = req.params.id_episode

    DetailEpisodes.create({
        idDetailComics: episodeId,
        page,
        image
    })
        .then(result => res.send(result))
        .catch(err => res.send({
            message: 'tidak bisa menambahkan episode',
            err
        }))
}

//DELETE DETAIL EPISODE DARI KOMIK KITA SENDIRI
exports.deleteDetailMyWebtoon = (req, res) => {
    const imageId = req.params.id_image

    DetailEpisodes.destroy({
        where: { id: imageId }
    })
        .then(res.send({
            message: 'Berhasil di delete'
        }))
        .catch(err => res.send({
            message: 'tidak bisa menghapus episode',
            err
        }))
}