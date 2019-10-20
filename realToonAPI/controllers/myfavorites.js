const models = require('../models')
const myfavorites = models.my_favorite

exports.getMyFavorite = (req, res) => {
    const favorite = req.query.isFavorite
    const user = req.params.id

    if (favorite == 'true') {
        myfavorites.findAll({
            where: { isFavorite: 1, user_id: user }
        }).then(result => res.send(result))
    } else {
        myfavorites.findAll({
            where: { isFavorite: 0, user_id: user }
        }).then(result => res.send(result))
    }
}