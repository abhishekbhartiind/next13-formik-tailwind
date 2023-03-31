import { TiTick } from "react-icons/ti"
import "./stepper.css"

interface IStepper {
  childrenArray: any[]
  currentStep: number
  completed: boolean
}

const Stepper = ({
  childrenArray = [],
  currentStep = 0,
  completed,
}: IStepper) => {
  return (
    <>
      <div className="flex justify-between">
        {childrenArray?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || completed) && "complete"
            } `}
          >
            <div className="step">
              {i + 1 < currentStep || completed ? <TiTick size={24} /> : i + 1}
            </div>
            <p className="text-gray-500">{step}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Stepper
