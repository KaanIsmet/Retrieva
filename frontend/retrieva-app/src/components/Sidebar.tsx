import { Link } from 'react-router-dom'
import { useState } from 'react'
import logo from '../assets/Retrieva.svg'
import yourWorkIcon from '../assets/work.svg'
import studioIcon from '../assets/studio.svg'
import RefferalGuideIcon from '../assets/book.svg'
import projectIcon from '../assets/project.svg'
import InsiderNetwork from './cards/InsiderNetwork'
import helpIcon from '../assets/help.svg'
import settingsIcon from '../assets/settings.svg'
const projectDataExample = {
    projects: [
        {
            id: 1,
            name: 'Project 1',
            description: 'Description 1',
            createdAt: '2021-01-01',
            updatedAt: '2021-01-01',
        },
        {
            id: 2,
            name: 'Project 2',
            description: 'Description 2',
            createdAt: '2021-01-01',
            updatedAt: '2021-01-01',
        },
        {
            id: 3,
            name: 'Project 3',
            description: 'Description 3',
            createdAt: '2021-01-01',
            updatedAt: '2021-01-01',
        },
    ]
}

export default function Sidebar() {
    
    const links = [
        { label: 'Your Work', to: '/your-work', icon: yourWorkIcon },
        { label: 'Studio', to: '/studio', icon: studioIcon },
        { label: 'Refferal Guide', to: '/refferal-guide', icon: RefferalGuideIcon },

    ]
    

    return (
        <>
        <nav className='fixed top-0 left-0 h-screen w-96 bg-[#F8F7F2] border-r border-gray-200'>
            
            <Link to='/' className='flex items-left p-4 gap-4'>
                <img src={logo} alt="Retrieva" className='w-10 h-10' />
                <h2 className='text-sm font-medium tracking-[-0.02em]'>retrieva</h2>
            </Link>
            <button className='bg-black text-white rounded-xl mx-4 my-4 w-fit hover:bg-gray-800 px-4 py-2'> + create a new project</button>
            
            <ul>
                {links.map((link) => (
                    <li key={link.to}>
                        <Link to={link.to} className='block p-4 text-gray-700 hover:bg-[#ECEEE4] rounded-md mx-4 flex items-center gap-2'><img src={link.icon} alt={link.label} className='w-4 h-4' />{link.label}</Link>
                    </li>
                ))}
            </ul>
            <div className="flex flex-col gap-2 mx-8 my-8">
                <h3 className='text-sm tracking-[-0.02em] mx-4 mt-4 mb-2 text-gray-500!'>Your projects</h3>
                <ul className='mx-4 flex flex-col gap-2'>
                    {projectDataExample.projects.map((project) => (
                        <li key={project.id}>
                            <Link to={`/projects/${project.id}`} className='block p-4 text-gray-700 hover:bg-[#ECEEE4] rounded-md mx-4 flex items-center gap-2'><img src={projectIcon} alt={project.name} className='w-4 h-4' />{project.name}</Link>
                    </li>
                ))}
            </ul>
            </div>
            <InsiderNetwork />
            <div className='flex items-center gap-2 mx-8 my-8 hover:bg-[#ECEEE4] rounded-md p-4 border-t border-gray-200'>
                <img src={helpIcon} alt="Help" className='w-4 h-4' />
                <p>Help & Feedback</p>
            </div>
            <div className='flex items-center gap-2 mx-8 my-8 hover:bg-[#ECEEE4] rounded-md p-4 border-t border-gray-200'>
                <img src={settingsIcon} alt="Settings" className='w-4 h-4' />
                <p>Settings</p>
            </div>
        </nav>
        </>
    )
}