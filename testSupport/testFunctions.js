const selectors = require('./selectors')

module.exports = {
    selectBusiness : (data, browser) => {
        browser.clickByText(selectors.admin.companyScreen.companyNameTag, data.companyName)
    }
}