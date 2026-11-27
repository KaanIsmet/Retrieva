import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import { useState } from 'react'
import DocumentIcon from '../assets/Document.svg'




export default function YourWorkPage() {

  const [githubConnected, setGithubConnected] = useState(true)
  const [resumeAdded, setResumeAdded] = useState(true)
  const githubData = [
    {
      githubName: 'maya-ai',
      repos: [
        {
          projectName: 'rag-system',
          evidenceFound: 'A RAG system for the Maya AI platform',
          status: 'Ready',
        },
        {
          projectName: 'maya-ai-website',
          evidenceFound: 'The Maya AI website',
          status: 'Ready',
        },
        {
          projectName: 'maya-ai-api',
          evidenceFound: 'The Maya AI API',
          status: 'Ready',
        },
        {
          projectName: 'maya-ai-sdk',
          evidenceFound: 'The Maya AI SDK',
          status: 'Ready',
        },
      ]
    }
  ]

  const resumeData = [
    {
      resumeName: 'Maya-Chen-Resume.pdf',
      resumeUrl: 'https://www.linkedin.com/in/john-doe-1234567890',
    }
  ]

  const DataTable = ({data}: {data: {projectName: string; evidenceFound: string; status: string}[]}) => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

    const handleToggle = (index: number) => {
      setSelectedIndex(selectedIndex === index ? null : index)
    }

    return (
      <table className='w-full'>
        <thead className=''>
          <tr>
            <th>PROJECT</th>
            <th>EVIDENCE FOUND</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>
                <input type="checkbox" checked={selectedIndex === index} onChange={() => handleToggle(index)} className='w-4 h-4 cursor-pointer' />
              </td>
              <td>{item.projectName}</td>
              <td>{item.evidenceFound}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }

  
  const handleUploadResume = () => {

  }

  const handleRefreshProjects = () => {
    console.log('Refresh projects')
  }


  return (
    <main>
      <Sidebar />
      <div className='flex flex-col gap-4 mx-8 my-8'>
        <h1 className='text-2xl font-bold'>Start with what you've built.</h1>
        <p className='text-gray-500'>Class projects, side projects, unfinished ideas. There's a story in your work.</p>
        <div className="grid w-full grid-cols-1 items-center gap-2 rounded-lg bg-[#F4F2EA] px-4 py-2.5 text-[13px] text-[#1c2422] sm:grid-cols-3">
          <span className="inline-flex items-center gap-2">
            {githubConnected ? <StatusCheck /> : <StatusDash />}
            {githubConnected ? 'GitHub connected' : 'Connect your GitHub'}
          </span>
          <span className="inline-flex items-center gap-2 sm:justify-center">
            {resumeAdded ? <StatusCheck /> : <StatusDash />}
            {resumeAdded ? 'Resume added' : 'Add your resume'}
          </span>
          <span className="font-semibold sm:justify-self-end">03 Choose your project</span>
        </div>
        <div className='flex gap-4'>
          <div className='rounded-lg bg-[#F4F2EA] px-4 py-2.5 text-[13px] text-[#1c2422] border border-[#D6D3CA]'>
            <h2 className='text-lg font-bold'>Your projects</h2>
            <span className="text-gray-500">
              {githubConnected ? `Connected · @${githubData[0].githubName}` : 'Connect your GitHub'}
            </span>
            <p className='text-sm font-semibold'>Your project history, not just a project title.</p>
            <p className='text-sm'>Only the repositories you select are used.
            Manage access or disconnect whenever you want.</p>
            <Link to='/github-connect' className='text-sm'>Manage connection ↗</Link>
          </div>
          <div className='flex flex-col gap-4'>
            <div className='rounded-lg px-4 py-2.5 text-[13px] text-[#1c2422] border border-[#D6D3CA]'>
              <h2 className='text-lg font-bold'>Your resume</h2>
              <span className="text-gray-500">
                {resumeAdded ? `Added · ${resumeData[0].resumeName}` : 'Add your resume'}
              </span>
              <div className='flex items-center gap-2 border border-dashed border-[#D6D3CA] rounded-md p-2 my-4'>
                <img src={DocumentIcon} alt='Document Icon' />
                <p className='text-sm'>{resumeData[0].resumeName}</p>
                <p>Uploaded · PDF · 218 KB</p> {/* TODO: Add file size */}
              </div>
              <p>Drop a file here or <span className='text-blue-500'>browse</span></p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='flex gap-8 justify-between'>
          <h2 className='text-lg font-bold'>Your projects</h2>
          <button className='text-sm' onClick={handleRefreshProjects}>Refresh projects ↗</button>
        </div>
        <p>A good project should be a mix of complexity and relevance to your interests.</p>
      </div>
      <div className='border border-[#D6D3CA] rounded-lg p-4 my-4'>
        <DataTable data={githubData[0].repos} />
      </div>
      <div className='bg-[#70B3AB] text-white! rounded-lg p-4 my-4 flex justify-between items-center'>
        <div className='flex flex-col gap-2'>
          <h2 className='text-lg font-bold'>One project. A stronger starting point.</h2>
          <p className='text-sm text-gray-500'>A good project should be a mix of complexity and relevance to your interests.</p>
        </div>
        <Link to='/studio' className='text-sm font-semibold bg-black text-white rounded-md px-4 py-2'>Build my bullets & story →</Link>

      </div>
    </main>
  )
}

function StatusCheck() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" className="shrink-0">
      <path
        d="M3 7.2 5.6 9.8 11 4.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function StatusDash() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" className="shrink-0 text-[#9aa39f]">
      <circle cx="7" cy="7" r="5" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}