import {db} from './index';

export default function initTables() {
    // Enable Foriegn Keys
    db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () =>
        console.log('Foreign keys turned on')
    );
    // User Settings
    db.transaction(txn => {
        txn.executeSql('create table if not exists Settings (id integer primary key not null,name text not null, local_time_zone text not null, breakfast_view integer not null)', []);
        console.log('Settings table created');
    });

    // Food
    db.transaction(txn => {
        txn.executeSql('create table if not exists food(id integer primary key not null, name text not null, calories integer not null, type integer not null, dateUTC text not null)', []);
        console.log('Food table created');
    });
}
