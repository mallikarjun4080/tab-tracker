module.exports = (app) => {
    app.post('/register', (req, res) =>{
        res.send({
            message: 'hello world! ${req.body.email}! your user was registered! have fun!'
        })
    })

}