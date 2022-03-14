import Button from "./Button"
import Start from "./Start"

const Body = () => {
  return (
    <div className="card">
        <h3>
            For those who are bold enough to spend their crypto tokens recklessly...
        </h3>
        <Start />
        <Button color = "#20c744" text="join us"/>
        <h4>
            ...and as for the rest of you, sorry, we cannot accomodate you.
        </h4>
    </div>
  )
}

export default Body