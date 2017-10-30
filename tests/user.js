const testFunctions = require('../testSupport/testFunctions')
const testData = require('../testSupport/testData')

module.exports = {
    beforeEach: browser => {
        browser.url('http://192.168.11.79:8080/#/app/home')
            
    },
    after: browser => {
        browser.end()
    },
    //'Testing the deals section of the app' per the closing criteria, on terms of "deals," the user should be able to see the featured deal on the home page
    //see the deal categories and See deals in each category. The User should also be able to select the a vendor and the deal for that vendor, as well
    //as the discripion its website,location, hours and phone number are populated. After all this you should be able to redeem the deal.
    'test': browser => {
        browser
            .pause(30000)
            .clickByText('h5','devmtn.com')
            .pause(10000)
    }
    //'test to see if vendors can be added, removed and edited' Per the closing criteria when on the admin portal, the admin should be able to add, remove and edit 
    //vendors in the data base. This test will test each aspect of said functionality as well is if the infomration is saved successfuly 

}