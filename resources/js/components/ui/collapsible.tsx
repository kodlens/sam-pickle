import * as React from 'react';

const Collapsible = ({ children, ...props }: React.ComponentProps<'div'> & { open?: boolean; onOpenChange?: (open: boolean) => void }) => (
    <div data-slot="collapsible" {...props}>{children}</div>
);
const CollapsibleTrigger = ({ children, ...props }: React.ComponentProps<'button'> & { asChild?: boolean }) => (
    <button data-slot="collapsible-trigger" {...props}>{children}</button>
);
const CollapsibleContent = ({ children, ...props }: React.ComponentProps<'div'>) => (
    <div data-slot="collapsible-content" {...props}>{children}</div>
);

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
