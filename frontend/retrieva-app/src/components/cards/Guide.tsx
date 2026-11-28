import Card from "./Cards"

export default function Guide() {
    return (
        <Card className="mx-8 my-8 bg-[#F4F2EA]">
            <h2 className="text-2xl font-bold text-black">Referrals, without the mystery.</h2>
            <p>A referral is an introduction, not a promise of an interview or an offer.
            You can ask respectfully without having an existing “insider” network.</p>
            <ul>
                <li>
                    <h3 className="text-lg font-bold text-black">Know what you’re asking for</h3>
                    <p>An employee may be able to submit your profile through an internal
                    process. The hiring team still decides what happens next.</p>
                </li>
                <li>
                    <h3 className="text-lg font-bold text-black">Start with a specific conversation</h3>
                    <p>Ask about their team or path first. Be clear about the role that interests
                    you, and give them space to say they can't help.</p>
                </li>
                <li>
                    <h3 className="text-lg font-bold text-black">Make it easy to review your work</h3>
                    <p>Share the role link, your resume, and one relevant project. Ask whether
                    they'd be comfortable referring you after looking at your materials.</p>
                </li>
            </ul>
        </Card>
    )
}