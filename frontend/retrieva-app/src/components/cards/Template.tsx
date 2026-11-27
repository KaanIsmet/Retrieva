import Card from "./Cards"

export default function Template() {

    const llmResponse = `Hi [Name], I'm a CS student interested in
[role] at [company]. I built [project], which
involved [relevant skill or contribution].

Would you be open to sharing how your
team works? If you're comfortable after
reviewing my work, I'd also appreciate
being considered for a referral.
No pressure either way. Thank you!`


    return (
        <Card className="mx-8 my-8 bg-[#F4F2EA]">
            <h2 className="text-2xl font-bold text-black">An ask that sounds like you.</h2>
            <p>Adapt this. You don't need to sound corporate.</p>
            <Card>
                <p>{llmResponse}</p>
            </Card>
            <button className="bg-black text-white px-4 py-2 rounded-md my-4 flex justify-center items-center w-full">Copy</button>
            <p>Use a bullet from your project studio to fill in
            what you built, without overstating your role.</p>
        </Card>
    )
}