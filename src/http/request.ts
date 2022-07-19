import {sanitizeEndpoint} from '../util';

/**
 * @class RequestLike
 */
export class RequestLike {
    /**
     * @constructor
     * @param {Request} request Response class.
     */
    constructor(private request: Request) {}

    /**
     * Get request headers.
     * @return {Headers}
     */
    get headers(): Headers {
        return this.request.headers;
    }

    /**
     * Get URL.
     * @return {URL}
     */
    get url(): URL {
        return new URL(this.request.url);
    }

    /**
     * Get Request Path.
     * @return {string}
     */
    get path(): string {
        const p = this.url.pathname;
        if (p.length === 1 && p === '/') {
            return p;
        } else {
            return sanitizeEndpoint(p);
        }
    }

    /**
     * Get JSON response.
     * @return {Promise<JSON>}
     */
    json(): Promise<JSON> {
        return this.request.json();
    }

    /**
     * HTTP Methods
     * @return {string}
     */
    get method(): string {
        return this.request.method.toUpperCase();
    }

    /**
     * Get request body.
     * @return {Promise<Blob>}
     */
    get body(): Promise<Blob> {
        return this.request.blob();
    }

    /**
     * Get Raw request.
     * @return {Request}
     */
    get raw(): Request {
        return this.request;
    }

    /**
     * Get Request Mode.
     * @return {RequestMode}
     */
    get mode(): RequestMode {
        return this.request.mode;
    }

    /**
     * Get query params.
     * @return {URLSearchParams}
     */
    get params(): URLSearchParams {
        return this.url.searchParams;
    }
}
