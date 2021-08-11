import * as express from "express";
import db from '../db';
import comments from "../db/comments";

let router = express.Router();

router.get('/:id?', async (req, res) => {

        try {
            res.json(await db.comments.all());
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }

    }
);

router.post('/', async (req, res) => {
    let commentObj: comment = req.body

    try {
        res.json(await db.comments.add(commentObj.username, commentObj.commentText));
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

interface comment {
    username: string,
    commentText: string
}

export default router;