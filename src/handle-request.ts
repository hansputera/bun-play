import {RequestLike} from './http';
import {routerManager} from './web';

export const handleRequest = async (request: Request): Promise<Response> => {
    const requestLike = new RequestLike(request);
    const router = routerManager.find(requestLike.path, requestLike.method);
    if (router) {
        return await router.exec(requestLike);
    } else {
        return new Response(Bun.file('public'.concat(requestLike.path)));
    }
};
