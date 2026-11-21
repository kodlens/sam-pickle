import { Link } from '@inertiajs/react';
import SamPickleLogo from '@/components/sampickle-logo';
import { home } from '@/routes';
import type { AuthLayoutProps } from '@/types';

export default function AuthSplitLayout({
    children,
    title,
    description,
}: AuthLayoutProps) {
    return (
        <div className="relative grid h-dvh flex-col items-center justify-center px-8 sm:px-0 lg:max-w-none lg:grid-cols-2 lg:px-0">
            <div className="relative hidden h-full flex-col bg-emerald-950 p-10 text-white lg:flex">
                <div className="absolute inset-0 bg-[#042816]" />
                <Link
                    href={home()}
                    className="relative z-20 flex items-center text-lg font-medium"
                >
                    <SamPickleLogo variant="light" size="md" />
                </Link>
                <div className="relative z-20 mt-auto">
                    <p className="text-emerald-200 text-sm">
                        "The home for pickleball tournaments, live bracketing, and player milestone badges."
                    </p>
                </div>
            </div>
            <div className="w-full lg:p-8">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[380px]">
                    <Link
                        href={home()}
                        className="relative z-20 flex items-center justify-center lg:hidden"
                    >
                        <SamPickleLogo size="md" />
                    </Link>
                    <div className="flex flex-col items-start gap-2 text-left sm:items-center sm:text-center">
                        <h1 className="text-xl font-bold text-slate-900">{title}</h1>
                        <p className="text-sm text-balance text-slate-500">
                            {description}
                        </p>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}
