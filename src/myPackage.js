// @ts-check
/**
 * 
 * @param {object} config 
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns 
 */
export function init(config) {
    return true;
}

/**
 * Exits the program
 * @param {number} code 
 * @returns 
 */
export function exit(code) {
    return code + 1;
}