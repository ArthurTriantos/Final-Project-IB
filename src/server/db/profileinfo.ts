import { Query } from './index';

const all = async () =>
    Query(`SELECT b.id, b.title, b.content, a.name FROM blogs b JOIN authors a on b.authorid = a.id ORDER BY b.id asc`);

export default {
    all
}