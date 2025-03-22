import { Route, Routes } from "react-router-dom"
import useThemeContext from "./hooks/useThemeContext"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"

function App() {
  const {theme} =useThemeContext()

  return (
    <>
      <div className="bg-secondary w-screen items-center overflow-x-hidden" data-theme={theme}>
        <Navbar />
        <Navbar behind/>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
