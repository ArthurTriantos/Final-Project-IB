import { Query } from './index';

const insert = async (username: string, email: string, password: string) => await Query(`
    insert into users(username, email, password) 
    values(?, ?, ?);
`, [username, email, password]);

const update = async (newPassword: string, userid: string) => await Query(`
    update users
    set password = ?
    where id = ?
`, [newPassword, userid]);

export default {
    insert,
    update
}