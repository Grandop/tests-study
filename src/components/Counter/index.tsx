import { useState } from "react";
import { Button } from "../Button";

type CounterProps = {
  initialCount: number;
}

export const Counter = ({ initialCount }: CounterProps) => {
  const [count, setCount] = useState(initialCount)
  const [message, setMessage] = useState('Mensagem inicial')

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  const restart = () => {
    setCount(0)
  }

  const switchSigns = () => {
    setCount(count * -1)
  }

  return(
    <>
      <h1>Count: </h1>
      <h1 data-testid='countNumber'>{count}</h1>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={restart}>Restart</button>
        <button onClick={switchSigns}>Switch Signs</button>
      </div>
        <a>{message}</a>
      <div>
        <Button disabled={false} onClick={() => setMessage('Nova mensagem')}>
          Change Text
        </Button>
      </div>
    </>
  );
}