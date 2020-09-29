import {db} from './index';

export default async function initTables() {
    return new Promise((resolve, reject) => {
        db.transaction(txn => {
            // txn.executeSql('drop table settings;', [], () => {
            //     console.log('Settings table dropped')
            // })
            // Enable Foriegn Keys
            txn.executeSql('PRAGMA foreign_keys = ON;', [], ()=>{
                console.log('Foreign keys turned on');
            });
            // User Settings
            txn.executeSql(
                `create table if not exists Settings (
                    id integer primary key not null,
                    name text not null,
                    daily_goal int not null,
                    breakfast_view integer not null)`, [], ()=>{
                        console.log('Settings table created');
                    });
            // Food
            txn.executeSql(
                `create table if not exists food (
                    id integer primary key not null,
                    name text not null,
                    calories integer not null,
                    type int not null,
                    dateUTC text not null)`, [], ()=>{
                        console.log('Food table created');
                    });
        }, reject, resolve);
    });
}
