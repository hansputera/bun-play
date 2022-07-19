import {handleRequest} from './handle-request';
import {apiRouter, HomeRouter} from './routers';
import {routerManager} from './web';
import {initDB} from './db';

console.log('Registering routers');
routerManager.push(new HomeRouter());
routerManager.push(apiRouter);

console.log('Initializing database');
initDB();

console.log('API Started!');

Bun.serve({
    port: process.env.PORT || 3000,
    development: process.env.NODE_ENV === 'development',
    fetch: handleRequest,
});
