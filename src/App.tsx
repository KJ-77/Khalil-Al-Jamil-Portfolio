import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "@/components/navbar"
import Home from "@/pages/home"
import NotFound from "@/pages/not-found"

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
