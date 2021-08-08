import * as express from "express";
import db from '../db';

let router = express.Router();

router.get('/:id?', async (req, res) => {
    let id: string = req.params.id;

    if (id) {
        try {
            res.json((await db.profileinfo.one(id))[0]);
        } catch(e) {
            console.log(e);
            res.sendStatus(500);
        }
    } else {
        try {
            res.json(await db.profileinfo.all());
        } catch(e) {
            console.log(e);
            res.sendStatus(500);
        }
    }
}
);

router.post('/', async (req, res) => {
    let profileObject: profile = req.body

    try {
        const newDescription = await db.descriptions.add(
            profileObject.age, 
            profileObject.gender, 
            profileObject.orientation,
            profileObject.ethnicity,
            profileObject.height
        );
        const newLocation = await db.locations.add(
            profileObject.city,
            profileObject.state
        );
        const newHobbies = await db.hobbies.add(
            profileObject.sports,
            profileObject.foodie,
            profileObject.running,
            profileObject.travel,
            profileObject.movies,
            profileObject.reading,
            profileObject.fashion,
            profileObject.videogames,
            profileObject.dancing,
            profileObject.cycling,
            profileObject.music,
            profileObject.swimming,
            profileObject.hiking,
            profileObject.excercising,
            profileObject.concerts,
            profileObject.art,
            profileObject.cooking,
            profileObject.singing,
            profileObject.baking,
            profileObject.animals,
            profileObject.camping,
            profileObject.boardgames,
            profileObject.crafts,
        );
        const newSensory = await db.sensorytags.add(
            profileObject.hypersight,
            profileObject.hypersound,
            profileObject.hypersmell,
            profileObject.hypertaste,
            profileObject.hypertouch,
            profileObject.hyposight,
            profileObject.hyposound,
            profileObject.hyposmell,
            profileObject.hypotaste,
            profileObject.hypertouch,
            profileObject.balance,
            profileObject.bodyawareness
        );
        await db.profileinfo.add(
            profileObject.userid, 
            profileObject.firstname, 
            profileObject.bio, 
            profileObject.spectrum, 
            profileObject.relationship,
            newDescription.insertId,
            newLocation.insertId,
            newHobbies.insertId,
            newSensory.insertId
        );
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.put('/:id', async (req, res) => {
    let id: string = req.params.id;
    let profileObject: profile = req.body

    try {
        await db.descriptions.edit(
            profileObject.age, 
            profileObject.gender, 
            profileObject.orientation,
            profileObject.ethnicity,
            profileObject.height, 
            id
        );
        await db.locations.edit(
            profileObject.city,
            profileObject.state,
            id
        );
        await db.hobbies.edit(
            profileObject.sports,
            profileObject.foodie,
            profileObject.running,
            profileObject.travel,
            profileObject.movies,
            profileObject.reading,
            profileObject.fashion,
            profileObject.videogames,
            profileObject.dancing,
            profileObject.cycling,
            profileObject.music,
            profileObject.swimming,
            profileObject.hiking,
            profileObject.excercising,
            profileObject.concerts,
            profileObject.art,
            profileObject.cooking,
            profileObject.singing,
            profileObject.baking,
            profileObject.animals,
            profileObject.camping,
            profileObject.boardgames,
            profileObject.crafts,
            id
        );
        await db.sensorytags.edit(
            profileObject.hypersight,
            profileObject.hypersound,
            profileObject.hypersmell,
            profileObject.hypertaste,
            profileObject.hypertouch,
            profileObject.hyposight,
            profileObject.hyposound,
            profileObject.hyposmell,
            profileObject.hypotaste,
            profileObject.hypertouch,
            profileObject.balance,
            profileObject.bodyawareness,
            id
        );
        await db.profileinfo.add(
            profileObject.userid, 
            profileObject.firstname, 
            profileObject.bio, 
            profileObject.spectrum, 
            profileObject.relationship,
            id,
            id,
            id,
            id
        );


    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// router.delete('/:id', async (req, res) => {
//     let id: string = req.params.id

//     try {
//         await db.descriptions.remove(id);
//         await db.locations.remove(id);
//         await db.hobbies.remove(id);
//         await db.sensorytags.remove(id)
//         await db.profileinfo.remove(id);
//     } catch(e) {
//         console.log(e);
//         res.sendStatus(500);
//     }
// })

interface profile {
    userid: string,
    firstname: string,
    bio: string,
    spectrum: string,
    relationship: string,
    age: string,
    gender: string,
    orientation: string,
    ethnicity: string,
    height: string,
    city: string,
    state: string,
    sports: boolean,
    foodie: boolean,
    running: boolean,
    travel: boolean,
    movies: boolean,
    reading: boolean,
    fashion: boolean,
    videogames: boolean,
    dancing: boolean,
    cycling: boolean,
    music: boolean,
    swimming: boolean,
    hiking: boolean,
    excercising: boolean,
    concerts: boolean,
    art: boolean,
    cooking: boolean,
    singing: boolean,
    baking: boolean,
    animals: boolean,
    camping: boolean,
    boardgames: boolean,
    crafts: boolean,
    hypersight: boolean,
    hypersound: boolean,
    hypersmell: boolean,
    hypertaste: boolean,
    hypertouch: boolean,
    hyposight: boolean,
    hyposound: boolean,
    hyposmell: boolean,
    hypotaste: boolean,
    hypotouch: boolean,
    balance: boolean,
    bodyawareness: boolean
}

export default router;