import { Route, Routes } from "react-router-dom"
import useThemeContext from "./hooks/useThemeContext"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Header from "./components/Header"

function App() {
  const { theme } = useThemeContext()

  return (
    <>
      <div className="bg-secondary w-screen items-center overflow-x-hidden" data-theme={theme}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
