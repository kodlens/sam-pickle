import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

type SidebarContext = {
    state: 'expanded' | 'collapsed';
    open: boolean;
    setOpen: (open: boolean) => void;
    openMobile: boolean;
    setOpenMobile: (open: boolean) => void;
    isMobile: boolean;
    toggleSidebar: () => void;
};

const SidebarContext = React.createContext<SidebarContext | null>(null);

function useSidebar() {
    const context = React.useContext(SidebarContext);
    if (!context) {
        return {
            state: 'expanded' as const,
            open: true,
            setOpen: () => {},
            openMobile: false,
            setOpenMobile: () => {},
            isMobile: false,
            toggleSidebar: () => {},
        };
    }
    return context;
}

const SidebarProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;
const Sidebar = ({ children, className }: React.ComponentProps<'div'>) => <div className={cn('sidebar', className)}>{children}</div>;
const SidebarContent = ({ children, className }: React.ComponentProps<'div'>) => <div className={cn('flex-1 overflow-auto', className)}>{children}</div>;
const SidebarFooter = ({ children, className }: React.ComponentProps<'div'>) => <div className={cn('p-2', className)}>{children}</div>;
const SidebarGroup = ({ children, className }: React.ComponentProps<'div'>) => <div className={cn('p-2', className)}>{children}</div>;
const SidebarGroupAction = ({ children, className }: React.ComponentProps<'button'>) => <button className={cn('p-1', className)}>{children}</button>;
const SidebarGroupContent = ({ children, className }: React.ComponentProps<'div'>) => <div className={cn('space-y-1', className)}>{children}</div>;
const SidebarGroupLabel = ({ children, className }: React.ComponentProps<'div'>) => <div className={cn('text-xs font-semibold text-muted-foreground px-2 py-1', className)}>{children}</div>;
const SidebarHeader = ({ children, className }: React.ComponentProps<'div'>) => <div className={cn('p-2', className)}>{children}</div>;
const SidebarInput = ({ className, ...props }: React.ComponentProps<'input'>) => <input className={cn('w-full border rounded px-2 py-1', className)} {...props} />;
const SidebarInset = ({ children, className }: React.ComponentProps<'main'>) => <main className={cn('flex-1', className)}>{children}</main>;
const SidebarMenu = ({ children, className }: React.ComponentProps<'ul'>) => <ul className={cn('space-y-1', className)}>{children}</ul>;
const SidebarMenuAction = ({ children, className }: React.ComponentProps<'button'> & { asChild?: boolean; showOnHover?: boolean }) => <button className={cn('p-1', className)}>{children}</button>;
const SidebarMenuBadge = ({ children, className }: React.ComponentProps<'div'>) => <div className={cn('text-xs', className)}>{children}</div>;
const SidebarMenuButton = ({ children, className, isActive, asChild, ...props }: React.ComponentProps<'button'> & { isActive?: boolean; asChild?: boolean; tooltip?: string; size?: string }) => (
    <button className={cn('flex items-center gap-2 w-full p-2 rounded hover:bg-accent text-sm text-left', isActive && 'bg-accent font-semibold', className)} {...props}>{children}</button>
);
const SidebarMenuItem = ({ children, className }: React.ComponentProps<'li'>) => <li className={cn('list-none', className)}>{children}</li>;
const SidebarMenuSkeleton = () => <div className="h-8 bg-muted animate-pulse rounded" />;
const SidebarMenuSub = ({ children, className }: React.ComponentProps<'ul'>) => <ul className={cn('pl-4 space-y-1', className)}>{children}</ul>;
const SidebarMenuSubButton = ({ children, className, isActive, asChild, ...props }: React.ComponentProps<'button'> & { isActive?: boolean; asChild?: boolean; size?: string }) => (
    <button className={cn('flex items-center gap-2 w-full p-1.5 rounded hover:bg-accent text-xs text-left', isActive && 'font-semibold', className)} {...props}>{children}</button>
);
const SidebarMenuSubItem = ({ children, className }: React.ComponentProps<'li'>) => <li className={cn('list-none', className)}>{children}</li>;
const SidebarRail = () => null;
const SidebarSeparator = ({ className }: React.ComponentProps<'hr'>) => <hr className={cn('my-2 border-border', className)} />;
const SidebarTrigger = () => null;

export {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupAction,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarInput,
    SidebarInset,
    SidebarMenu,
    SidebarMenuAction,
    SidebarMenuBadge,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSkeleton,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarProvider,
    SidebarRail,
    SidebarSeparator,
    SidebarTrigger,
    useSidebar,
};
