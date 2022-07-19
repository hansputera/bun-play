import normalizeUrl from 'normalize-url';

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
        return new URL(
            normalizeUrl(this.request.url, {
                removeQueryParameters: true,
                removeTrailingSlash: true,
                stripHash: true,
                stripTextFragment: true,
            }),
        ).pathname;
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
        return this.request.method;
    }
}
