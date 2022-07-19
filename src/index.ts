import {handleRequest} from './handle-request';

console.log('API Started!');

Bun.serve({
    port: process.env.PORT || 3000,
    development: process.env.NODE_ENV === 'development',
    fetch: handleRequest,
});
