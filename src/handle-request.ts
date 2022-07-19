export const handleRequest = async (request: Request): Promise<Response> => {
    console.log('Receiving request', request.url);
    return new Response('Hello World');
};
