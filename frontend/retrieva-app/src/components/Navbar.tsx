import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Retrieva.svg'

const links = [
  { label: 'How it works', to: '/how-it-works' },
  { label: 'Refferal Guide', to: '/refferal-guide' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-[var(--bg)]">
      <div className="mx-auto flex max-w-[72rem] items-center justify-between gap-6 px-[var(--section-padding-x)] py-4 lg:grid lg:grid-cols-[1fr_auto_1fr]">
        <Link
          to="/"
          className="flex shrink-0 items-center gap-2.5 justify-self-start text-[var(--text-h)] no-underline hover:text-[var(--text-h)]"
          onClick={() => setOpen(false)}
        >
          <img src={logo} alt="" width={30} height={30} className="h-[30px] w-[30px]" />
          <span className="text-[15px] font-medium tracking-[-0.02em]">retrieva</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm text-[var(--text-h)] no-underline hover:text-[var(--text-muted)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-self-end gap-5">
          <Link
            to="/login"
            className="hidden text-sm text-[var(--text-h)] no-underline hover:text-[var(--text-muted)] sm:inline"
          >
            Log in
          </Link>
          <Link
            to="/your-work"
            className="hidden shrink-0 items-center gap-1.5 whitespace-nowrap rounded-[var(--radius)] bg-[var(--button-primary-bg)] px-3.5 py-2 text-sm font-medium text-[var(--button-primary-fg)] no-underline hover:bg-[var(--button-primary-hover)] hover:text-[var(--button-primary-fg)] sm:inline-flex"
          >
            Start your story
            <ArrowUpRight />
          </Link>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] text-[var(--text-h)] lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <MenuIcon open={open} />
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          className="mx-auto flex max-w-[72rem] flex-col gap-1 px-[var(--section-padding-x)] pb-4 lg:hidden"
        >
          <Link
            to="/your-work"
            className="mb-1 inline-flex items-center justify-center gap-1.5 rounded-[var(--radius)] bg-[var(--button-primary-bg)] px-3.5 py-2 text-sm font-medium text-[var(--button-primary-fg)] no-underline hover:bg-[var(--button-primary-hover)] hover:text-[var(--button-primary-fg)] sm:hidden"
            onClick={() => setOpen(false)}
          >
            Start your story
            <ArrowUpRight />
          </Link>
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="rounded-[var(--radius-sm)] px-2 py-2 text-sm text-[var(--text-h)] no-underline hover:bg-[var(--surface-muted)] hover:text-[var(--text-h)]"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/#login"
            className="rounded-[var(--radius-sm)] px-2 py-2 text-sm text-[var(--text-h)] no-underline hover:bg-[var(--surface-muted)] hover:text-[var(--text-h)] sm:hidden"
            onClick={() => setOpen(false)}
          >
            Log in
          </Link>
        </nav>
      )}
    </header>
  )
}

function ArrowUpRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" className="shrink-0">
      <path
        d="M4 10L10 4M10 4H5.5M10 4V8.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      {open ? (
        <path
          d="M4 4L14 14M14 4L4 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M3 5H15M3 9H15M3 13H15"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      )}
    </svg>
  )
}
