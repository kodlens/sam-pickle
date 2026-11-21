import * as React from 'react';
import { cn } from '@/lib/utils';

const Dialog = ({ children, open }: { children?: React.ReactNode; open?: boolean; onOpenChange?: (open: boolean) => void }) => {
    if (!open) return null;
    return <div data-slot="dialog" className="fixed inset-0 z-50 flex items-center justify-center">{children}</div>;
};

const DialogTrigger = ({ children, ...props }: React.ComponentProps<'button'> & { asChild?: boolean }) => (
    <button data-slot="dialog-trigger" {...props}>{children}</button>
);

const DialogPortal = ({ children }: { children?: React.ReactNode }) => <>{children}</>;

const DialogOverlay = ({ className, ...props }: React.ComponentProps<'div'>) => (
    <div data-slot="dialog-overlay" className={cn('fixed inset-0 z-50 bg-black/80', className)} {...props} />
);

const DialogContent = ({ className, children, ...props }: React.ComponentProps<'div'>) => (
    <div data-slot="dialog-content" className={cn('relative z-50 grid w-full max-w-lg gap-4 border bg-background p-6 shadow-lg sm:rounded-lg', className)} {...props}>
        {children}
    </div>
);

const DialogHeader = ({ className, ...props }: React.ComponentProps<'div'>) => (
    <div data-slot="dialog-header" className={cn('flex flex-col space-y-1.5 text-center sm:text-left', className)} {...props} />
);

const DialogFooter = ({ className, ...props }: React.ComponentProps<'div'>) => (
    <div data-slot="dialog-footer" className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)} {...props} />
);

const DialogTitle = ({ className, ...props }: React.ComponentProps<'h2'>) => (
    <h2 data-slot="dialog-title" className={cn('text-lg font-semibold leading-none tracking-tight', className)} {...props} />
);

const DialogDescription = ({ className, ...props }: React.ComponentProps<'p'>) => (
    <p data-slot="dialog-description" className={cn('text-sm text-muted-foreground', className)} {...props} />
);

const DialogClose = ({ children, ...props }: React.ComponentProps<'button'> & { asChild?: boolean }) => (
    <button data-slot="dialog-close" {...props}>{children}</button>
);

export {
    Dialog,
    DialogPortal,
    DialogOverlay,
    DialogTrigger,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogDescription,
};
