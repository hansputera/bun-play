import {handleRequest} from './handle-request';
import {HomeRouter} from './routers';
import {routerManager} from './web';

console.log('Registering routers');
routerManager.push(new HomeRouter());

console.log('API Started!');

Bun.serve({
    port: process.env.PORT || 3000,
    development: process.env.NODE_ENV === 'development',
    fetch: handleRequest,
});
