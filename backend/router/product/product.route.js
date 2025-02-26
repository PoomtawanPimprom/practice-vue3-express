const express = require('express');
const { getAllProducts, getProductById, createProduct, updateProductById, deleteProductById } = require('../../controller/product');
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const data = await getAllProducts()
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})
router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id
        const data = await getProductById(id)
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

router.post("/", async (req, res) => {
    try {
        const { name, price, quantity,image } = req.body
        if (!name || !price || !quantity) {
            return res.status(400).json({ message: "invalid data" })
        }
        await createProduct({ name, price, quantity,image })
        return res.status(200).json({ message: "create product success" })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error.message })
    }


})

router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id
        const { name, price, quantity ,image} = req.body
        const check = await getProductById(id)
        if(check.length === 0 ){
            return res.status(404).json({ message: "not found"})
        }
        await updateProductById(id, { name, price, quantity ,image})
        return res.status(200).json({ message: "update product success" })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error.message })
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id
        const check = await getProductById(id)
        if(check.length === 0 ){
            return res.status(404).json({ message: "not found"})
        }
        await deleteProductById(id)
        return res.status(200).json({ message: "delete product success" })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error.message })
    }
})

module.exports = router