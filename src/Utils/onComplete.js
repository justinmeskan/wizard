import { cities } from './cities'
import { states } from './states'

import { ChecksumTotal } from "./Checksum";

export function OnComplete(step, state) {
    if(step === 0) {
        let amountValid = false
        let accountValid = false
        if(state.transferDetails.fromAccountNumber.length === 10) {
            if(!isNaN(state.transferDetails.fromAccountNumber)) {
                accountValid = true
            }
        }
        if(!isNaN(parseFloat(state.transferDetails.amount))) {
            amountValid = true
        }
        if(!amountValid) {
            alert('Check the AmountValid field')
        } else if(!accountValid) {
            alert('Check the AccountValid field')
        }
        return amountValid && accountValid;
    }
    if(step === 1) {
        let name = false
        let city = false
        let userState = false
        let zip = false
        if(state.payeeDetails.name.length < 50) {
            const letterVal = state.payeeDetails.name.split('').reduce((acc, item) => {
                if(['1','2','3','4','5','6','7','8','9','0'].indexOf(item) === -1) {
                    return acc + item
                } else {
                    return acc - item
                }
            })
            if(letterVal.length === state.payeeDetails.name.length) {
                name = true
            }
        }

       states.forEach(item => {
           if(item.toLowerCase() === state.payeeDetails.state.toLowerCase()) {
               userState = true
           }
       })

        cities.forEach(item => {
            if(item.toLowerCase() === state.payeeDetails.city.toLowerCase()) {
               city = true
           }
        })

        if(!isNaN(parseInt(state.payeeDetails.zipcode)) && state.payeeDetails.zipcode.length === 5) {
            zip = true
        }
        if(!name) {
            alert('Check the Name field')
        } else if(!userState) {
            alert('Check the State field')
        } else if(!city) {
            alert('Check the City field')
        }else if(!zip) {
            alert('Check the Zip field')
        }
        return name && userState && city && zip
    }

    if(step === 2) {
        let accountValid = false
        let routing = false
        if (state.payeeBankDetails.accountNumber.length === 10) {
            if (!isNaN(state.payeeBankDetails.accountNumber)) {
                accountValid = true
            }
        }
        if(ChecksumTotal(state.payeeBankDetails.routingNumber)) {
            routing = true
        }

        if(!accountValid) {
            alert('Check the AccountValid field')
        } else if(!routing) {
            alert('Check the Routing field')
        }
        return accountValid && routing
    }
    return true
}
