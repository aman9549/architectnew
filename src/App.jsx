
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Blog from "./pages/blog/Blog"
import Project from "./pages/projects/Project"
import Services from "./pages/services/Services"
import Navbar from './components/navbar/Navbar'
import Footer from "./components/Footer"
import ScrollTop from "./components/ScrollTop"
import { Blank } from "./components/Blank"

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <ScrollTop />
      <Navbar />
      <Routes>
      <Route index element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='blog' element={<Blog/>} />
      <Route path='projects' element={<Project/>} />
      <Route path='services' element={<Services/>} />
      <Route path="/blank" element={<Blank />} />
      </Routes>
      <Footer />
      </BrowserRouter>

      <div className="am"></div>
    </div>
  )
}

export default App
