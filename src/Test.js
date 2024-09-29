import {useState, useEffect} from "react";
const Test = () =>{
  const [progress, setProgress] = useState(0);
useEffect(()=>{
  let i = 0;
  const interval = setInterval(() =>{
    if( i <= 100){
      setProgress(i);
      i++;
    } else {
      clearInterval(interval)
    }
  }, 30)
  return () => clearInterval(interval);
},[])
    return(
      <>
{progress < 100 ? (
        <progress value={progress} max="100" className="w-100" /> // Display progress bar
      ) : (
        <p>Loading Complete!</p> // Display message when done
      )}      </>
    )
}
export default Test;
