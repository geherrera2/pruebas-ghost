/// <reference types="cypress" />

const backstop = require('backstopjs');
const config = require('../fixtures/backstop-base.json')


/**
 * Run BackstopJS as code 
 * Scenarios and Report folder name can be set via params
*/
function backstopExec(payload = {scenarios: [], folder:'default'}, refreshReferences = true) {
  return new Promise((resolve) => {
    const configuration = config
    config.scenarios = payload.scenarios
    config.paths.html_report = `cypress/reports/backstop/${payload.folder}/html_report`
    config.paths.ci_report = `cypress/reports/backstop/${payload.folder}/ci_report`

    if (refreshReferences) {
      backstop('reference', { config: configuration }).then(() => {
        resolve(null)
      }).catch(() => {
        resolve(null)
      })
    } else {
      backstop('test', { config: configuration }).then(() => {
        resolve(null)
      }).catch(() => {
        resolve(null)
      })
    }

  })
}
/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  backstop('init')
   on('task', {
    log(message) {
      console.log(message)
      return null
    },
    backstopRefreshReferences(customConfig) {
      return backstopExec(customConfig)
    },
    backstopTest(customConfig) {
      return backstopExec(customConfig, false)
    }
  })
};
