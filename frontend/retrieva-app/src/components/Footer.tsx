export default function Footer() {
    return (
        <footer className='flex items-center justify-between px-8 py-4'>
            <div className='text-2xl font-bold'>
                <span className='text-[#70B3AB]'>r</span>etrieva
            </div>
            <div className='flex items-center gap-4'>
                <ul>
                    <li>
                        <a href="#">Privacy Policy</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#">Terms of Service</a>
                    </li>
                </ul>           
            </div>
        </footer>
    )
}