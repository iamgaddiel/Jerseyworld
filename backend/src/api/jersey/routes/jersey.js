'use strict';

/**
 * jersey router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::jersey.jersey');
