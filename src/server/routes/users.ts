import * as express from "express";
import db from '../db';

let router = express.Router();

router.get('/:id?', async (req, res) => {
    let id: string = req.params.id;

    if (id) {
        try {
            res.json((await db.users.one(id))[0]);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    } else {
        try {
            res.json(await db.users.all());
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }
});

router.post("/", async (req, res) => {
    const newUserInfo = req.body;

    try {
        res.send(await db.users.insert(newUserInfo.username, newUserInfo.email, newUserInfo.password));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.put("/:id", async (req, res) => {
    const editUserInfo = req.body;
    const editUserId: string = req.params.id;

    try {
        res.send(await db.users.update(editUserInfo.newPassword, editUserId));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

export default router;