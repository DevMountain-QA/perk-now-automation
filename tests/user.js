const testFunctions = require('../testSupport/testFunctions')
const testData = require('../testSupport/testData')

module.exports = {
    beforeEach: browser => {
        browser.url('http://192.168.11.79:8080/#/app/home')
            
    },
    after: browser => {
        browser.end()
    },
    'Create account email' : (browser) => {

    },
    'Create account code' : (browser) => {

    },
    'Sign In' : (browser) => {

    },
    'Redeem Deal' : (browser) => {
        testFunctions.signIn({username: testData.signIn.username, password: testData.signIn.password}, browser)

    },
    'Verify User Menu' : (browser) => {
        testFunctions.signIn({username: testData.signIn.username, password: testData.signIn.password}, browser)
       

    }
    
}