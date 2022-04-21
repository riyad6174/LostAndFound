const router = require('express').Router()
const userController = require('../Controller/userController')
const postController = require('../Controller/postController')
const loginController = require('../Controller/loginController')
const Auth = require('../Middlewares/Auth')

router.get('/', (req, res)=>{
    res.json({message : 'api working'})
})

router.post('/login', loginController)
router.use('/user', userController )
router.use('/post', Auth, postController )

module.exports = router