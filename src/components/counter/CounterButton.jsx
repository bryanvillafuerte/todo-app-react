import './Counter.css'

export default function CounterButton({by, incrementMethod, decrementMethod}) {

  return (
    <div className="Counter">
      <div className="counter-buttons">
        <button className="decrement" onClick={() => decrementMethod(by)}>-{by}</button>
        <button className="increment" onClick={() => incrementMethod(by)}>+{by}</button>
      </div>
    </div>
  )
}

CounterButton.propTypes = {
  by: Number,
  incrementMethod: Function,
  decrementMethod: Function
}

CounterButton.defaultProps = {
  by: 5
}