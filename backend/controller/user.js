const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const getAllUser = async () => {
    try {
        const data = await prisma.user.findMany({
            include: {
                role: true
            }
        })
        return data;
    } catch (err) {
        console.error("Database query error:", err);
        return
    }
}

const getUserById = async (id) => {
    try {
        const data = await prisma.user.findFirst({
            where: { id: id },
            include: {
                role: true
            }
        })
        return data;
    } catch (err) {
        console.error("Database query error:", err);
        return null;
    }
}

const createUser = async (data) => {
    try {
        const { fname, lname } = data
        const newUSer = await prisma.user.create({
            data: {
                fname,
                lname
            }
        })
        return newUSer
    } catch (error) {
        console.error("Database query error:", error);
        return []
    }
}

const updateUserById = async (id, data) => {
    try {
        const { fname, lname, roleId } = data;

        const updateData = await prisma.user.update({
            where: { id },
            data: {
                fname,
                lname,
                roleId
            }
        })
        return {
            message: "Updated data successfully",
        };
    } catch (error) {
        console.error("Database query error:", error);
        return null
    }
}

const deleteUserById = async (id) => {
    try {
        //delete user
        await prisma.user.delete({
            where:{id}
        })
        return {
            message: "User deleted successfully",
        }
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ message: "error" + error.message })
    }
}

module.exports = { getAllUser, getUserById, createUser, updateUserById, deleteUserById }
