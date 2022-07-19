/**
 * Sanitize endpoint.
 * @param {string} endpoint Endpoint.
 * @return {string} Sanitized endpoint.
 * @return {string}
 */
export const sanitizeEndpoint = (endpoint: string): string =>
    endpoint
        .replace(/\/+/g, '/')
        .replace(/\/+$/g, '')
        .replace(/(\#|\?\&)(.*)\=[^&]+/gi, '');
