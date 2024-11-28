import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TeamLayout from "./pages/Layout";
import List from "./pages/team/List";
import TeamDetails from "./pages/team/Details";
import ErrorPage from "./pages/ErrorPage";


function App() {

  return (
    <Router>
      <Routes>
        
        {/* Team Route */}
        <Route path="/" element={<TeamLayout />}>
          <Route index element={<List />} />
          <Route path="/team/:id" exact element={<TeamDetails />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}

export default App
