module.exports = {
    signIn: {

    },
    accountCreation: {
        goodData: {
            account1: {
                haveWorkEmail: 'Yes',
                workEmail: 'tjbob@devmountain.com',
                firstname: 'TJ',
                lastname: 'Bob',
                password: 'whatever',
                zipCode: '48568'
            },
            account2: {
                haveWorkEmail: 'No',
                workCode: 'code',
                firstname: 'Josephine',
                lastname: 'Loveless',
                password: 'whatever',
                zipCode: '84111'
            }
        },
        badData: {
            account1B: {
                haveWorkEmail: 'Yes',
                workEmail: 'tjbob@juno.com',
                firstname: 'TJ',
                lastname: 'Bob',
                password: 'test1Fail',
                zipCode: '84111'
            },
            account2B: {
                haveWorkEmail: 'No',
                workCode: '4312',
                firstname: 'tj',
                lastname: 'bobby',
                password: 'test2Fail',
                zipCode: '84100'

            },
        }


    },
    deals: {
        category: {
            fun: {
                deal1: {
                    title: '',
                    description: '',
                    email: ''
                }
            },
            food: {

            }
        }
    }
}