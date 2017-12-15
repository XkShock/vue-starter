const path = require('path')
const fs = require('fs')
const {
  sortDependencies,
  installDependencies,
  printMessage,
} = require('./utils')

module.exports = {
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Project name',
    },
    description: {
      type: 'string',
      required: false,
      message: 'Project description',
      default: 'A Vue.js project',
    },
    author: {
      type: 'string',
      message: 'Author',
    },
    e2e: {
      type: 'confirm',
      message: 'Setup e2e tests with Nightwatch?',
    },
  },
  filters: {
    'test/e2e/**/*': 'e2e',
  },
  complete: function(data, { chalk }) {
    const green = chalk.green
    sortDependencies(data, green)
    printMessage(data, chalk)
  },
}
