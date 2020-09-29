import {db} from './index';

export const getSettings = () => {
    return new Promise((resolve, reject) => {
        let settings;
        db.transaction(txn => {
            txn.executeSql(
                `select * from settings where id = 1;`,
                [],
                (_, {rows: {_array}}) => {
                    settings = _array[0]
                });
        }, reject, () => {
            resolve(settings)
        })
    });
}

export async function initSettings() {
    const userExists = await getSettings();
    if (typeof userExists === 'undefined') {
        postSettings();
    }
}

export function postSettings() {
    const query = `insert into settings (name, breakfast_view, daily_goal) values (?, ?, ?)`;
    return new Promise((resolve, reject) => {
        db.transaction(txn => {
            txn.executeSql(query, ['name', 1, 2000]);
        }, reject, resolve)
    })
}

export async function updateSettings(settings) {
    const {title, breakfast, cal} = settings;
    const query = `update settings set name = ?, breakfast_view = ?, daily_goal = ?;`;
    const updatePromise = await new Promise((resolve, reject) => {
        db.transaction(txn => {
            txn.executeSql(
                query,
                [title, breakfast, cal])
            }, reject, () => resolve(true))
        });
    let updated = await getSettings();
    return updated;
}
