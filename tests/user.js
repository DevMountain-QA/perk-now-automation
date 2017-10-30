const testFunctions = require('../testSupport/testFunctions')
const testData = require('../testSupport/testData')

module.exports = {
    beforeEach: browser => {
        browser.url('http://192.168.11.79:8080/#/app/home')
            
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