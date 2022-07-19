import {Database} from 'bun:sqlite';

export const db = new Database('bunplay.sqlite');

/**
 * Initialize database.
 * @return {Promise<void>}
 */
export const initDB = async (): Promise<void> => {
    db.run(
        'CREATE TABLE IF NOT EXISTS `users` (id INTEGER PRIMARY KEY, name VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, verified INT(1) DEFAULT `0`, created_at DATETIME, updated_at DATETIME)',
    );
    db.run(
        'CREATE TABLE IF NOT EXISTS `books` (id INTEGER PRIMARY KEY, name VARCHAR(255), author VARCHAR(255), description VARCHAR(255), addedBy INTEGER NOT NULL, created_at DATETIME, updated_at DATETIME)',
    );
    db.run(
        'CREATE TABLE IF NOT EXISTS `sessions` (id INTEGER PRIMARY KEY, user_id INTEGER, token VARCHAR(255), created_at DATETIME, updated_at DATETIME)',
    );
};
