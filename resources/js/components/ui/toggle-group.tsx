import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
import { toggleVariants } from '@/components/ui/toggle';
import { cn } from '@/lib/utils';

const ToggleGroupContext = React.createContext<VariantProps<typeof toggleVariants>>({
    size: 'default',
    variant: 'default',
});

function ToggleGroup({
    className,
    variant,
    size,
    children,
    ...props
}: React.ComponentProps<'div'> & VariantProps<typeof toggleVariants> & { type?: 'single' | 'multiple'; value?: any; onValueChange?: (val: any) => void }) {
    return (
        <div
            data-slot="toggle-group"
            className={cn('group/toggle-group flex items-center rounded-md', className)}
            {...props}
        >
            <ToggleGroupContext.Provider value={{ variant, size }}>
                {children}
            </ToggleGroupContext.Provider>
        </div>
    );
}

function ToggleGroupItem({
    className,
    children,
    variant,
    size,
    ...props
}: React.ComponentProps<'button'> & VariantProps<typeof toggleVariants> & { value: string }) {
    const context = React.useContext(ToggleGroupContext);
    return (
        <button
            data-slot="toggle-group-item"
            className={cn(
                toggleVariants({
                    variant: context.variant || variant,
                    size: context.size || size,
                }),
                className,
            )}
            {...props}
        >
            {children}
        </button>
    );
}

export { ToggleGroup, ToggleGroupItem };
