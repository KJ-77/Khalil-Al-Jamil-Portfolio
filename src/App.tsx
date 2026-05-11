import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { MotionConfig } from "motion/react"
import Navbar from "@/components/navbar"
import Home from "@/pages/home"
import NotFound from "@/pages/not-found"
// @ts-expect-error — JS component from react-bits, no type declarations
import Beams from "@/components/Beams"

// Indigo accent for the Beams light — locked to match the indigo color palette
const BEAMS_LIGHT_COLOR = "#a5b4fc"

const App = () => {
  return (
    <Router>
      {/* Respects OS-level "prefers-reduced-motion" for all motion components */}
      <MotionConfig reducedMotion="user">
        {/* Fixed fullscreen Beams background — three.js, runs behind everything */}
        <div className="fixed inset-0 z-0">
          <Beams
            beamWidth={1.5}
            beamHeight={20}
            beamNumber={20}
            lightColor={BEAMS_LIGHT_COLOR}
            speed={2}
            noiseIntensity={0.75}
            scale={0.2}
            rotation={30}
          />
        </div>

        <div className="relative z-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </MotionConfig>
    </Router>
  )
}

export default App
