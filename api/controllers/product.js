import { db } from "../db.js";

export const getProducts = async (_, res) => {
    const q = "SELECT * FROM produtos";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
}