import * as React from 'react';
import { cn } from '@/lib/utils';

const Select = ({ children }: { children?: React.ReactNode; value?: string; onValueChange?: (val: string) => void; defaultValue?: string }) => <div data-slot="select">{children}</div>;
const SelectGroup = ({ ...props }: React.ComponentProps<'div'>) => <div data-slot="select-group" {...props} />;
const SelectValue = ({ placeholder, ...props }: React.ComponentProps<'span'> & { placeholder?: string }) => <span data-slot="select-value" {...props}>{placeholder}</span>;
const SelectTrigger = ({ className, children, ...props }: React.ComponentProps<'button'> & { size?: 'sm' | 'default' }) => (
    <button data-slot="select-trigger" className={cn('flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50', className)} {...props}>{children}</button>
);
const SelectScrollUpButton = ({ ...props }: React.ComponentProps<'div'>) => <div {...props} />;
const SelectScrollDownButton = ({ ...props }: React.ComponentProps<'div'>) => <div {...props} />;
const SelectContent = ({ className, children, ...props }: React.ComponentProps<'div'> & { position?: string }) => (
    <div data-slot="select-content" className={cn('relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md', className)} {...props}>{children}</div>
);
const SelectLabel = ({ className, ...props }: React.ComponentProps<'div'>) => <div data-slot="select-label" className={cn('px-2 py-1.5 text-sm font-semibold', className)} {...props} />;
const SelectItem = ({ className, children, ...props }: React.ComponentProps<'div'> & { value: string }) => (
    <div data-slot="select-item" className={cn('relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50', className)} {...props}>{children}</div>
);
const SelectSeparator = ({ className, ...props }: React.ComponentProps<'div'>) => <div data-slot="select-separator" className={cn('-mx-1 my-1 h-px bg-muted', className)} {...props} />;

export {
    Select,
    SelectGroup,
    SelectValue,
    SelectTrigger,
    SelectContent,
    SelectLabel,
    SelectItem,
    SelectSeparator,
    SelectScrollUpButton,
    SelectScrollDownButton,
};
