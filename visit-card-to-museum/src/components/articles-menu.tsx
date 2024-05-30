'use client'
import Link from "next/link";
import {usePathname} from "next/navigation";

export function ArticlesMenu(){
    const pathname = usePathname()
    return(
        <nav className="flex flex-row justify-center py-4 px-8 w-full">
            <ul className="flex flex-row container mx-auto max-w-xl">
                <li className="basis-1/2 text-center text-lg nav-btn">
                    <Link
                        className={`link ${pathname === '/articles/create' ? 'text-white' : ''}`}
                        href="/articles/create"
                    >
                        Articles create
                    </Link>
                </li>
                <li className="basis-1/2 text-center text-lg nav-btn">
                    <Link
                        className={`link ${pathname === '/articles/favorite' ? 'text-white' : ''}`}
                        href="/articles/favorite"
                    >
                        Articles favorite
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
