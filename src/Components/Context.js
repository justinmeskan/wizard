import * as React from 'react'

const dummyContext = {
    meta: {
        step: 0,
        componentAmount: 6
    },
    transferDetails: {
        fromAccountNumber: '1234567890',
        amount: '12.89',
    },
    payeeDetails: {
        name: 'Justin',
        streetAddress: '911 firelane',
        unit: 'B',
        city: 'san francisco',
        state: 'california',
        zipcode: '94118',
    },
    payeeBankDetails: {
        routingNumber: '325070760',
        accountNumber: '0987654321',
    }
}

const defaultValue = {
    meta: {
        step: 0,
        componentAmount: 0
    },
    transferDetails: {
        fromAccountNumber: '',
        amount: '',
    },
    payeeDetails: {
        name: '',
        streetAddress: '',
        unit: '',
        city: '',
        state: '',
        zipcode: '',
    },
    payeeBankDetails: {
        routingNumber: '',
        accountNumber: '',
    }
}

const WizardContext = React.createContext()

function wizardReducer(state, action) {
    switch (action.type) {
        case 'BACK': {
            if(state.meta.step === 0) {
                return state
            } else {
                const update = {
                    meta: {
                        step: state.meta.step -= 1
                    }
                }
                return {
                    ...state,
                    update
                }
            }

        }
        case 'NEXT': {
            if(state.meta.step > state.meta.componentAmount) {
                return state
            } else {
                const update = {
                    meta: {
                        step: state.meta.step += 1
                    }
                }
                return {
                    ...state,
                    update
                }
            }

        }
        case 'NUMBER_OF_COMPONENTS': {
            const update = {
                meta: {
                    componentAmount: state.meta.componentAmount += action.payload
                }
            }
            return {
                ...state,
                update
            }
        }
        case 'SET_AMOUNT': {
            return {
                ...state,
                transferDetails: {
                    fromAccountNumber: state.transferDetails.fromAccountNumber,
                    amount: action.payload
                }
            }
        }
        case 'SET_ACCOUNT': {
            return {
                ...state,
                transferDetails: {
                    fromAccountNumber: action.payload,
                    amount: state.transferDetails.amount
                }
            }
        }
        case 'SET_NAME': {
            return {
                ...state,
                payeeDetails: {
                    name: action.payload,
                    zipcode: state.payeeDetails.zipcode,
                    streetAddress: state.payeeDetails.streetAddress,
                    unit: state.payeeDetails.unit,
                    city: state.payeeDetails.city,
                    state: state.payeeDetails.state
                }
            }
        }
        case 'SET_STREET': {
            return {
                ...state,
                payeeDetails: {
                    name: state.payeeDetails.name,
                    zipcode: state.payeeDetails.zipcode,
                    streetAddress: action.payload,
                    unit: state.payeeDetails.unit,
                    city: state.payeeDetails.city,
                    state: state.payeeDetails.state
                }
            }
        }
        case 'SET_UNIT': {
            return {
                ...state,
                payeeDetails: {
                    name: state.payeeDetails.name,
                    zipcode: state.payeeDetails.zipcode,
                    streetAddress: state.payeeDetails.streetAddress,
                    unit: action.payload,
                    city: state.payeeDetails.city,
                    state: state.payeeDetails.state
                }
            }
        }
        case 'SET_CITY': {
            return {
                ...state,
                payeeDetails: {
                    name: state.payeeDetails.name,
                    zipcode: state.payeeDetails.zipcode,
                    streetAddress: state.payeeDetails.streetAddress,
                    unit: state.payeeDetails.unit,
                    city: action.payload,
                    state: state.payeeDetails.state
                }
            }
        }
        case 'SET_STATE': {
            return {
                ...state,
                payeeDetails: {
                    name: state.payeeDetails.name,
                    zipcode: state.payeeDetails.zipcode,
                    streetAddress: state.payeeDetails.streetAddress,
                    unit: state.payeeDetails.unit,
                    city: state.payeeDetails.city,
                    state: action.payload
                }
            }
        }
        case 'SET_ZIP': {
            return {
                ...state,
                payeeDetails: {
                    name: state.payeeDetails.name,
                    zipcode: action.payload,
                    streetAddress: state.payeeDetails.streetAddress,
                    unit: state.payeeDetails.unit,
                    city: state.payeeDetails.city,
                    state: state.payeeDetails.state
                }
            }
        }
        case 'SET_MY_ACCOUNT': {
            return {
                ...state,
                payeeBankDetails: {
                    accountNumber: action.payload,
                    routingNumber: state.payeeBankDetails.routingNumber
                }
            }
        }
        case 'SET_ROUTE': {
            return {
                ...state,
                payeeBankDetails: {
                    accountNumber: state.payeeBankDetails.accountNumber,
                    routingNumber: action.payload
                }
            }
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

function WizardProvider({children}) {
    const [state, dispatch] = React.useReducer(wizardReducer,  defaultValue)
    const value = {state, dispatch}
    return <WizardContext.Provider value={value}>{children}</WizardContext.Provider>
}

function useWizard() {
    const context = React.useContext(WizardContext)
    if (context === undefined) {
        throw new Error('useWizard must be used within a WizardProvider')
    }
    return context
}

function TestWizardProvider({children}) {
    const [state, dispatch] = React.useReducer(wizardReducer,  dummyContext)
    const value = {state, dispatch}
    return <WizardContext.Provider value={value}>{children}</WizardContext.Provider>
}



export { WizardProvider, WizardContext, defaultValue, useWizard, TestWizardProvider, dummyContext }