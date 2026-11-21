import * as React from 'react';
import { cn } from '@/lib/utils';

function Checkbox({
    className,
    checked,
    onCheckedChange,
    ...props
}: React.ComponentProps<'input'> & {
    onCheckedChange?: (checked: boolean) => void;
}) {
    return (
        <input
            type="checkbox"
            data-slot="checkbox"
            checked={checked}
            onChange={(e) => onCheckedChange?.(e.target.checked)}
            className={cn(
                'peer border-input focus-visible:border-ring focus-visible:ring-ring/50 size-4 shrink-0 rounded-sm border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
                className,
            )}
            {...props}
        />
    );
}

export { Checkbox };
