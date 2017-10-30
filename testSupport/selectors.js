module.exports = {
    user: {
        home: {
            categories: {
                food: 'div[class="category-icon food"]',
                concierge: 'div[class="category-icon concierge"]',
                fun: 'div[class="category-icon fun"]',
                service: 'div[class="category-icon service"]'
            },
            featuredDeal: 'h4[class="featured-footer-text ng-binding"]'
        },
        deals: {

        },
        dealRedemption: {
            deal: 'div[class=deal-header]',
            description : 'h4[id=modal-description]',
            address: 'a[class=center ng-binding]',
            hours: 'p[class=ng-binding]',
            website: 'span[id=browser-icon]',
            call: 'span[id=phone-icon]',
            redeemButton: '[id=redeem-button]',
            cancelButton: '[id=redeem-cancel]'
        },
        login: {
            emailInput: 'input[id="email"]',
            passwordInput: 'input[id=pass]',
            signInButton: 'p[class="forgotPassword"]',
            createAccountLink: 'a[id="signButton"]',
            forgotPasswordLink: 'a[ui-sref="forgot"]'
        },
        accountCreation: {

        },
        menuBar: {
            Catagories: {
                itemTag: 'a[class=item-content]',
                
                requestAPerk: 'request a perk',
                referAVendor: 'Refer a Vendor',
                ContactSupport: 'contact support',
                privacyPolicy: 'privacy policy',
                termsAndConditionsOfUse: 'terms and condtions of use',
                logout: 'logout'
            }
        }
    },
    admin: {
        menuBar: {
 
        },
        companyScreen: {
            companyNameTag: 'td',
            text: 'View Companies',

            companyNameTag: 'td',
            text:'Facebook',

            companyNameTag: 'td',
            text:'Microsoft',

            companyNameTag: 'td',
            text: 'Apple',

            companyNameTag:'td',
            text: 'Google'
        },
        userScreen: {

        },
        vendorScreen: {

        },
        dealScreen: {
            dealTag: 'td',
            text1: '2 20% off',
            text2: 'free food', 
            text3:'50% off',
        },
        transactionScreen: {

        }
    }
}