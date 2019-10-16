const jwt = require('jsonwebtoken')

const models = require('../../models')
const User = models.users

//bisa menggunakan async await atau .then .catch 

exports.login = (req, res) => {
    const email = req.body.email
    const password = req.body.password

    User.findOne({ where: { email, password } })
        .then(user => {
            if (user) {
                const token = jwt.sign({ userId: user.id }, 'my-secret-key')
                res.send({
                    username: user.username,
                    token
                })
            } else {
                res.send({
                    error: true,
                    message: "Wrong Email or Password"
                })
            }
        })
}

exports.register = async (req, res) => {
    const signUp = await User.create(req.body).then({})
    res.send({
        message: "success",
        email: signUp.email
    })
}
