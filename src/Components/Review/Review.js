import React from 'react'
import './Review.css'
import { useWizard } from '../Context'

function Review() {
    const { state }= useWizard()
    return (
        <div className={'Review'}>
            <h4>Review Information</h4>
            <table className={'table'}>
                <tbody>
                    <tr className={"tr"}>
                        <td className={"td"}>
                            <h4>Transfer Details</h4>
                        </td>
                    </tr>
                    <tr className={"tr"}>
                        <td className={"td"}>
                            Account Number:
                        </td>
                        <td className={"td"}>
                            {state.transferDetails.fromAccountNumber}
                        </td>
                    </tr>
                    <tr className={"tr"}>
                        <td className={"td"}>
                            Transfer Amount:
                        </td>
                        <td className={"td"}>
                            {state.transferDetails.amount}
                        </td>
                    </tr>
                    <tr className={"tr"}>
                        <td className={"td"}>
                            <h4> Payee Details</h4>
                        </td>
                    </tr>
                    <tr className={"tr"}>
                        <td className={"td"}>
                            Name:
                        </td>
                        <td className={"td"}>
                            {state.payeeDetails.name}
                        </td>
                    </tr>
                    <tr className={"tr"}>
                        <td className={"td"}>
                            Street:
                        </td>
                        <td className={"td"}>
                            {state.payeeDetails.streetAddress}
                        </td>
                    </tr>
                    <tr className={"tr"}>
                        <td className={"td"}>
                            Unit:
                        </td>
                        <td className={"td"}>
                            {state.payeeDetails.unit}
                        </td>
                    </tr>
                    <tr className={"tr"}>
                        <td className={"td"}>
                            City:
                        </td>
                        <td className={"td"}>
                            {state.payeeDetails.city}
                        </td>
                    </tr>
                    <tr className={"tr"}>
                        <td className={"td"}>
                            State:
                        </td>
                        <td className={"td"}>
                            {state.payeeDetails.state}
                        </td>
                    </tr>
                    <tr className={"tr"}>
                        <td className={"td"}>
                            Zipcode:
                        </td>
                        <td className={"td"}>
                            {state.payeeDetails.zipcode}
                        </td>
                    </tr>
                    <tr className={"tr"}>
                        <td className={"td"}>
                            <h4> Payee Details</h4>
                        </td>
                    </tr>
                    <tr className={"tr"}>
                        <td className={"td"}>
                            Routing Number:
                        </td>
                        <td className={"td"}>
                            {state.payeeBankDetails.routingNumber}
                        </td>
                    </tr>
                    <tr className={"tr"}>
                        <td className={"td"}>
                            Account Number:
                        </td>
                        <td className={"td"}>
                            {state.payeeBankDetails.accountNumber}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Review
