import './Progressbar.css'
import { useWizard } from "../Context"

function Progressbar() {
    const WizardContext = useWizard()
    return (
        <div className="Progressbar">
            <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: (WizardContext.state.meta.step * 25) +'%'}} aria-valuenow="25" aria-valuemin="0"
                     aria-valuemax="100"> </div>
            </div>
        </div>
    )
}

export default Progressbar
