import openDatabase from '@expo/websql';
const db = openDatabase(':memory:', '0', 'food for testing', 1);

export {
    db
}
