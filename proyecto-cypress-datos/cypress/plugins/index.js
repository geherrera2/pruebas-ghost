/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
const getTitle = require('../../../data-pool').getTitle;
const getParagraph = require('../../../data-pool').getParagraph;
const getTag = require('../../../data-pool').getTag;
const getUrl = require('../../../data-pool').getUrl;
const getDateFuture = require('../../../data-pool').getDateFuture;
const getDatePass = require('../../../data-pool').getDatePass;
const createAllData = require('../../../data-pool').createAllData;

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  on("task", {
    getTitle(numCharacters=10) {
      return getTitle(numCharacters);
    },
    getTag(tagSize=10) {
      return getTag(tagSize);
    },
    getParagraph(numParagraphs=1) {
      return getParagraph(numParagraphs);
    },
    getUrl() {
      return getUrl();
    },
    createAllData() {
      return createAllData();
    },
    getDateFuture(){
      return getDateFuture();
    },
    getDatePass(){
      return getDatePass();
    }

  });

}
