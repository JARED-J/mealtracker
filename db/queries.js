import {db} from './index';

export async function addFood (name, cal, type) {
    return new Promise((resolve, reject) => {
        db.transaction(txn => {
          txn.executeSql(
              `insert into food (dateUTC, name, calories, type)
              values (datetime('now'),?, ?, ?);`,
              [name, cal, type]);
       }, reject, resolve)
    })
}

export async function updateFood (id, name, cal) {
    return new Promise((resolve, reject) => {
        db.transaction(txn => {
            txn.executeSql(
                `update food set name = ?, calories = ?, where id = ?;`,
                [name, cal, id]);
            }, reject, resolve)
        });
}

export async function deleteFood (id) {
    return new Promise((resolve, reject) => {
        db.transaction(txn => {
            txn.executeSql(`delete from food where id = ?;`, [id]);
        }, reject, resolve);
    });
}

export async function numFoodItems () {
    return new Promise((resolve, reject) => {
        let count = 0;
        db.transaction((txn)=>{
            txn.executeSql('SELECT COUNT(*) AS c FROM food', [], function (tx, res) {
                count = res.rows.item(0)['c'];
            });
        }, reject, ()=>{
            resolve(count);
        });
    });
}

export async function getFood () {
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
