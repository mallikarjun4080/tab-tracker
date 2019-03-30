const Joi = require('joi')

module.exports = {
    register (req, res, next) {
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        }
    const {error,value} = Joi.validate(req.body, schema)

    if(error) {
        switch (error.details[0].context.key){
            case 'email':
              res.status(400).send({
                error: 'You must Provide a valid email address'
              })
              break
            case 'password':
              res.status(400).send({
                  error:`The password failed to match the following   rules::
                  <br>
                  1.It must contain ONLY the following characters: lower case,upper case,Numerics.
                  <br>
                  2.It must be 8 to 32 characters in length.`
              }) 
              break     
            default:  
               res.status(400).send({
                   error:'Invalid Credentials'
               })
            }
    }else {
        next()
    }
    }

}