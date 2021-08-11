import { Query } from "./index";

const one = async (id: string) =>
    Query(`
    SELECT 
        sports,
        foodie,
        running,
        travel,
        movies,
        reading,
        fashion,
        videogames,
        dancing,
        cycling,
        music,
        swimming,
        hiking,
        excercising,
        concerts,
        art,
        cooking,
        singing,
        baking,
        animals,
        camping,
        boardgames,
        crafts
    FROM hobbies 
    WHERE id = ?`, [id]
    );

const add = async (
    sports: boolean, foodie: boolean, running: boolean, travel: boolean, movies: boolean, reading: boolean,
    fashion: boolean, videogames: boolean, dancing: boolean, cycling: boolean, music: boolean, swimming: boolean,
    hiking: boolean, excercising: boolean, concerts: boolean, art: boolean, cooking: boolean, singing: boolean,
    baking: boolean, animals: boolean, camping: boolean, boardgames: boolean, crafts: boolean) =>
    Query(`
        INSERT INTO hobbies 
        (sports, foodie, running, travel, movies, reading, 
        fashion, videogames, dancing, cycling, music, swimming, hiking, excercising,
        concerts, art, cooking, singing, baking, animals, camping, boardgames, crafts)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [sports, foodie, running, travel, movies, reading, fashion, videogames, dancing, cycling, music, swimming, hiking,
            excercising, concerts, art, cooking, singing, baking, animals, camping, boardgames, crafts]
    );

const edit = async (
    sports: boolean, foodie: boolean, running: boolean, travel: boolean, movies: boolean, reading: boolean,
    fashion: boolean, videogames: boolean, dancing: boolean, cycling: boolean, music: boolean, swimming: boolean,
    hiking: boolean, excercising: boolean, concerts: boolean, art: boolean, cooking: boolean, singing: boolean,
    baking: boolean, animals: boolean, camping: boolean, boardgames: boolean, crafts: boolean, id: string) =>
    Query(`
        UPDATE hobbies 
        SET sports = ?, foodie = ?, running = ?, travel = ?, movies = ?, reading = ?,
        fashion = ?, videogames = ?, dancing = ?, cycling = ?, music = ?, swimming = ?,
        hiking = ?, excercising = ?, concerts = ?, art = ?, cooking = ?, singing = ?,
        baking = ?, animals = ?, camping = ?, boardgames = ?, crafts = ?
        WHERE hobbies.id = ?`,
        [sports, foodie, running, travel, movies, reading, fashion, videogames, dancing, cycling, music, swimming, hiking,
            excercising, concerts, art, cooking, singing, baking, animals, camping, boardgames, crafts, id]
    );

// const remove = async (id: string) => Query(`DELETE FROM hobbies WHERE hobbies.id = ?`, [id])

export default {
    one,
    add,
    edit
    // remove
}