import { Query } from "./index";

const all = async () => await Query(`
    SELECT * from activities
    ORDER BY id asc
`, []);

export default {
    all
}