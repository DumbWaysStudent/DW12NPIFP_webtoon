const models = require('../../models')
const Webtoons = models.comics
const DetailWebtoons = models.detailComics
const Users = models.users

//MENAMPILKAN KOMIK MILIK/BUATAN KITA SAJA
exports.showMyWebtoon = (req, res) => {
    Webtoons.findAll({
        where: { createdBy: req.params.id }
    })
        .then(result => res.send(result))
}

//MEMBUAT KOMIK MILIK SENDIRI
exports.storeMyWebtoon = (req, res) => {
    Webtoons.create(req.body)
        .then(
            result => res.send(result)
        )
}

// url = {your_host}/api/v1/user/{user_id}/webtoon/{webtoon_id}/episodes
//Jadi pertanyaan kenapa detail webtoon nya malah keluar semua??
// GET SEMUA DETAIL KOMIK KITA SENDIRI
exports.showDetailMyWebtoon = (req, res) => {
    const idUser = req.params.id_user
    const idComic = req.params.id_comic

    Webtoons.findAll({
        where: { createdBy: idUser }
    })
        .then(() =>
            DetailWebtoons.findAll({ where: { idComics: idComic } })
                .then(result => res.send(result))
        )

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
}

exports.deleteMyWebtoon = (req, res) => {
    const idUser = req.params.id_user
    const idComic = req.params.id_comic
    Webtoons.destroy({
        where: { id: idComic, createdBy: idUser }
    })
        .then(result => res.send({
            id: idComic,
            message: 'Komik Telah Dihapus'
        }))
}

