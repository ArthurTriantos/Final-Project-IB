import { Query } from "./index";

const add = async (city: string, state: string) =>
        Query(`
        INSERT INTO locations 
        (city, state) 
        VALUES (?, ?)`,
        [city, state]
        );

const edit = async (city: string, state: string, id: string) =>
        Query(`
        UPDATE locations 
        SET city = ?, state = ?
        WHERE locations.id = ?`,
        [city, state, id]
        );

// const remove = async (id: string) => Query(`DELETE FROM locations WHERE locations.id = ?`, [id])

export default {
    add,
    edit
//     remove
}