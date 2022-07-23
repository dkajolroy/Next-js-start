import Link from 'next/Link'

export default function Nav() {
    return (
        <div className='container'>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><a href="/">Blog</a></li>
                <li><Link href="/profile">Profile</Link></li>
                <li><a href="/">Contact</a></li>
                <li><a href="/">About</a></li>
            </ul>
        </div>
    )
}
