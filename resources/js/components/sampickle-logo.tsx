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


    return (
        <div className={`inline-flex items-center gap-2.5 font-bold tracking-tight select-none ${className}`}>
            {/* Pickleball paddle + ball emblem */}
            <img src='/images/sam-picikle-logo.png' className='h-16'/>
        </div>
    );
}
