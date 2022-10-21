/**
 * @function createKeyForRoute
 * @param {string} path /home
 * @param {string} text home
 * @returns /home-home
 */
export const createKeyForRoute = (path, text) => String(`${path}-${text}`).toLowerCase()
