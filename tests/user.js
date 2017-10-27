const testFunctions = require('../testSupport/testFunctions')
const testData = require('../testSupport/testData')

module.exports = {
    beforeEach: browser => {
        browser.url('http://google.com')
    },
    after: browser => {
        browser.end()
    }

}