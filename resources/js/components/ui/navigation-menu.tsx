import * as React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const navigationMenuTriggerStyle = cva(
    'group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50',
);

const NavigationMenu = ({ className, children, ...props }: React.ComponentProps<'nav'>) => (
    <nav data-slot="navigation-menu" className={cn('relative z-10 flex max-w-max flex-1 items-center justify-center', className)} {...props}>{children}</nav>
);
const NavigationMenuList = ({ className, ...props }: React.ComponentProps<'ul'>) => (
    <ul data-slot="navigation-menu-list" className={cn('group flex flex-1 list-none items-center justify-center space-x-1', className)} {...props} />
);
const NavigationMenuItem = ({ ...props }: React.ComponentProps<'li'>) => <li data-slot="navigation-menu-item" {...props} />;
const NavigationMenuTrigger = ({ className, children, ...props }: React.ComponentProps<'button'>) => (
    <button data-slot="navigation-menu-trigger" className={cn(navigationMenuTriggerStyle(), className)} {...props}>{children}</button>
);
const NavigationMenuContent = ({ className, ...props }: React.ComponentProps<'div'>) => (
    <div data-slot="navigation-menu-content" className={cn('left-0 top-0 w-full md:absolute md:w-auto', className)} {...props} />
);
const NavigationMenuLink = ({ className, ...props }: React.ComponentProps<'a'> & { asChild?: boolean }) => (
    <a data-slot="navigation-menu-link" className={cn(navigationMenuTriggerStyle(), className)} {...props} />
);
const NavigationMenuIndicator = ({ className, ...props }: React.ComponentProps<'div'>) => (
    <div data-slot="navigation-menu-indicator" className={cn('top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden', className)} {...props} />
);
const NavigationMenuViewport = ({ className, ...props }: React.ComponentProps<'div'>) => (
    <div className="absolute left-0 top-full flex justify-center"><div data-slot="navigation-menu-viewport" className={cn('origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow md:w-[var(--radix-navigation-menu-viewport-width)]', className)} {...props} /></div>
);

export {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuContent,
    NavigationMenuTrigger,
    NavigationMenuLink,
    NavigationMenuIndicator,
    NavigationMenuViewport,
    navigationMenuTriggerStyle,
};
