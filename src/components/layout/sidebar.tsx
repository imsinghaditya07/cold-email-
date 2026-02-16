import Link from 'next/link'
import { cn } from '@/lib/utils'

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> { }

export function Sidebar({ className }: SidebarProps) {
    return (
        <div className={cn("pb-12", className)}>
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                        Discover
                    </h2>
                    <div className="space-y-1">
                        <Link href="/dashboard" className="block px-4 py-2 hover:underline">
                            Dashboard
                        </Link>
                        <Link href="/browse" className="block px-4 py-2 hover:underline">
                            Browse
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
