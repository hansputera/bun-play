import {RouterBase} from '../base';

/**
 * @class HomeRouter
 */
export class HomeRouter extends RouterBase {
    /**
     * @constructor
     */
    constructor() {
        super('/', 'GET');
    }

    /**
     * Exec request.
     * @return {Promise<Response>}
     */
    async exec(): Promise<Response> {
        return new Response(Bun.file('views/index.html'), {
            status: 200,
        });
    }
}
