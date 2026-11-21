import * as React from 'react';
import { cn } from '@/lib/utils';

const DropdownMenu = ({ children }: { children?: React.ReactNode }) => <div data-slot="dropdown-menu" className="relative inline-block text-left">{children}</div>;
const DropdownMenuTrigger = ({ children, ...props }: React.ComponentProps<'button'> & { asChild?: boolean }) => (
    <button data-slot="dropdown-menu-trigger" {...props}>{children}</button>
);
const DropdownMenuPortal = ({ children }: { children?: React.ReactNode }) => <>{children}</>;
const DropdownMenuContent = ({ className, children, ...props }: React.ComponentProps<'div'> & { sideOffset?: number; align?: string; side?: string }) => (
    <div data-slot="dropdown-menu-content" className={cn('absolute right-0 z-50 mt-2 min-w-[8rem] rounded-md border bg-popover p-1 text-popover-foreground shadow-md', className)} {...props}>
        {children}
    </div>
);
const DropdownMenuItem = ({ className, ...props }: React.ComponentProps<'div'> & { inset?: boolean }) => (
    <div data-slot="dropdown-menu-item" className={cn('relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground', className)} {...props} />
);
const DropdownMenuCheckboxItem = ({ className, children, ...props }: React.ComponentProps<'div'> & { checked?: boolean }) => (
    <div data-slot="dropdown-menu-checkbox-item" className={cn('relative flex cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground', className)} {...props}>
        {children}
    </div>
);
const DropdownMenuRadioItem = ({ className, children, ...props }: React.ComponentProps<'div'>) => (
    <div data-slot="dropdown-menu-radio-item" className={cn('relative flex cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground', className)} {...props}>
        {children}
    </div>
);
const DropdownMenuLabel = ({ className, ...props }: React.ComponentProps<'div'> & { inset?: boolean }) => (
    <div data-slot="dropdown-menu-label" className={cn('px-2 py-1.5 text-sm font-semibold', className)} {...props} />
);
const DropdownMenuSeparator = ({ className, ...props }: React.ComponentProps<'div'>) => (
    <div data-slot="dropdown-menu-separator" className={cn('-mx-1 my-1 h-px bg-muted', className)} {...props} />
);
const DropdownMenuShortcut = ({ className, ...props }: React.ComponentProps<'span'>) => (
    <span data-slot="dropdown-menu-shortcut" className={cn('ml-auto text-xs tracking-widest opacity-60', className)} {...props} />
);
const DropdownMenuGroup = ({ children, ...props }: React.ComponentProps<'div'>) => <div data-slot="dropdown-menu-group" {...props}>{children}</div>;
const DropdownMenuSub = ({ children }: { children?: React.ReactNode }) => <div data-slot="dropdown-menu-sub">{children}</div>;
const DropdownMenuSubTrigger = ({ className, children, ...props }: React.ComponentProps<'div'> & { inset?: boolean }) => (
    <div data-slot="dropdown-menu-sub-trigger" className={cn('flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent', className)} {...props}>
        {children}
    </div>
);
const DropdownMenuSubContent = ({ className, children, ...props }: React.ComponentProps<'div'>) => (
    <div data-slot="dropdown-menu-sub-content" className={cn('z-50 min-w-[8rem] rounded-md border bg-popover p-1 text-popover-foreground shadow-lg', className)} {...props}>
        {children}
    </div>
);
const DropdownMenuRadioGroup = ({ children, ...props }: React.ComponentProps<'div'> & { value?: string; onValueChange?: (value: string) => void }) => (
    <div data-slot="dropdown-menu-radio-group" {...props}>{children}</div>
);

export {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuCheckboxItem,
    DropdownMenuRadioItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuGroup,
    DropdownMenuPortal,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuRadioGroup,
};
