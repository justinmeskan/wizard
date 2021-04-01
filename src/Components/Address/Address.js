import React, {useState} from 'react'
import './Address.css'
import { useWizard } from '../Context'

function Address() {
    const { dispatch, state }= useWizard()
    const [name, setName] = useState(state.payeeDetails.name)
    const [street, setStreet] = useState(state.payeeDetails.streetAddress)
    const [unit, setUnit] = useState(state.payeeDetails.unit)
    const [city, setCity] = useState(state.payeeDetails.city)
    const [userState, setUserState] = useState(state.payeeDetails.state)
    const [zip, setZip] = useState(state.payeeDetails.zipcode)

    return (
        <div className={'Address'}>
            <h4>Enter Address</h4>
            <table className={'table'}>
                <tbody>
                    <tr className={"tr"}>
                        <td className={"td"}>
                            Name:
                        </td>
                        <td className={"td"}>
                            <input data-test={'input_name'} autoComplete={'false1'} value={name} onChange={(e) => {
                                setName(e.target.value)
                                dispatch({type: 'SET_NAME', payload: e.target.value})
                            }}/>
                        </td>
                    </tr>
                    <tr className={"tr"}>
                        <td className={"td"}>
                            Street:
                        </td>
                        <td className={"td"}>
                            <input data-test={'input'} autoComplete={'false2'} value={street} onChange={(e) => {
                                setStreet(e.target.value)
                                dispatch({type: 'SET_STREET', payload: e.target.value})
                            }}/>
                        </td>
                    </tr>
                    <tr className={"tr"}>
                        <td className={"td"}>
                            Unit:
                        </td>
                        <td className={"td"}>
                            <input data-test={'input'} autoComplete={'false3'} value={unit} onChange={(e) => {
                                setUnit(e.target.value)
                                dispatch({type: 'SET_UNIT', payload: e.target.value})
                            }}/>
                        </td>
                    </tr>
                    <tr className={"tr"}>
                        <td className={"td"}>
                            City:
                        </td>
                        <td className={"td"}>
                            <input data-test={'input'} autoComplete={'false4'} value={city} onChange={(e) => {
                                setCity(e.target.value)
                                dispatch({type: 'SET_CITY', payload: e.target.value})
                            }}/>
                        </td>
                    </tr>
                    <tr className={"tr"}>
                        <td className={"td"}>
                            State:
                        </td>
                        <td className={"td"}>
                            <input data-test={'input'} autoComplete={'false5'} value={userState} onChange={(e) => {
                                setUserState(e.target.value)
                                dispatch({type: 'SET_STATE', payload: e.target.value})
                            }}/>
                        </td>
                    </tr>
                    <tr className={"tr"}>
                        <td className={"td"}>
                            Zip:
                        </td>
                        <td className={"td"}>
                            <input data-test={'input'} autoComplete={'false6'} value={zip} onChange={(e) => {
                                setZip(e.target.value)
                                dispatch({type: 'SET_ZIP', payload: e.target.value})
                            }}/>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default Address
