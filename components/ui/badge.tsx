import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
    "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
        variants: {
            variant: {
                default:
                    "bg-gradient-to-r from-gold to-gold-dark text-navy-dark shadow-sm",
                secondary:
                    "glass text-foreground",
                destructive:
                    "bg-destructive/20 text-destructive border border-destructive/30",
                outline:
                    "border border-gold/30 text-foreground",
                glow:
                    "bg-gradient-to-r from-navy to-navy-mid text-beige-light shadow-glow-navy",
                success:
                    "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
                warning:
                    "bg-amber-500/20 text-amber-400 border border-amber-500/30",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props} />
    )
}

export { Badge, badgeVariants }
