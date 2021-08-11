import { Query } from "./index";

const all = async () =>
    Query(`SELECT * FROM comments`);

const add = async (username: string, commentText: string) =>
    Query(`INSERT INTO comments (username, commentText) VALUES (?, ?)`, [username, commentText]);

export default {
    all,
    add
}