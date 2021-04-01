import React, {useState} from 'react'
import './Routing.css'
import { useWizard } from '../Context'

function Routing() {
    const { dispatch, state }= useWizard()
    const [account, setAccount] = useState(state.payeeBankDetails.accountNumber)
    const [routing, setRouting] = useState(state.payeeBankDetails.routingNumber)
    return (
        <div className={'Routing'}>
            <h4>Enter Account and Routing Numbers</h4>
            <table className={'table'}>
                <tbody>
                <tr className={"tr"}>
                    <td className={"td_key"}>
                        Destination Account Number:
                    </td>
                    <td className={"td"}>
                        <input value={account} onChange={(e) => {
                            setAccount(e.target.value)
                            dispatch({type: 'SET_MY_ACCOUNT', payload: e.target.value})
                        }}/>
                    </td>
                </tr>
                <tr className={"tr"}>
                    <td className={"td_key"}>
                        Destination Routing Number:
                    </td>
                    <td className={"td"}>
                        <input value={routing} onChange={(e) => {
                            setRouting(e.target.value)
                            dispatch({type: 'SET_ROUTE', payload: e.target.value})
                        }}/>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Routing

