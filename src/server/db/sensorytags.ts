import { Query } from "./index";

const add = async (
    hypersight: boolean, hypersound: boolean, hypersmell: boolean, hypertaste: boolean, hypertouch: boolean,
    hyposight: boolean, hyposound: boolean, hyposmell: boolean, hypotaste: boolean, hypotouch: boolean,
    balance: boolean, bodyawareness: boolean) =>
        Query(`
        INSERT INTO sensorytags 
        (hypersight, hypersound, hypersmell, hypertaste, hypertouch,
        hyposight, hyposound, hyposmell, hypotaste, hypotouch,
        balance, bodyawareness)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [hypersight, hypersound, hypersmell, hypertaste, hypertouch,
        hyposight, hyposound, hyposmell, hypotaste, hypotouch, 
        balance, bodyawareness]
        );

const edit = async (
    hypersight: boolean, hypersound: boolean, hypersmell: boolean, hypertaste: boolean, hypertouch: boolean,
    hyposight: boolean, hyposound: boolean, hyposmell: boolean, hypotaste: boolean, hypotouch: boolean,
    balance: boolean, bodyawareness: boolean, id: string) =>
        Query(`
        UPDATE sensorytags 
        SET hypersight = ?, hypersound = ?, hypersmell = ?, hypertaste = ?, hypertouch = ?,
        hyposight = ?, hyposound = ?, hyposmell = ?, hypotaste = ?, hypotouch = ?,
        balance = ?, bodyawareness = ?
        WHERE sensorytags.id = ?`,
        [hypersight, hypersound, hypersmell, hypertaste, hypertouch,
        hyposight, hyposound, hyposmell, hypotaste, hypotouch, 
        balance, bodyawareness, id]
        );

// const remove = async (id: string) => Query(`DELETE FROM sensorytags WHERE sensorytags.id = ?`, [id])

export default {
    add,
    edit
    // remove
}