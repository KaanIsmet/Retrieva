import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import BulletStoryStudioPage from './pages/BulletStoryStudioPage'
import StudentLandingPage from './pages/StudentLandingPage'
import YourWorkPage from './pages/YourWorkPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import RefferalGuide from './pages/RefferalGuide'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StudentLandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/your-work" element={<YourWorkPage />} />
        <Route path="/studio" element={<BulletStoryStudioPage />} />
        <Route path="/refferal-guide" element={<RefferalGuide />} />
      </Routes>
    </Router>
  )
}

export default App