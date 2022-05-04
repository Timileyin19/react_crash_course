import React, { useState, useEffect } from "react";

const App = () => {
  const [time, setTime] = useState(0);


  const tick =  () => {
    setTime(prevState => (prevState + 1 ))
  }


  useEffect(() => {
    setInterval(() => tick(), 1000);
  }, [])




  return (
      <div>
        Seconds: { time }
      </div>

  );
}

export default App;
