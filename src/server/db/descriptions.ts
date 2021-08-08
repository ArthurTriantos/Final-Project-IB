import { Query } from "./index";

const add = async (age: string, gender: string, orientation: string, ethnicity: string, height: string) =>
        Query(`
        INSERT INTO descriptions 
        (age, gender, orientation, ethnicity, height) 
        VALUES (?, ?, ?, ?, ?)`,
        [age, gender, orientation, ethnicity, height]
        );

const edit = async (age: string, gender: string, orientation: string, ethnicity: string, height: string, id: string) =>
        Query(`
        UPDATE descriptions 
        SET age = ?, gender = ?, orientation = ?, ethnicity = ?, height = ?
        WHERE descriptions.id = ?`,
        [age, gender, orientation, ethnicity, height, id]
        );

// const remove = async (id: string) => Query(`DELETE FROM descriptions WHERE descriptions.id = ?`, [id])

export default {
    add,
    edit
//     remove
}