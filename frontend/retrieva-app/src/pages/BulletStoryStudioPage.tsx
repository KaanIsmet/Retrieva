import { Link } from 'react-router-dom'
import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import arrow from '../assets/arrow.svg'
import Source from '../components/Source'

function Dropdown({
  options,
  value,
  onChange,
}: {
  options: string[]
  value: string
  onChange: (value: string) => void
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative w-full">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="flex w-full items-center justify-between px-2 py-1 text-left text-sm text-[#1c2422]"
      >
        {value}
        <span aria-hidden="true" className="text-[#6d7c78]">▾</span>
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 z-10 mt-1 w-full rounded-md border border-[#E4E1D8] bg-white p-1 shadow-[var(--shadow)]">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => {
                onChange(option)
                setIsOpen(false)
              }}
              className="w-full rounded px-3 py-2 text-left text-sm hover:bg-[#F4F2EA]"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default function BulletStoryStudioPage() {
  const draftData = [
    {
      draftName: 'campus-feedback',
      bullets: [
        {
          bullet: 'Built a text-classification pipeline with TF-IDF and logistic regression in Python.',
          source: '[1] src/train.py:18-42',
        },
        {
          bullet: 'Evaluated held-out predictions with an accuracy score and a confusion matrix.',
          source: '[2] baseline.ipynb · cells 8-10',
        },
      ],
    },
    {
      draftName: 'course-planner',
      bullets: [
        {
          bullet: 'Built a course planner that suggests schedules from degree requirements and completed classes.',
          source: '[1] src/planner.py:12-40',
        },
      ],
    },
  ]

  const roleData = [
    { roleName: 'Target role: Data science intern', description: 'Data science internship' },
    { roleName: 'Target role: Software engineer', description: 'Software engineering' },
  ]

  const starData = [
    {
      situation: 'Situation',
      task: 'Task',
      action: 'Action',
      result: 'Result',
    },
    {
      situation: 'Situation',
      task: 'Task',
      action: 'Action',
      result: 'Result',
    },
    {
      situation: 'Situation',
      task: 'Task',
      action: 'Action',
      result: 'Result',
    },
  ]
  const [selectedDraft, setSelectedDraft] = useState(draftData[0].draftName)
  const [selectedRole, setSelectedRole] = useState(roleData[0].roleName)
  const [savedBullets, setSavedBullets] = useState<string[]>([])
  const [copiedSource, setCopiedSource] = useState<string | null>(null)

  const activeDraft = draftData.find((draft) => draft.draftName === selectedDraft) ?? draftData[0]

  const handleCopy = async (text: string, source: string) => {
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      // Clipboard can be blocked outside a secure user gesture.
    }
    setCopiedSource(source)
  }

  const handleSave = (source: string) => {
    setSavedBullets((current) =>
      current.includes(source) ? current.filter((item) => item !== source) : [...current, source],
    )
  }

  return (
    <>
      
      <main className="ml-96! mr-0! w-[calc(100%-24rem)]! max-w-none!">
        <Sidebar />
        <div className="flex justify-between gap-4">
          <div className="w-3/4">
          <h1>Make your work speak for you</h1>
          <p>A first draft grounded in your project. You have the final word.</p>
          <div className="grid w-full grid-cols-1 items-center rounded-lg border border-[#E4E1D8] bg-[#F7F6F1] sm:grid-cols-2">
            <Dropdown
              options={draftData.map((draft) => draft.draftName)}
              value={selectedDraft}
              onChange={setSelectedDraft}
            />
            <Dropdown
              options={roleData.map((role) => role.roleName)}
              value={selectedRole}
              onChange={setSelectedRole}
            />
          </div>
          <Link to="/your-work" className="text-sm text-[#5c6b66]">Back to your work</Link>
          <section className="mt-8">
            <div className="mb-4 flex items-baseline justify-between gap-4">
              <h2 className="text-xl">Resume bullets</h2>
              <p className="text-sm text-[#7a7a7a]">
                {activeDraft.bullets.length} {activeDraft.bullets.length === 1 ? 'draft' : 'drafts'} · Review before using
              </p>
            </div>
            <ul className="flex flex-col gap-4">
              {activeDraft.bullets.map((bullet, index) => (
                <li
                  key={bullet.source}
                  className="rounded-xl border border-[#E6E2D8] bg-white px-5 py-5"
                >
                  <div className="text-xs tracking-wide text-[#8d8d8d]">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-[#1c2422]">
                    {bullet.bullet}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-md bg-[#F3F1E8] px-3 py-1.5 text-xs text-[#5f6a66]">
                      {bullet.source}
                    </span>
                    <div className="flex items-center gap-5 text-sm text-[#4d4d4d]">
                      <button
                        type="button"
                        onClick={() => handleCopy(bullet.bullet, bullet.source)}
                        className="hover:text-[#1c2422]"
                      >
                        {copiedSource === bullet.source ? 'Copied' : 'Copy'}
                      </button>
                      <button
                        type="button"
                        onClick={() => handleSave(bullet.source)}
                        className="hover:text-[#1c2422]"
                      >
                        {savedBullets.includes(bullet.source) ? 'Saved' : 'Save +'}
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div>
              <h2>Interview story · STAR starter</h2>
              <p>STAR = Situation, Task, Action, Result. Start with what we know.</p>
              <div className="grid grid-cols-2 gap-4 border border-[#E4E1D8] rounded-lg p-4">
                {starData.map((star) => (
                  <div className="border border-[#E4E1D8] rounded-lg p-4" key={star.situation}>
                    <h3>{star.situation}</h3>
                    <p>{star.task}</p>
                    <p>{star.action}</p>
                    <p>{star.result}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 mt-4">
                <textarea
                  placeholder="Ask for help, share your process, and write down what you've learned."
                  className="w-full border border-[#E4E1D8] rounded-lg p-2"
                />
                <button className="bg-[#1c2422] text-white rounded-lg p-2">
                  <img src={arrow} alt="arrow" className="w-6 h-6" />
                </button>
              </div>
            </div>
          
        </section>
        </div>
        <Source />
        </div>
      </main>
    </>
  )
}