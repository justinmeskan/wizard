import React from 'react'
import ReactDOM from 'react-dom'
import Transactionwizard from './Components/Transactionwizard/Transactionwizard'
import { WizardProvider } from './Components/Context'

ReactDOM.render(
    <WizardProvider>
        <Transactionwizard />
    </WizardProvider>,
  document.getElementById('root')
)

