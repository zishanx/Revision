import { useEffect, useState } from "react";

export default function App() {

  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      console.log(count);
        setCount(prev => prev + 1)
    }, 1000)

    return () => clearInterval(timer)
  },[])

  return <h1>{count}</h1>
}