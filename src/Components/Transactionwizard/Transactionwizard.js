import './Transactionwizard.css'
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

function Transactionwizard() {
    const componentArray = [Amount, Address, Routing, Review, Confirm, Complete]
    return (
        <div className="TransactionWizard">
            <Header />
            <Progressbar />
            <Wizard components={componentArray} />
            <Controls len={componentArray.length}/>
        </div>
    )
}

export default Transactionwizard
