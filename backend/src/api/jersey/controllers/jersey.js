'use strict';

/**
 *  jersey controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::jersey.jersey');
