import { Link } from 'react-router-dom'
import { useState } from 'react'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Retrieva.svg'

export default function LoginPage() {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState('');
    const [ loading, setLoading ] = useState(false);
    const navigate = useNavigate();

  const handleLogin = async () => {
    setError('')
    setLoading(true)

    try {
        // TODO: Add login endpoint
        const response = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
        if (response.status === 200) {
            navigate('/')
        } else {
            setError('Invalid username or password')
        }
    } catch {
        setError('Invalid username or password')
    } finally {
        setLoading(false)
    }
  }

  return (
    <>
      <main className="max-w-none! w-full p-0!">
      
        <section className="grid min-h-screen w-full grid-cols-1 md:grid-cols-2">
          
          <div className="flex min-h-[40vh] flex-col justify-center bg-[#70B3AB] px-10 py-16 text-white md:min-h-screen md:px-16">
            <h1 className='text-2xl font-bold'><span className='text-white!'>r</span>etrieva</h1>
            <h1 className="text-white!">Your experience is enough. Pick up your story.</h1>
            <p className="mt-4 max-w-md text-lg text-white/90!">
            Your projects, your progress, your next step. It's all here when you're ready.
            </p>
            <h3 className="text-white! border-t border-white/20 pt-4">Source-backed, not inflated</h3>
            <p className="mt-4 text-white/90!">Every claim links to your work. Missing evidence
            becomes a question, never a fabricated metric.</p>
            <h3 className="text-white!">Support without a label</h3>
            <p className="mt-4 text-white/90!">First-gen self-identification is always optional.
            The guidance is here for you either way.</p>
          </div>
          <div className="flex min-h-[60vh] items-center justify-center bg-white px-8 py-16 md:min-h-screen">
            <form
              className="w-full max-w-md space-y-4"
              onSubmit={(e) => {
                e.preventDefault()
                void handleLogin()
              }}
            >
              <div>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-1 w-full rounded-[var(--radius-sm)] border border-[var(--border-strong)] px-3 py-2"
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 w-full rounded-[var(--radius-sm)] border border-[var(--border-strong)] px-3 py-2"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-[var(--radius-sm)] bg-[var(--button-primary-bg)] px-4 py-2.5 text-sm font-medium text-white disabled:opacity-60"
              >
                {loading ? 'Loading...' : 'Login'}
              </button>
              {error ? <p className="text-sm text-red-600">{error}</p> : null}
              <p className="text-sm">
                Don&apos;t have an account? <Link to="/signup">Sign up</Link>
              </p>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
