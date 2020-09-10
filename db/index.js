import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase('mealTracker.db');

export {
    db
}
