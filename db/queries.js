import {db} from './index';

//Mock queries
export function addFood (name, cal) {
    db.transaction(txn => {
        txn.executeSql("insert into food (date, name, calories,)  values (datetime(\'now\',?, ?;", [name, cal]);
       });
}

export function updateFood (id, name, cal) {
    db.transaction(txn => {
        txn.executeSql(`update food set name = ?, calories = ?, where id = ?;`, [name, cal, id]);
    })
}

export function deleteFood (id) {
    db.transaction(txn => {
        txn.executeSql(`delete from food where id = ?;`, [id]);
    })
}
