
export default function Source() {

    const sourceData = [
        {
            source: '[1] src/train.py:18-42',
            description: 'Built a text-classification pipeline with TF-IDF and logistic regression in Python.',
            lines: "18-42",
            url: "https://github.com/username/repo/blob/main/src/train.py"
        },
        {
            source: '[2] baseline.ipynb:8-10',
            description: 'Evaluated held-out predictions with an accuracy score and a confusion matrix.',
            lines: "8-10",
            url: "https://github.com/username/repo/blob/main/baseline.ipynb"
        },
        {
            source: '[3] src/test.py:12-20',
            description: 'Tested the text-classification pipeline with a test set.',
            lines: "12-20",
            url: "https://github.com/username/repo/blob/main/src/test.py"
        },
    ]

    return (
        <div className="border-l border-[#E4E1D8] p-4">
            <h1>Show me the proof</h1>
            <p>Every claim links back to your own work.</p>
            <div>
                <ul className="flex flex-col gap-2 text-sm text-[#7a7a7a] bo">
                    {sourceData.map((source) => (
                        <li className="border border-[#E4E1D8] pb-2 mb-2 rounded-lg p-5" key={source.source}>
                            <span>{source.source}</span>
                            <br/>
                            <span>{source.lines}</span>
                            <br/>
                            <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">View source</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}