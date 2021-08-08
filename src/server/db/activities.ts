import { Query } from "./index";

const all = async () => await Query(`
    select * from activities;
`, []);

export default {
    all
}