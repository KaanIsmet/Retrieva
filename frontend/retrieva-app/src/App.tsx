import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import BulletStoryStudioPage from './pages/BulletStoryStudioPage'
import StudentLandingPage from './pages/StudentLandingPage'
import YourWorkPage from './pages/YourWorkPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StudentLandingPage />} />
        <Route path="/your-work" element={<YourWorkPage />} />
        <Route path="/studio" element={<BulletStoryStudioPage />} />
      </Routes>
    </Router>
  )
}

export default App