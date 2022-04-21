const userSchema = require('../Models/userSchema');
const auth = require('../Middlewares/Auth')

const user = require('express').Router()

user.get('/', async (req, res)=>{
    try{
        const user = await userSchema.find()
        res.json(user)

    }catch(err){
        if(err){
            console.log(err.message)
            res.json({error : err.message})
        }else{
            console.log('server side error')
            res.json({error : 'server side error'})
        }
    }
})

user.post('/', async (req, res)=>{
    try{
        const {username, contact, password, image} = req.body;
        const users = await new userSchema({
         username, contact, password, image
    })
    await users.save()
    res.json(users)

    }catch(err){
        if(err){
            console.log(err.message)
            res.json({error : err.message})
        }else{
            console.log('server side error')
            res.json({error : 'server side error'})
        }
    }
    
})

// login user protected route

user.get('/profile', auth, async (req, res)=>{
    try{
        const _id = req._id;
        const user = await userSchema.findOne({_id}).select({password : 0}) 
        res.json(user)

    }catch(err){
        if(err){
            console.log(err.message)
            res.json({error : err.message})
        }else{
            console.log('server side error')
            res.json({error : 'server side error'})
        }
    }

})

user.put('/update', auth, async (req, res)=>{
    try{
        const _id = req._id;
        const {username, contact, image, password} = req.body;
        const updateUser = await userSchema.updateOne({_id},{ $set : {username, password, image, contact}})
        res.json(updateUser)

    }catch(err){
        if(err){
            console.log(err)
            res.json({error : err.message})
        }else{
            console.log('server side error')
            res.json({error : 'server side error'})
        }
    }
})

user.delete('/delete', auth, async (req, res)=>{
    try{
        const _id = req._id;
        const deleteUser = await userSchema.deleteOne({_id}) 
        res.json(deleteUser)

    }catch(err){
        if(err){
            console.log(err.message)
            res.json({error : err.message})
        }else{
            console.log('server side error')
            res.json({error : 'server side error'})
        }
    }
})

module.exports = user;