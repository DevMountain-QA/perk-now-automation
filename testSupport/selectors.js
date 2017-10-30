module.exports = {
    user: {
        home: {
            categories: {
                food: '',
                concierge: '',
                fun: '',
                service: ''
            },
            featuredDeal: ''
        },
        vendors: {
            vendorListItem: 'div[class=vendors-list]'



        },
        dealRedemption: {
            stuff: 'michael made a change'
        },
        login: {
            emailInput: '',
            passwordInput: '',
            signInButton: '',
            createAccountLink: '',
            forgotPasswordLink: ''
        },
        accountCreation: {
            haveWorkEmail: {
                yesButton:'button[ng-click="goToSignupEmail()"',
                noCodebutton:'button[ng-click="goToSignupCode()"',
                privacyPolicy:'a[class=legalLinks]',
                termAndConditions:'a[ui-sref=tos]'                
            },
            yesEmailScreen: {
                workEmailField:'input[type=email]'
            },
            noCodeScreen: {
                codeBox1:'input[ng-model="user.company_code1"]',
                codeBox2:'input[ng-model="user.company_code2"]',
                codeBox3:'input[ng-model="user.company_code3"]',
                codeBox4:'input[ng-model="user.company_code4"]',
                personalEmail:'input[type=email]'
            },
            insertInfoScreen:{
                firstName:'input[placeholder=First Name]',
                lastName:'input[placeholder=Last Name]',
                password:'input[placeholder=Password]',
                showPassword:'input[type=checkbox]'
            },
            zipCode:{
                enterZip:'input[type=number]',
                getPerksButton:'button[id=account-create]'
            },
            progressBar: {
                backButtonHome:'div[class=backArrow button icon-left ion-chevron-left button-clear]',
                backbutton:'div[id=backArrowLeft]',
                forwardButton:'div[id=backArrowRight]',
                firstProgressButton:'a[ui-sref="signupLanding"]',
                //secondProgressButton:'', //not enough info to pull selecor
                thirdProgressButton:'a[ui-sref="signupInfo"]',
                fourthProgressButton:'a[ui-sref="signupZip"]'
            }

        },
        menuBar: {
            menuButton: '',
            referAVendor: {
                tag: 'a[class=item-content]',
                text: 'Refer a Vendor'
            }
        }
    },
    admin: {
        menuBar: {

        },
        companyScreen: {
            companyNameTag: 'td'
        },
        userScreen: {

        },
        vendorScreen: {

        },
        dealScreen: {

        },
        transactionScreen: {
            transactionTag:'td',
            transactionText1:'6',
            transactionText2:'15',
            transactionModifyScreen:{
                //there is a bug present, not allwoing you to view the individual transaction.
            }

        }
    }
}