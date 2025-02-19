const pool = require('../database/db');

const getAllUser = async () => {
    try {
        const [users] = await pool.query("SELECT * FROM user");
        return users;
    } catch (err) {
        console.error("Database query error:", err);
        return
    }
}

const getUserById = async (id) => {
    try {
        const [user] = await pool.execute("SELECT * FROM user WHERE id = ? ", [id]);
        return user;
    } catch (err) {
        console.error("Database query error:", err);
        return null;
    }
}

const createUser = async (data) => {
    try {
        const { fname, lname } = data
        const [result] = await pool.execute("INSERT INTO user (fname,lname) VALUES (?,?)", [fname, lname])
        return result
    } catch (error) {
        console.error("Database query error:", error);
        return []
    }
}

const updateUserById = async (id, data) => {
    try {
        const { fname, lname } = data;

        const updates = [];
        const values = [];

        //check fname
        if (fname !== undefined) {
            updates.push("fname = ?");
            values.push(fname);
        }

        //check lname
        if (lname !== undefined) {
            updates.push("lname = ?");
            values.push(lname);
        }

        // if invalid will return
        if (updates.length === 0) {
            return { error: "No fields to update." };
        }

        // update
        const sql = `UPDATE user SET ${updates.join(", ")} WHERE id = ? LIMIT 1`;
        values.push(id);
        await pool.execute(sql, values);

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
        await pool.execute("DELETE FROM user WHERE id = ?", [id])

        return {
            message: "User deleted successfully",
        }
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ message: "error" + error.message })
    }
}

module.exports = { getAllUser, getUserById, createUser, updateUserById, deleteUserById }
