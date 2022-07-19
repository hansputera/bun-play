import {RouterBase} from '../base';
import {sanitizeEndpoint} from '../util';

/**
 * @class RouterManager
 */
export class RouterManager<R extends RouterBase> {
    /**
     *
     * @param {string} pathLike Path Parent.
     */
    constructor(private pathLike: string) {
        if (!pathLike.startsWith('/'))
            throw new TypeError("PathLike must be starts with '/'");
        this.pathLike = sanitizeEndpoint(pathLike);
    }

    /**
     * Routers collection.
     * @type {Map<string, R>}
     */
    public routers: Map<string, R> = new Map();

    /**
     * Push RouterBase to routers Map.
     * @param {RouterBase | RouterManager} r Router base.
     * @return {void}
     */
    push(r: RouterBase | RouterManager<R>): void {
        if (!(r instanceof RouterManager)) {
            let endpoint = sanitizeEndpoint(this.pathLike.concat(r.endpoint));
            if (!endpoint.length) endpoint = '/';

            const key = r.method.toUpperCase().concat(':', endpoint);
            if (this.routers.has(key))
                console.warn(
                    'Router ',
                    endpoint,
                    'with ',
                    r.method.toUpperCase(),
                    'is exists!',
                );

            this.routers.set(key, r as R);
        } else {
            this.routers = new Map([...this.routers, ...r.routers]);
            r.routers.clear();
        }
    }

    /**
     * Find router.
     * @param {string} endpoint Router endpoint.
     * @param {string} method Router method.
     * @return {RouterBase | undefined}
     */
    find(endpoint: string, method: string): RouterBase | undefined {
        Bun.gc(true);
        return this.routers.get(method.toUpperCase().concat(':', endpoint));
    }
}
