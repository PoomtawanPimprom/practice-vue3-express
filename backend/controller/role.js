const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const getAllRole = async () => {
    return await prisma.role.findMany()
     
}

module.exports = { getAllRole}