const testFunctions = require('../testSupport/testFunctions')
const testData = require('../testSupport/testData')

module.exports = {
    beforeEach: browser => {
        browser.url('http://192.168.11.79:8080/#/app/home')
            .acceptAlert()
            .resizeWindow(800, 1200)
            .pause(500)
    },
    afterEach: (browser, done) => {
        browser.end()
        setTimeout(() => {
            done()
        }, 500)
    },
    'Create account email': (browser) => {

    },
    'Create account code': (browser) => {

    },
    'Sign In1': (browser) => {
        testFunctions.signIn({ username: testData.signIn.username1, password: testData.signIn.password1 }, browser)
    },
    'Sign In 2': (browser) => {
        testFunctions.signIn({ username: testData.signIn.username2, password: testData.signIn.password2 }, browser)
    },
    'Redeem Deal': (browser) => {
        testFunctions.signIn({ username: testData.signIn.username, password: testData.signIn.password }, browser)

    },
    'Verify User Menu': (browser) => {
        testFunctions.signIn({ username: testData.signIn.username, password: testData.signIn.password }, browser)

    }

}