import * as mysql from 'mysql';
import config from '../config';

import profileinfo from './profileinfo';
import descriptions from './descriptions';
import locations from './locations';
import hobbies from './hobbies';
import sensorytags from './sensorytags';

const Connection = mysql.createConnection(config.mysql);

export const Query = (query: string, values?: Array<string | number | boolean>) => {
    return new Promise<{insertId: string}>((resolve, reject) => {
        Connection.query(query, values, (err, results) => {
            if(err) return reject(err);
            return resolve(results);
        });
    });
};

export default {
    profileinfo,
    descriptions,
    locations,
    hobbies,
    sensorytags
}