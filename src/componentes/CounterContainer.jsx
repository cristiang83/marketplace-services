import { useEffect, useState } from "react";
import { SimpleCounter } from "./SimpleCounter";

export function CounterContainer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  return <SimpleCounter seconds={seconds} />;
}