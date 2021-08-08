import * as express from "express";
import db from '../db';

let router = express.Router();

router.get('/:id?', async (req, res) => {
    let id: string = req.params.id;

    if (id) {
        // try {
        //     res.json((await db.activities.one(id))[0]);
        // } catch(e) {
        //     console.log(e);
        //     res.sendStatus(500);
        // }
    } else {
        try {
            res.json(await db.activities.all());
        } catch(e) {
            console.log(e);
            res.sendStatus(500);
        }
    }
});

export default router;