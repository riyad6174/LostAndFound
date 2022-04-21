const post = require('express').Router()
const postSchema = require('../Models/postSchema')
const imageUpload = require('../Middlewares/imageUpload')

// get all local post and there user info,
// accept nothing.
post.get('/', async (req, res)=>{
    try{
        const allPost = await postSchema.find().populate("user", 'username contact image')
        res.json(allPost)

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

// get all lost post and there user info,
// accept nothing.
post.get('/lost', async (req, res)=>{
    try{
        const allPost = await postSchema.find({type : 'lost'}).populate("user", 'username contact image')
        res.json(allPost)

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

// get all found post and there user info,
// accept nothing.
post.get('/found', async (req, res)=>{
    try{
        const allPost = await postSchema.find({type : 'found'}).populate("user", 'username contact image')
        res.json(allPost)

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

// get logedin user's all post
// only login user will see there post of this route.
// accept nothing;
post.get('/user', async (req, res)=>{
    try{
    const user = req._id;
        const onePost = await postSchema.find({user}).populate("user", 'username contact image')
        res.json(onePost)

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

// get specific One post based on client request.
// only login user will see there post of this route.
// accept object only {post(_id)} from request.params;
post.get('/:id', async (req, res)=>{
    try{
    const postId = req.params['id']
        const onePost = await postSchema.find({_id : postId}).populate("user", 'username contact image')
        res.json(onePost)

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

// user can create a post,
// only login user will create there post of this route.
// accept object only {title, description, image, type{'lost' or 'found'}} from request.body;
post.post('/', imageUpload.single('image'), async (req, res)=>{
    try{
        const user = req._id;
        const image = req.file
        const {title, description, type,contact,location} = req.body;
        const posts = await new postSchema({
        user, title,  image:image?image.filename:undefined,contact,location,description, type
    })
    await posts.save()
    res.json(posts)

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

// update one post who already login and created there post.
// only login user will be update there post of this route.
// accept object only {title, description, image and postId} from request.body;
post.put('/', async (req, res)=>{
    try{
        const user = req._id;
        const {title, description, image, postId} = req.body;
        const updatePost = await postSchema.updateOne({user, _id : postId},{ $set : {title, image, description}})
        res.json(updatePost)

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

// only login user will be delete there post of this route.
// accept object only {postId} from request.body;
post.delete('/:id', async (req, res)=>{
    try{
        
        
       
        const deletePost = await postSchema.findByIdAndDelete(req.params.id)
        if(!req.params.id) {
            return res.status(400).send()
        }
        res.json(deletePost)

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

module.exports = post;

// try{
//     const user = req._id;
//     const {postId } = req.body;
//     console.log(postId)
//     const deletePost = await postSchema.deleteOne({user, _id : postId}) 
//     res.json(deletePost)

// }catch(err){
//     if(err){
//         console.log(err.message)
//         res.json({error : err.message})
//     }else{
//         console.log('server side error')
//         res.json({error : 'server side error'})
//     }
// }