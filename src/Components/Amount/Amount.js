import React, { useState } from 'react'
import './Amount.css'
import { useWizard } from '../Context'

function Amount() {
    const { dispatch, state }= useWizard()
    const [amount, setAmount] = useState(state.transferDetails.amount)
    const [account, setAccount] = useState(state.transferDetails.fromAccountNumber)
    return (
        <div className={'Amount'}>
            <h4 data-test={'enter_amount'}>Enter Amount</h4>
            <table className={'table'}>
                <tbody>
                <tr className={"tr"}>
                    <td className={"td_key"}>
                        Enter Amount:
                    </td>
                    <td className={"td"}>
                        <input data-test={'input'} value={amount} onChange={(e) => {
                            setAmount(e.target.value)
                            dispatch({type: 'SET_AMOUNT', payload: e.target.value})
                        }}/>
                    </td>
                </tr>
                <tr className={"tr"}>
                    <td className={"td_key"}>
                        Enter Senders Account:
                    </td>
                    <td className={"td"}>
                        <input data-test={'input'} value={account} onChange={(e) => {
                            setAccount(e.target.value)
                            dispatch({type: 'SET_ACCOUNT', payload: e.target.value})
                        }}/>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Amount
