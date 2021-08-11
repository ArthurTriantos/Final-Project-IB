import * as express from "express";
import db from '../db';

let router = express.Router();

router.get('/:id', async (req, res) => {
    let id: string = req.params.id;

     try {
        res.json((await db.hobbies.one(id))[0]);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }

}
);

export default router;