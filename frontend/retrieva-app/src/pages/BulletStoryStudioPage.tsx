import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function BulletStoryStudioPage() {
  return (
    <>
      <Navbar />
      <main>
        <h1>Make your work speak for you</h1>
        <p></p>
        <Link to="/your-work">Back to your work</Link>
      </main>
    </>
  )
}