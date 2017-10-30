const selectors = require('./selectors')

module.exports = {
    selectBusiness: (data, browser) => {
        browser.clickByText(selectors.user.menuBar.referAVendor.tag, selectors.user.menuBar.referAVendor.text)
    }
}