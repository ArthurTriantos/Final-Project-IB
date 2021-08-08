import { Query } from './index';

const all = async () =>
    Query(`
    SELECT 
        p.id, 
        p.firstname, 
        p.spectrum,
        p.relationship,
        d.age,
        d.gender,
        d.orientation,
        l.city,
        l.state
    FROM profileinfo p 
    JOIN descriptions d ON p.descriptionid = d.id 
    JOIN locations l ON p.locationid = l.id
    ORDER BY p.id asc
    `);

const one = async (id: string) =>
    Query(`
    SELECT 
        p.id, 
        u.username, 
        p.firstname, 
        p.bio,
        p.spectrum,
        p.relationship,
        d.age,
        d.gender,
        d.orientation,
        d.ethnicity,
        d.height,
        l.city,
        l.state,
        h.*,
        s.*
    FROM profileinfo p 
    JOIN users u ON p.userid = u.id
    JOIN descriptions d ON p.descriptionid = d.id
    JOIN locations l ON p.locationid = l.id
    JOIN hobbies h ON p.hobbiesid = h.id
    JOIN sensorytags s ON p.sensoryid = s.id
    WHERE p.userid = ?`,
    [id]
    );

const add = async (
    userid: string, firstname: string, bio: string, spectrum: string, relationship: string,
    descriptionid: string, locationid: string, hobbiesid: string, sensoryid: string) =>
        Query(`
        INSERT INTO profileinfo 
        (userid, firstname, bio, spectrum, relationship, descriptionid, locationid, hobbiesid, sensoryid) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [userid, firstname, bio, spectrum, relationship, descriptionid, locationid, hobbiesid, sensoryid]
        );

const edit = async (
    firstname: string, bio: string, spectrum: string, relationship: string,
    descriptionid: string, locationid: string, hobbiesid: string, sensoryid: string, userid: string) =>
        Query(`
        UPDATE profileinfo 
        SET firstname = ?, bio = ?, spectrum = ?, relationship = ?, descriptionid = ?, locationid = ?, hobbiesid = ?, sensoryid = ?
        WHERE profileinfo.userid = ?`,
        [firstname, bio, spectrum, relationship, descriptionid, locationid, hobbiesid, sensoryid, userid]
        );

// const remove = async (id: string) => Query(`DELETE FROM profileinfo WHERE profileinfo.id = ?`, [id]);

export default {
    all,
    one,
    add,
    edit
    // remove
}