import React from 'react';
import { Link } from '@inertiajs/react';
import SamPickleLogo from '@/components/sampickle-logo';
import { home } from '@/routes';

interface AuthLayoutProps {
    title?: string;
    description?: string;
    children: React.ReactNode;
}

export default function AuthLayout({
    title,
    description,
    children,
}: AuthLayoutProps) {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="w-full max-w-md space-y-6">
                {/* Brand Logo */}
                <div className="flex flex-col items-center">
                    <Link
                        href={home().url}
                        className="flex items-center hover:opacity-90 transition-opacity"
                    >
                        <SamPickleLogo size="lg" />
                    </Link>

                    {title && (
                        <div className="text-center mt-4 space-y-1">
                            <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                                {title}
                            </h2>
                            {description && (
                                <p className="text-sm text-slate-500 m-0">
                                    {description}
                                </p>
                            )}
                        </div>
                    )}
                </div>

                {/* Card Container */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
                    {children}
                </div>

                {/* Footer link */}
                <div className="text-center text-xs text-slate-400">
                    <Link href={home().url} className="hover:text-emerald-700 transition-colors">
                        &larr; Back to SamPickle Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
