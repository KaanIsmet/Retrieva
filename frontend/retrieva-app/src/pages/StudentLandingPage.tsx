import { Link } from 'react-router-dom'
import GithubIcon from '../assets/Github.svg'
import FeatureShowcase from '../components/FeatureShowcase'
import Navbar from '../components/Navbar'
import { LandingPageContent_firstSection, LandingPageContent_secondSection, LandingPageContent_thirdSection } from '../components/LandingPageContent'
import { FeatureShowcase_firstSection } from '../components/FeatureShowcase'
import StartingPoint from '../components/cards/StartingPoint'
import Footer from '../components/Footer'

export default function StudentLandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h1>You did the work. Now tell your story.</h1>
            <p className="text-lg">
              Turn your GitHub projects into cited resume bullets and interview
              stories. Learn the recruiting rules no one thought to explain.
            </p>
            <div className='flex items-center gap-2 justify-start'>
              <Link
                to="/github"
                className="flex h-10 w-2xs items-center justify-center gap-2 rounded-sm bg-black py-2 text-white no-underline hover:bg-[var(--button-primary-hover)] hover:text-white"
              >
                Connect your GitHub
                <img src={GithubIcon} alt="" className="h-4 w-4" />
              </Link>
              <Link to="/example" className='text-sm text-gray-500 rounded-sm bg-gray-100 px-2 py-2 w-2xs h-10 justify-center items-center outline-2 outline-gray-300'>See an example</Link>
            </div>
          </div>
          <FeatureShowcase />
          <div className="flex w-full flex-col items-start gap-8 lg:col-span-2 lg:flex-row lg:items-center lg:gap-16 py-16">
            <div className="w-full max-w-md shrink-0">
              <FeatureShowcase_firstSection />
            </div>
            <div className="min-w-0 w-full flex-1">
              <LandingPageContent_firstSection />
            </div>
            
          </div>
          
        </section>
        <div className="w-full">
              <LandingPageContent_secondSection />
        </div>
        <div className='py-8'>
            <LandingPageContent_thirdSection />
        </div>
        <div className='py-8 flex items-center justify-center'>
            <StartingPoint />
        </div>
        <Footer />
      </main>
    </>
  );
}
