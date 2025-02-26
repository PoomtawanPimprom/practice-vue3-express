const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const getAllProducts = async () => {
    return await prisma.product.findMany()
}

const getProductById = async (id) => {
    return await prisma.product.findUnique({
        where: { id: id }
    })
}

const createProduct = async (data) => {
    return await prisma.product.create({
        data: {
            name: data.name,
            price: data.price,
            quantity: data.quantity,
            image: data.image
        }
    })
}

const updateProductById = async (id, data) => {
    return await prisma.product.update({
        where: { id: id },
        data: {
            name: data.name,
            price: data.price,
            quantity: data.quantity,
            image: data.image
        }
    })
}

const deleteProductById = async (id) => {
    await prisma.product.delete({
        where: { id: id }
    })
    return {
        message: "Product deleted successfully"
    }
}


module.exports = { getAllProducts, getProductById, updateProductById,createProduct, deleteProductById}