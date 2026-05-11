import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { MotionConfig } from "motion/react"
import Navbar from "@/components/navbar"
import Home from "@/pages/home"
import NotFound from "@/pages/not-found"
import { VariantProvider } from "@/contexts/variant-context"
import { BackgroundProvider } from "@/contexts/background-context"
import { FontProvider } from "@/contexts/font-context"
import ActiveBackground from "@/components/backgrounds/active-background"

const App = () => {
  return (
    <Router>
      {/* Respects OS-level "prefers-reduced-motion" for all motion components */}
      <MotionConfig reducedMotion="user">
        <VariantProvider>
          <FontProvider>
            <BackgroundProvider>
              {/* Fixed fullscreen background — effect and color are independently selectable */}
              <div className="fixed inset-0 z-0">
                <ActiveBackground />
              </div>

              <div className="relative z-10">
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </BackgroundProvider>
          </FontProvider>
        </VariantProvider>
      </MotionConfig>
    </Router>
  )
}

export default App
