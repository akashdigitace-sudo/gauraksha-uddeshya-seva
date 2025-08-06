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
    sm: "h-3",
    md: "h-5",
    lg: "h-7"
  }

  const getIndicatorClasses = () => {
    switch (variant) {
      case "gradient":
        return "h-full w-full flex-1 bg-gradient-primary transition-all duration-700 ease-in-out shadow-warm relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:animate-[pulse_2s_ease-in-out_infinite]"
      case "animated":
        return "h-full w-full flex-1 bg-primary transition-all duration-700 ease-out relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:animate-[shimmer_2s_infinite] before:translate-x-[-100%]"
      default:
        return "h-full w-full flex-1 bg-primary transition-all duration-500"
    }
  }

  const progressPercentage = goalAmount && raisedAmount ? (raisedAmount / goalAmount) * 100 : value || 0;

  return (
    <div className="w-full">
      {(label || showPercentage || (goalAmount && raisedAmount)) && (
        <div className="flex justify-between items-start mb-3">
          {label && (
            <span className="text-sm font-semibold text-foreground">{label}</span>
          )}
          {goalAmount && raisedAmount && (
            <div className="text-right">
              <div className="text-lg font-bold text-primary">
                ₹{raisedAmount.toLocaleString()}
              </div>
              <div className="text-sm text-muted-foreground">
                Goal: ₹{goalAmount.toLocaleString()}
              </div>
            </div>
          )}
          {showPercentage && !goalAmount && (
            <span className="text-sm font-medium text-primary">
              {Math.round(value || 0)}%
            </span>
          )}
        </div>
      )}
      
      <div className="relative">
        <ProgressPrimitive.Root
          ref={ref}
          className={cn(
            "relative w-full overflow-hidden rounded-full bg-accent/30 border-2 border-border/20",
            sizeClasses[size],
            variant === "gradient" && "shadow-inner border-primary/20",
            className
          )}
          {...props}
        >
          <ProgressPrimitive.Indicator
            className={getIndicatorClasses()}
            style={{ transform: `translateX(-${100 - progressPercentage}%)` }}
          />
          
          {variant === "gradient" && (
            <>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-60" />
              <div className="absolute inset-y-0 right-0 w-4 bg-gradient-to-l from-primary/20 to-transparent" />
            </>
          )}
        </ProgressPrimitive.Root>

        {/* Progress markers */}
        {variant === "gradient" && (
          <div className="absolute -top-1 left-0 right-0 flex justify-between">
            {[25, 50, 75].map((mark) => (
              <div
                key={mark}
                className={`w-0.5 h-3 rounded-full transition-colors duration-300 ${
                  progressPercentage >= mark ? 'bg-primary' : 'bg-muted'
                }`}
                style={{ left: `${mark}%` }}
              />
            ))}
          </div>
        )}
      </div>
      
      {goalAmount && raisedAmount && (
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-foreground">
              {Math.round(progressPercentage)}% Complete
            </span>
          </div>
          <div className="text-sm text-muted-foreground font-medium">
            ₹{(goalAmount - raisedAmount).toLocaleString()} to go
          </div>
        </div>
      )}

      {/* Milestone indicators */}
      {goalAmount && raisedAmount && progressPercentage > 50 && (
        <div className="mt-2 text-center">
          <span className="inline-flex items-center bg-success/10 text-success px-3 py-1 rounded-full text-xs font-medium">
            🎉 Over halfway to our goal!
          </span>
        </div>
      )}
    </div>
  )
})

EnhancedProgress.displayName = "EnhancedProgress"

export { EnhancedProgress }