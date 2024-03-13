/**
 * @typedef {Object} Person
 * @property {Name} name
 * @property {Picture} picture
 */
/**
 * @typedef {Object} Name
 * @property {string} title
 * @property {string} first
 * @property {string} last
 */
/**
 * @typedef {Object} Picture
 * @property {string} large
 * @property {string} medium
 * @property {string} thumbnail
 */

/**
 * @typedef {Object} Runners
 * @property {Person[]} results - Array of runners
 * @property {Object} info - Info about response
 */

/**
 * @returns {Runners}
 */
async function fetchRunners(url) {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (e) {
    console.error(`Error on get runners ${e}`);
  }
}

export default fetchRunners;
