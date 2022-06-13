'use strict';

/**
 * jersey service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::jersey.jersey');
