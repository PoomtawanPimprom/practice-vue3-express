const express = require('express');

const { getAllUser, getUserById, createUser, deleteUserById, updateUserById } = require('../../controller/user')

const router = express.Router();
router.get('/', async (req, res) => {
    try {
        const users = await getAllUser()
        if (!users || users.length === 0) {
            return res.status(404).json({ error: "No users found." });
        }
        return res.json(users);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
});
router.get('/:id', async (req, res) => {
    try {
        const params = req.params.id
        const [user] = await getUserById(params)
        return res.json(user);
    } catch (err) {
        console.error("Database query error:", err);
        return res.status(500).json({ error: err.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const { fname, lname } = req.body
        const data = await createUser({ fname, lname })
        return res.status(200).json(data)
    } catch (error) {
        console.error("Database query error:", error);
        return res.status(500).json({ error: "Database query failed" + error.message });
    }
})


router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const { fname, lname } = req.body;

        // update
        const updateResult = await updateUserById(id, { fname, lname });

        // return updated data
        const [updatedData] = await getUserById(id);

        const result = updatedData.length == 0 ? null : updatedData
        return res.status(200).json({
            updateResult,
            result
        });
    } catch (error) {
        console.error("Database query error:", error);
        return res.status(500).json({ error: "Database query failed: " + error.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id
        //check has user?
        const [check] = await getUserById(id);
        if (!check||check.length == 0) {
            return res.status(404).json({ message: "user not found" })
        }

        //delete user
        const result = await deleteUserById(id)
        const updatedDate = await getAllUser()

        return res.status(200).json({
            message: "User deleted successfully",
            updatedDate
        })
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ message: "error" + error.message })
    }
})

module.exports = router;
