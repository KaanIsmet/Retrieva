import Timing from './cards/Timing'
import Directions from './cards/Directions'
import Decisions from './cards/Decisions'
import Connections from './cards/Connections'
import { useState } from 'react'

export function LandingPageContent_firstSection() {
  return (
    <>
      <div className='flex flex-col gap-4'>
        <h1 className='text-2xl font-bold'>A clearer story, in three steps.</h1>
      <ul className='flex flex-col gap-4'>
        <li>
          <h2 className='text-lg font-bold'>Bring the proof</h2>
          <p className='text-gray-500'>
          Connect GitHub and upload your resume. Choose the repositories you want to use.
          </p>
        </li>
        <li>
          <h2 className='text-lg font-bold'>Find what you actually did</h2>
          <p className='text-gray-500'>
          Retrieva looks across READMEs, code, commits, and notebooks for evidence of your work.
          </p>
        </li>
        <li>
          <h2 className='text-lg font-bold'>Make it career-ready</h2>
          <p className='text-gray-500'>
          Create cited bullets and interview stories. Review the sources, then make it yours.
          </p>
        </li>
      </ul>
      </div>
    </>
  );
}

export function LandingPageContent_secondSection() {
  return (
    <>
      <h2 className='text-2xl font-bold py-8'>You shouldn’t need an insider
      to know where to start.</h2>
      <div className='flex gap-4'>
        <Timing />
        <Connections />
        <Directions />
        <Decisions />
        
      </div>
    </>
  );
}

export function LandingPageContent_thirdSection() {
  const faqs = [
    {
      question: "How do I get started with Retrieva?",
      answer: "Connect GitHub and upload your resume. Then choose the repositories you want to use.",
    },
    {
      question: "Will Retrieva invent results or achievements?",
      answer: "No. Every claim is backed by actual code or commits from your repositories.",
    },
    {
      question: "Can I choose which repositories to use?",
      answer: "Yes. You can select exactly which repositories Retrieva should analyze.",
    },
    {
      question: "Is this a job board or a mock interview tool?",
      answer: "Neither. Retrieva turns your real work into clear, evidence-backed resume bullets and interview stories.",
    },
  ];
  const [ openIndex, setOpenIndex ] = useState<number | null>(0)
  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      <div className='flex justify-center'>
        <div>
          <h2 className='text-2xl font-bold'>Good questions. Straight answers.</h2>
          <p className='text-gray-500'>Clarity is kind of our thing.</p>
        </div>
        <div>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div key={index}>
                <button
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-medium text-gray-900">
                    {faq.question}
                  </span>
                  <span className="ml-6 flex h-7 w-7 items-center justify-center text-gray-500">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
    
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 pr-12 text-sm text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </>
  );
}