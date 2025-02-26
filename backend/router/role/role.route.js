const express = require('express')
const { getAllRole } = require('../../controller/role')
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const result = await getAllRole()
        return res.json(result)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router