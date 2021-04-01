import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { TestWizardProvider, useWizard, WizardContext,  dummyContext } from '../Context'
import Transactionwizard from '../Transactionwizard/Transactionwizard'
import Progressbar from '../Progressbar/Progressbar'
import Header from '../Header/Header'
import Controls from '../Controls/Controls'
import Wizard from '../Wizard/Wizard'
import Amount from '../Amount/Amount'
import Address from '../Address/Address'
import Routing from '../Routing/Routing'
import Review from '../Review/Review'
import Confirm from '../Confirm/Confirm'
import Complete from '../Complete/Complete'
import React from "react";
const componentArray = [Amount, Address, Routing, Review, Confirm, Complete]

function ContextTester() {
    const {state} = useWizard()
    return (<div>{state}</div>)
}

test('renders learn react link', async () => {
    const{ container }  = render(
        <TestWizardProvider>
            <Transactionwizard>
                <ContextTester />
                <Header />
                <Progressbar />
                <Wizard components={componentArray} />
                <Controls len={componentArray.length}/>
            </Transactionwizard>
        </TestWizardProvider>
        );
    // let button = screen.getAllByRole('button', {'data-test':'real_control_next'})
    // let input = screen.getAllByRole('textbox', {'data-test':'input'})
    // let input_name = screen.getAllByRole('textbox', {'data-test':'input_name'})


    let input_name = screen.getAllByRole('textbox', {'data-test':'input_name'})
    console.log('input', input_name.value)

});
