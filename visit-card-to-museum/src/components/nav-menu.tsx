'use client'
import Link from "next/link";
import {usePathname} from "next/navigation";

export function NavMenu(){
    const pathname = usePathname()
    return(

        <nav className="flex flex-row justify-center py-4 px-8">
            <div className="max-w-40 flex items-start border border-b-red-700 bg-red-700 items-center p-1">
                <Link className={`link ${pathname === '/' ? 'text-red-900' : ''}`} href="/">
                    Home
                </Link>
            </div>
            <ul className="flex flex-row container mx-auto max-w-4xl">
                <li className="basis-1/3 text-center text-lg nav-btn">
                    <Link
                        className={`link ${pathname === '/articles' ? 'text-white' : ''}`}
                        href="/articles"
                    >
                        Articles
                    </Link>
                </li>
                <li className="basis-1/3 text-center text-lg nav-btn">
                    <Link
                        className={`link ${pathname === '/profile/settings' ? 'text-white' : ''}`}
                        href="/profile/settings"
                    >
                        Profile setting
                    </Link>
                </li>
                <li className="basis-1/3 text-center text-lg nav-btn">
                    <Link
                        className={`link ${pathname === '/profile/security' ? 'text-white' : ''}`}
                        href="/profile/security"
                    >
                        Profile security
                    </Link>
                </li>
                <li className="basis-1/3 text-center text-lg nav-btn">
                    <Link
                        className={`link ${pathname === '/privacy-policy/page.tsx' ? 'text-white' : ''}`}
                        href="/privacy-policy"
                    >
                        privacy-policy
                    </Link>
                </li>
            </ul>
        </nav>
    )
}