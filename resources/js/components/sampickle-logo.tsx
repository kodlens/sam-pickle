import React from 'react';

interface SamPickleLogoProps {
    className?: string;
    variant?: 'dark' | 'light';
    showBadge?: boolean;
    size?: 'sm' | 'md' | 'lg';
}

export default function SamPickleLogo({
    className = '',
    variant = 'dark',
    showBadge = true,
    size = 'md',
}: SamPickleLogoProps) {
    const isLight = variant === 'light';

    const sizeClasses = {
        sm: {
            icon: 'w-7 h-7',
            text: 'text-lg',
            badge: 'text-[9px] px-1.5 py-0.5',
        },
        md: {
            icon: 'w-9 h-9',
            text: 'text-xl',
            badge: 'text-[10px] px-2 py-0.5',
        },
        lg: {
            icon: 'w-11 h-11',
            text: 'text-2xl',
            badge: 'text-xs px-2.5 py-0.5',
        },
    }[size];

    return (
        <div className={`inline-flex items-center gap-2.5 font-bold tracking-tight select-none ${className}`}>
            {/* Pickleball paddle + ball emblem */}
            <div
                className={`relative flex items-center justify-center rounded-xl transition-transform hover:scale-105 ${sizeClasses.icon} ${
                    isLight ? 'bg-white/10 text-white' : 'bg-[#064E2B] text-white shadow-sm shadow-emerald-950/20'
                }`}
            >
                <svg
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full p-1.5"
                >
                    {/* Paddle body */}
                    <path
                        d="M8 7C8 4.23858 10.2386 2 13 2H23C25.7614 2 28 4.23858 28 7V17C28 20.866 24.866 24 21 24H15C11.134 24 8 20.866 8 17V7Z"
                        fill="currentColor"
                        fillOpacity={isLight ? '0.9' : '1'}
                    />
                    {/* Paddle handle */}
                    <path
                        d="M15.5 24H20.5V32C20.5 33.1046 19.6046 34 18.5 34H17.5C16.3954 34 15.5 33.1046 15.5 32V24Z"
                        fill="#F59E0B"
                    />
                    <line x1="16" y1="27" x2="20" y2="27" stroke="#D97706" strokeWidth="1" strokeLinecap="round" />
                    <line x1="16" y1="30" x2="20" y2="30" stroke="#D97706" strokeWidth="1" strokeLinecap="round" />

                    {/* Pickleball (wiffle ball with holes) */}
                    <circle cx="25" cy="11" r="6" fill="#84CC16" stroke={isLight ? '#064E2B' : '#FFFFFF'} strokeWidth="1.5" />
                    {/* Perforated holes */}
                    <circle cx="23.5" cy="9.5" r="0.9" fill="#4D7C0F" />
                    <circle cx="26.5" cy="9.5" r="0.9" fill="#4D7C0F" />
                    <circle cx="25" cy="12.5" r="0.9" fill="#4D7C0F" />
                    <circle cx="22.5" cy="12" r="0.7" fill="#4D7C0F" />
                    <circle cx="27.5" cy="12" r="0.7" fill="#4D7C0F" />
                </svg>
            </div>

            {/* Typography */}
            <div className="flex items-center gap-1.5 leading-none">
                <span className={`${sizeClasses.text} font-black ${isLight ? 'text-white' : 'text-slate-900'}`}>
                    Sam<span className={isLight ? 'text-emerald-400' : 'text-[#064E2B]'}>Pickle</span>
                </span>
                {showBadge && (
                    <span
                        className={`font-semibold rounded-full uppercase tracking-wider ${sizeClasses.badge} ${
                            isLight
                                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                                : 'bg-emerald-50 text-[#064E2B] border border-emerald-200'
                        }`}
                    >
                        Pickleball
                    </span>
                )}
            </div>
        </div>
    );
}
