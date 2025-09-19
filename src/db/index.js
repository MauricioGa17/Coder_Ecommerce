import * as SQLite from 'expo-sqlite'

let db;

export const initDataBase = async () => {
    if(!db){
        db = await SQLite.openDatabaseAsync('ecommerce.db')
    }
}

export const initSessionTable = async () => {
    await initDataBase();
    await db.execAsync(`
    CREATE TABLE IF NOT EXISTS session (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        localId TEXT,
        email TEXT
    );
`)
}

export const saveSession = async (localId, email) => {
    await initDataBase();
    await db.runAsync(`DELETE FROM session;`);
    await db.runAsync(`INSERT INTO session (localId, email) values (?, ?);`, [localId, email])
}

export const getSession = async () => {
    await initDataBase();
    const result  = await db.getAllAsync(`SELECT * FROM session LIMIT 1;`);
    console.log("Obteniendo Datos", result);
    return result.length> 0 ? result[0] : null 
}

export const clearSession = async () => {
    await initDataBase();
    await db.runAsync(`DELETE FROM session;`)
}