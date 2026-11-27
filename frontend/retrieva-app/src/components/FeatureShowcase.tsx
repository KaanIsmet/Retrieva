export default function FeatureShowcase() {
  return (
    <aside
      aria-label="Example of a cited project story"
      className="rounded-[var(--radius-lg)] bg-[var(--surface-muted)] p-4 sm:p-5"
    >
      <div className="mb-2.5 text-[11px] font-medium tracking-[0.14em] text-[#6d7c78] uppercase">
        Show the work in your words
      </div>
      <article className="rounded-[var(--radius)] bg-[var(--surface)] p-4 shadow-[var(--shadow)]">
        <div className="flex items-start gap-3">
          <FolderIcon />
          <div>
            <div className="text-sm font-medium text-[var(--text-h)]">
              maya-builds / campus-feedback
            </div>
            <div className="mt-1 text-xs text-[var(--text-muted)]">
              Python · scikit-learn · pandas · notebooks
            </div>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-2 text-sm text-[var(--text)]">
          <CheckIcon />
          3 private sources retrieved
        </div>
      </article>

      <div className="mt-4 mb-2.5 text-[11px] font-medium tracking-[0.14em] text-[#6d7c78] uppercase">
        Translate your experience
      </div>
      <article className="rounded-[var(--radius)] bg-[var(--surface)] p-4 shadow-[var(--shadow)]">
        <div className="text-[15px] font-semibold text-[var(--text-h)]">
          A bullet you can stand behind
        </div>
        <div className="mt-2 text-sm leading-relaxed text-[var(--text)]">
          Built a text-classification pipeline with TF–IDF and logistic regression,
          and evaluated predictions on a held-out test set.{' '}
          <Citation>1</Citation> <Citation>2</Citation>
        </div>
        <div className="mt-3 text-xs text-[var(--text-muted)]">
          train.py:18-42 · 12 commits early · tests <Citation>3</Citation>
        </div>
      </article>

      <div className="mt-3 flex items-center gap-2 rounded-[var(--radius)] bg-[#1c2422] px-4 py-2.5 text-[13px] text-[var(--text-on-accent)]">
        <CheckIcon className="text-[var(--text-on-accent)]" />
        Every claim has a source. No made-up achievements.
      </div>
    </aside>
  )
}

function Citation({ children }: { children: string }) {
  return (
    <span className="text-[11px] font-medium text-[var(--accent-hover)]">({children})</span>
  )
}

function FolderIcon({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      aria-hidden="true"
      className="mt-0.5 shrink-0 text-[var(--accent)]"
    >
      <rect width="28" height="28" rx="8" fill="currentColor" fillOpacity="0.16" />
      <path
        d="M8 11.5h12v7.2a1.3 1.3 0 0 1-1.3 1.3H9.3A1.3 1.3 0 0 1 8 18.7v-7.2Z"
        fill="currentColor"
      />
      <path
        d="M8 11.2V10a1.2 1.2 0 0 1 1.2-1.2h3.1l1.2 1.4H18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CheckIcon({ className = 'text-[var(--accent)]', size = 16 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" aria-hidden="true" className={`shrink-0 ${className}`}>
      <circle cx="8" cy="8" r="7" fill="currentColor" fillOpacity="0.16" />
      <path
        d="M5 8.2 7 10.1 11 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function FeatureShowcase_firstSection() {
  return (
    <aside
      aria-label="Example of a cited project story"
      className="rounded-[var(--radius-lg)] bg-[var(--surface-muted)] p-4 sm:p-5"
    >
      <div className="mb-2.5 text-[11px] font-medium tracking-[0.14em] text-[#6d7c78] uppercase">
        Show the work in your words
      </div>
      <article className="rounded-[var(--radius)] bg-[var(--surface)] p-4 shadow-[var(--shadow)]">
        <div className="flex items-start gap-3">
          <FolderIcon />
          <div>
            <div className="text-sm font-medium text-[var(--text-h)]">
              maya-builds / campus-feedback
            </div>
            <div className="mt-1 text-xs text-[var(--text-muted)]">
              Python · scikit-learn · pandas · notebooks
            </div>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-2 text-sm text-[var(--text)]">
          <CheckIcon />
          3 private sources retrieved
        </div>
      </article>

      <div className="mt-4 mb-2.5 text-[11px] font-medium tracking-[0.14em] text-[#6d7c78] uppercase">
        Translate your experience
      </div>
      <article className="rounded-[var(--radius)] bg-[var(--surface)] p-4 shadow-[var(--shadow)]">
        <div className="text-[15px] font-semibold text-[var(--text-h)]">
          A bullet you can stand behind
        </div>
        <div className="mt-2 text-sm leading-relaxed text-[var(--text)]">
          Built a text-classification pipeline with TF–IDF and logistic regression,
          and evaluated predictions on a held-out test set.{' '}
          <Citation>1</Citation> <Citation>2</Citation>
        </div>
        <div className="mt-3 text-xs text-[var(--text-muted)]">
          train.py:18-42 · 12 commits early · tests <Citation>3</Citation>
        </div>
      </article>

      <div className="mt-3 flex items-center gap-2 rounded-[var(--radius)] bg-[#1c2422] px-4 py-2.5 text-[13px] text-[var(--text-on-accent)]">
        <CheckIcon className="text-[var(--text-on-accent)]" />
        Every claim has a source. No made-up achievements.
      </div>
    </aside>
  )
}
