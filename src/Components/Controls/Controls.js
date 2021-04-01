import React from 'react'
import './Controls.css'
import { useWizard } from '../Context'
import { OnComplete } from '../../Utils/onComplete'


function Controls(props) {
    const { dispatch, state } = useWizard()
    if(state.meta.step === state.meta.componentAmount - 1) {
        return (
            <span> </span>
        )
    } else if(state.meta.step === state.meta.componentAmount - 2) {
        return (
            <div className={'Controls_submit'}>
                <button data-test={'control_back'} onClick={(e) => {
                    dispatch({type: 'BACK'})
                }} type={'click'}>Back</button>
                <button data-test={'control_confirm'} onClick={(e) => {
                        dispatch({type: 'NEXT'})
                }} type={'click'}>Confirm
                </button>
            </div>
        )
    }
    return (
        <div className={'Controls'}>
            <button data-test={'real_control_back'} onClick={(e) => {
                dispatch({type: 'BACK'})
            }} type={'click'}>Back</button>
            <button data-test={'real_control_next'} onClick={(e) => {
                if(state.meta.componentAmount === 0) {
                    dispatch({type: 'NUMBER_OF_COMPONENTS', payload: props.len})
                }
                if(OnComplete(state.meta.step, state)) {
                    dispatch({type: 'NEXT'})
                }
                return state.meta.step
            }}  type={'click'}>Next</button>
        </div>
    )
}

export default Controls
