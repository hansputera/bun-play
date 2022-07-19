import {RouterBase} from '../../base';

/**
 * @class IndexRouter
 */
export class IndexRouter extends RouterBase {
    /**
     * @constructor
     */
    constructor() {
        super('/', 'GET');
    }

    /**
     * Execute the router.
     * @return {Promise<Response>}
     */
    async exec(): Promise<Response> {
        return new Response(
            JSON.stringify({
                message: 'Hello Bun!',
            }),
        );
    }
}
