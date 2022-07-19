import {RequestLike} from './http';

export const handleRequest = async (request: Request): Promise<Response> => {
    const requestLike = new RequestLike(request);
    console.log(requestLike.path);

    return new Response('Hello World');
};
