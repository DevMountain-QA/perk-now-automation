const selectors = require('./selectors')

module.exports = {
    signIn : (data, browser) => {
        let selectorSet = selectors.user.login
        browser
            .setValue(selectorSet.emailInput, data.username)
            .setValue(selectorSet.passwordInput, data.password)
            .click(selectorSet.signInButton)
            // .waitForElementNotPresent(selectorSet.signInButton, 2000)
            .waitForElementVisible(selectors.user.home.featuredDeal, 2000)
    },
    createAccountEmail : (data, browser) => {

    },
    createAccountCode : (data, browser) => {

    },
    redeemDeal : (data, browser) => {

    },
    verifyUserMenu : (data, browser) => {

    }
}