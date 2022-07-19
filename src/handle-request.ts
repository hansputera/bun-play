import {RequestLike} from './http';
import {routerManager} from './web';

export const handleRequest = async (request: Request): Promise<Response> => {
    const requestLike = new RequestLike(request);
    const router = routerManager.find(requestLike.path, requestLike.method);
    if (router) {
        Bun.gc(true);
        return await router.exec(requestLike);
    } else {
        Bun.gc(true);
        return new Response('404 Not Found', {
            status: 404,
            statusText: '404 Not Found',
        });
    }
};
