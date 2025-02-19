const express = require("express")

const router = express.Router();

router.get("/",(req,res)=>{
    return res.status(200).json({message: "hello"})
})
router.get("/:id",(req,res)=>{
    const params = req.params.id
    return res.status(200).json({params: params})
})

module.exports =  router