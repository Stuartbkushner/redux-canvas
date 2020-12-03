import React, { useRef } from "react"
import { useSelector } from "react-redux"
import { currentStrokeSelector } from "./selectors"

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const currentStroke = useSelector(currentStrokeSelector)
  const startDrawing = () => { }
  const endDrawing = () => { }
  const draw = () => { }

  return (
    <canvas
      onMouseDown={startDrawing}
      onMouseUp={endDrawing}
      onMouseOut={endDrawing}
      onMouseMove={draw}
      ref={canvasRef}
    />
  )
}

export default App
