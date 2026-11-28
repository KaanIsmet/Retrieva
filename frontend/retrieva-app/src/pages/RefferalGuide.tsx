import Sidebar from '../components/Sidebar'
import Timeline from '../components/cards/Timeline'
import Referrals from '../components/cards/Referrals'
import Role from '../components/cards/Role'
import Offer from '../components/cards/Offer'
import Guide from '../components/cards/Guide'
import Template from '../components/cards/Template'

export default function RefferalGuide() {
    return (
        <main className="ml-96! mr-0! w-[calc(100%-24rem)]! max-w-none!">
            <Sidebar />
            <div>
                <h1>Refferal Guide</h1>
                <p>A small, practical guide to refferals. No assumed knowledge. No questions too basic.</p>

                <div className="flex gap-4 justify-between">
                    <Timeline />
                    <Referrals />
                    <Role />
                    <Offer />
                </div>
                <div className="flex gap-4 justify-between">
                    <Guide />
                    <Template />
                </div>
            </div>
        </main>
    )
}