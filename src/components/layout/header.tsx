import Link from 'next/link'
import { APP_NAME } from '@/lib/constants'

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center">
                <div className="mr-4 hidden md:flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <span className="hidden font-bold sm:inline-block">
                            {APP_NAME}
                        </span>
                    </Link>
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        <Link href="/dashboard">Dashboard</Link>
                        <Link href="/campaigns">Campaigns</Link>
                        <Link href="/prospects">Prospects</Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}
