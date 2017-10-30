const testFunctions = require('../testSupport/testFunctions')
const testData = require('../testSupport/testData')

module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:8080/#/admin/companies')
            
    },
    after: browser => {
        browser.end()
    },
    'test': browser => {
        browser
            .pause(30000)
            .clickByText('h5','devmtn.com')
            .pause(10000)
    }

}