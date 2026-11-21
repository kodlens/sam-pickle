import * as React from 'react';
import { cn } from '@/lib/utils';

function TooltipProvider({ children }: { children: React.ReactNode; delayDuration?: number }) {
    return <>{children}</>;
}

function Tooltip({ children }: { children: React.ReactNode }) {
    return <div data-slot="tooltip" className="relative inline-block">{children}</div>;
}

function TooltipTrigger({ children, ...props }: React.ComponentProps<'button'> & { asChild?: boolean }) {
    return <button data-slot="tooltip-trigger" {...props}>{children}</button>;
}

function TooltipContent({
    className,
    children,
    ...props
}: React.ComponentProps<'div'> & { sideOffset?: number; side?: string }) {
    return (
        <div
            data-slot="tooltip-content"
            className={cn(
                'bg-primary text-primary-foreground z-50 max-w-sm rounded-md px-3 py-1.5 text-xs shadow-md',
                className,
            )}
            {...props}
        >
            {children}
        </div>
    );
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
