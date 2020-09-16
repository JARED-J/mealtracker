import {db} from './index';

const getSingleFood  = id => {
    return new Promise((resolve, reject) => {
        let food;
        db.transaction(txn => {
            txn.executeSql(`select * from food where id = ?;`, [id],
            (_, {rows: {_array}}) => {
                food = _array[0];
            });
        }, reject, () => {
            resolve(food)
        })
    });
}

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
    let newFood = await getSingleFood(id);
    return newFood;
}

export async function updateFood (food) {
    const {id, name, cal, type} = food;
    const updatePromise = await new Promise((resolve, reject) => {
        db.transaction(txn => {
            txn.executeSql(
                `update food set name = ?, calories = ?, type = ? where id = ?;`,
                [name, cal, type, id])
            }, reject, () => resolve(true))
        });
    let updated = await getSingleFood(id);
    return updated;
}

export function deleteFoodDB (id) {
    return new Promise((resolve, reject) => {
        db.transaction(txn => {
            txn.executeSql(`delete from food where id = ?;`, [id]);
        }, reject, resolve);
    });
}

export function getFood () {
    return new Promise((resolve, reject) => {
        let query = 'select * from food where dateUTC between date("now", "start of day") and date("now", "start of day", "+1 day");';
        let foodArr;
        db.transaction((txn) => {
            txn.executeSql(query, [],
                (_, { rows: { _array }}) => {
                    foodArr = _array;
                });
        }, reject, () => {
            resolve(foodArr);
        });}
    );
}
