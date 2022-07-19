import {Database} from 'bun:sqlite';

export const db = new Database('bunplay.sqlite');

/**
 * Initialize database.
 * @return {Promise<void>}
 */
export const initDB = async (): Promise<void> => {
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY,
            name VARCHAR(255),
            email VARCHAR(255),
            password VARCHAR(255),
            created_at DATETIME,
            updated_at DATETIME
        );
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS book (
            id INTEGER PRIMARY KEY,
            title VARCHAR(255),
            author VARCHAR(255),
            publisher VARCHAR(255),
            synopsis TEXT,
            addedUserId INTEGER,
            created_at DATETIME,
            updated_at DATETIME
    `);
};
