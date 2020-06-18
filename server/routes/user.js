

const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User");

router.post('/create',(req,res)=>{
    const {name} = req.body 
    if(!name ){
      return  res.status(422).json({error:"Plase add all the fields"})
    }
  
    const post = new User({
      name
    })
    post.save().then(result=>{
        res.json(result)
    })
    .catch(err=>{
        console.log(err)
    })
})
router.get("/user",(req,res)=>{
     User.find().then((result)=>{
         res.json(result)
     }).catch(err => {
         console.log(err);
     })
})
router.put('/addSkills',(req,res)=>{
 
    const skill = {
        text:req.body.text ,
        percentage:req.body.percentage
    }
    
    User.findByIdAndUpdate(req.body.userId,{
        $push:{skills:skill}},{new:true}).exec((err,result)=>{
            if(err){
                return res.status(422).json({error:err})
            }else{
                res.json(result)
            }
        })
})

router.put('/addProject',(req,res)=>{
 
    const project = {
        name:req.body.name ,
        detail:req.body.detail
    }
    
    User.findByIdAndUpdate(req.body.userId,{
        $push:{projects:project}},{new:true}).exec((err,result)=>{
            if(err){
                return res.status(422).json({error:err})
            }else{
                res.json(result)
            }
        })
})
router.put('/addEdu',(req,res)=>{
 
    const education = {
        school:req.body.school ,
        degree:req.body.degree,
        from:req.body.from,
        to:req.body.to
    }
    
    User.findByIdAndUpdate(req.body.userId,{
        $push:{eduction:education}},{new:true}).exec((err,result)=>{
            if(err){
                return res.status(422).json({error:err})
            }else{
                res.json(result)
            }
        })
})



router.put('/image',(req,res)=>{
    User.findByIdAndUpdate(req.body.userId,{$set:{image:req.body.image}},{new:true},
        (err,result)=>{
         if(err){
             return res.status(422).json({error:"pic canot post"})
         }
         res.json(result)
    })
})


module.exports = router