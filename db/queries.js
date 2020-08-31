import {db} from './index';

// Inserts food into db and returns db obj
export async function postFood ({name, cal, type}) {
    const postQuery = `insert into food (dateUTC, name, calories, type) values (datetime('now'),?, ?, ?);`;
    let postPromise = new Promise((resolve, reject) => {
        let id;
        db.transaction(txn => {
            txn.executeSql(
                postQuery,
                [name, cal, type],
                (_, {insertId}) => {
                    id = insertId;
                })
            }, reject, () => {
                resolve(id)
        })
    })
    let id = await postPromise;
    let getPromise = new Promise((resolve, reject) => {
        let food;
        db.transaction((txn) => {
            txn.executeSql('select * from food where id = ?;', [id],
            (_, { rows: { _array }}) => {
                food = _array[0];
            });
        }, reject, () => {
            resolve(food);
        });
    })
    let newFood = await getPromise;
    return newFood;
}

export function updateFood (id, name, cal) {
    return new Promise((resolve, reject) => {
        db.transaction(txn => {
            txn.executeSql(
                `update food set name = ?, calories = ?, where id = ?;`,
                [name, cal, id]);
            }, reject, resolve)
        });
}

export function deleteFoodDB (id) {
    return new Promise((resolve, reject) => {
        db.transaction(txn => {
            txn.executeSql(`delete from food where id = ?;`, [id]);
        }, reject, resolve);
    });
}

export function getFood (date) {
    return new Promise((resolve, reject) => {
        let foodArr;
        db.transaction((txn) => {
            txn.executeSql('select * from food;', [],
            (_, { rows: { _array }}) => {
                foodArr = _array;
            });
        }, reject, () => {
            resolve(foodArr);
        });
    });
}
