import { Route, Routes } from "react-router-dom"
import useThemeContext from "./hooks/useThemeContext"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Header from "./components/Header"
import About from "./pages/About"
import Services from "./pages/Services"
import FAQ from "./pages/FAQ"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
import Blog from "./pages/Blog"

function App() {
  const { theme } = useThemeContext()

  return (
    <>
      <div className="bg-secondary w-screen items-center overflow-x-hidden" data-theme={theme}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
