import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cn } from "@/lib/utils"

interface EnhancedProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  value?: number
  variant?: "default" | "gradient" | "animated"
  size?: "sm" | "md" | "lg"
  showPercentage?: boolean
  label?: string
  goalAmount?: number
  raisedAmount?: number
}

const EnhancedProgress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  EnhancedProgressProps
>(({ 
  className, 
  value, 
  variant = "default",
  size = "md",
  showPercentage = false,
  label,
  goalAmount,
  raisedAmount,
  ...props 
}, ref) => {
  const sizeClasses = {
    sm: "h-2",
    md: "h-4",
    lg: "h-6"
  }

  const getIndicatorClasses = () => {
    switch (variant) {
      case "gradient":
        return "h-full w-full flex-1 bg-gradient-primary transition-all duration-500 ease-in-out shadow-glow"
      case "animated":
        return "h-full w-full flex-1 bg-primary transition-all duration-700 ease-out relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:animate-[shimmer_2s_infinite] before:translate-x-[-100%]"
      default:
        return "h-full w-full flex-1 bg-primary transition-all duration-300"
    }
  }

  return (
    <div className="w-full">
      {(label || showPercentage || (goalAmount && raisedAmount)) && (
        <div className="flex justify-between items-center mb-3">
          {label && (
            <span className="text-sm font-medium text-foreground">{label}</span>
          )}
          {goalAmount && raisedAmount && (
            <div className="text-right">
              <div className="text-sm font-bold text-foreground">
                ₹{raisedAmount.toLocaleString()}
              </div>
              <div className="text-xs text-muted-foreground">
                of ₹{goalAmount.toLocaleString()}
              </div>
            </div>
          )}
          {showPercentage && !goalAmount && (
            <span className="text-sm text-muted-foreground">
              {Math.round(value || 0)}%
            </span>
          )}
        </div>
      )}
      
      <ProgressPrimitive.Root
        ref={ref}
        className={cn(
          "relative w-full overflow-hidden rounded-full bg-secondary/20 border border-border/50",
          sizeClasses[size],
          variant === "gradient" && "shadow-inner",
          className
        )}
        {...props}
      >
        <ProgressPrimitive.Indicator
          className={getIndicatorClasses()}
          style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
        />
        
        {variant === "gradient" && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50" />
        )}
      </ProgressPrimitive.Root>
      
      {goalAmount && raisedAmount && (
        <div className="flex justify-between items-center mt-2 text-xs text-muted-foreground">
          <span>{Math.round(((raisedAmount / goalAmount) * 100))}% funded</span>
          <span>₹{(goalAmount - raisedAmount).toLocaleString()} remaining</span>
        </div>
      )}
    </div>
  )
})

EnhancedProgress.displayName = "EnhancedProgress"

export { EnhancedProgress }