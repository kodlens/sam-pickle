import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const Sheet = ({ children, open }: { children?: React.ReactNode; open?: boolean; onOpenChange?: (open: boolean) => void }) => {
    if (!open) return null;
    return <div data-slot="sheet">{children}</div>;
};
const SheetTrigger = ({ children, ...props }: React.ComponentProps<'button'> & { asChild?: boolean }) => <button data-slot="sheet-trigger" {...props}>{children}</button>;
const SheetClose = ({ children, ...props }: React.ComponentProps<'button'> & { asChild?: boolean }) => <button data-slot="sheet-close" {...props}>{children}</button>;
const SheetPortal = ({ children }: { children?: React.ReactNode }) => <>{children}</>;
const SheetOverlay = ({ className, ...props }: React.ComponentProps<'div'>) => (
    <div data-slot="sheet-overlay" className={cn('fixed inset-0 z-50 bg-black/80', className)} {...props} />
);

const sheetVariants = cva(
    'fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out',
    {
        variants: {
            side: {
                top: 'inset-x-0 top-0 border-b',
                bottom: 'inset-x-0 bottom-0 border-t',
                left: 'inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm',
                right: 'inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm',
            },
        },
        defaultVariants: {
            side: 'right',
        },
    },
);

interface SheetContentProps
    extends React.ComponentProps<'div'>,
        VariantProps<typeof sheetVariants> {}

const SheetContent = ({ side = 'right', className, children, ...props }: SheetContentProps) => (
    <div data-slot="sheet-content" className={cn(sheetVariants({ side }), className)} {...props}>
        {children}
    </div>
);
const SheetHeader = ({ className, ...props }: React.ComponentProps<'div'>) => (
    <div data-slot="sheet-header" className={cn('flex flex-col space-y-2 text-center sm:text-left', className)} {...props} />
);
const SheetFooter = ({ className, ...props }: React.ComponentProps<'div'>) => (
    <div data-slot="sheet-footer" className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)} {...props} />
);
const SheetTitle = ({ className, ...props }: React.ComponentProps<'h2'>) => (
    <h2 data-slot="sheet-title" className={cn('text-lg font-semibold text-foreground', className)} {...props} />
);
const SheetDescription = ({ className, ...props }: React.ComponentProps<'p'>) => (
    <p data-slot="sheet-description" className={cn('text-sm text-muted-foreground', className)} {...props} />
);

export {
    Sheet,
    SheetTrigger,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetFooter,
    SheetTitle,
    SheetDescription,
};
