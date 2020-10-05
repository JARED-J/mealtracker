import {db} from './index';

export const getTrends = () => {
    return new Promise((resolve, reject) => {
        let trends;
        const query = `
            SELECT strftime('%m/%d', dateUTC) as date,
            SUM(calories) as calories
            FROM food
            WHERE dateUTC between date("now", '-1 months') and date('now', '+1 day')
            GROUP BY date;
        `;
        db.transaction(txn => {
            txn.executeSql(
                query,
                [],
                (_, {rows: {_array}}) => {
                    trends = _array;
                }
            )},
            (err) => {
                reject(err);
            }, () => {
                resolve(trends);
        })
    })
}
