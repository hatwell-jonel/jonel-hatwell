import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Header"
function App() {
  

  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" index  element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
