import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "@/components/navbar"
import Home from "@/pages/home"
import NotFound from "@/pages/not-found"
// @ts-expect-error — JS component from react-bits, no type declarations
import LightRays from "@/components/LightRays"

const App = () => {
  return (
    <Router>
      {/* Fixed fullscreen background — stays in place while content scrolls */}
      <div className="fixed inset-0 z-0">
        <LightRays
          raysColor="#ffffff"
          raysSpeed={0.4}
          lightSpread={1.2}
          rayLength={2.5}
          fadeDistance={1.2}
          followMouse
          mouseInfluence={0.08}
        />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
