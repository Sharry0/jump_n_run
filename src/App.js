import './App.css';
import { useState, useRef, useEffect } from "react"

function App() {

  const testRef = useRef(null)
  let myCanvas
  let ctx
  const activateDraw = (ref) => {
    console.log('this is the canvas DOM element you want', ref)
    myCanvas = ref
    ctx = ref.getContext('2d')
    // draw stuff
    console.log(ctx)
    // console.log(testRef, "-")
  }
  const activateCanvas = (<canvas ref={(e) => console.log(e)}>

  </canvas>)
  
  // console.log("myCanvas", myCanvas.current)
  // useEffect(() => {
  //   // console.log("myCanvas", myCanvas.current)
  //   console.log("this da seasn",ctx)
  //   console.log('this is tnt', myCanvas)
  // }, [])
  
  return (
    <div className="App">

      <h1>Jump n Run</h1>
      { activateCanvas }
      <canvas id="canvas" ref={testRef}>
    
      </canvas>
     
    </div>
  );
}

export default App;
