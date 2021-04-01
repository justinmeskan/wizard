import React from 'react'
import './Wizard.css'
import { useWizard } from '../Context'

function Wizard(props) {
    const { state }= useWizard()
    if(props.components[state.meta.step]) {
        const CurrentForm = props.components[state.meta.step]
        return (
            <div className={'Wizard'}>
                <CurrentForm />
            </div>
        )
    }

}

export default Wizard
