import type {RequestLike} from '../http';
import {sanitizeEndpoint} from '../util';

/**
 * @class RouterBase
 */
export class RouterBase {
    constructor(public endpoint: string, public method: string) {
        if (!endpoint.startsWith('/'))
            throw new TypeError("Endpoint must be starts with '/'");

        this.endpoint = sanitizeEndpoint(endpoint);
    }

    /**
     * Execute the router.
     * @param {RequestLike} request RequestLike instance.
     * @return {Promise<Response>}
     */
    async exec(request: RequestLike): Promise<Response> {
        return new Response(
            'Hello from '.concat(
                this.endpoint,
                ' with method ',
                request.method,
            ),
            {
                status: 200,
            },
        );
    }
}
