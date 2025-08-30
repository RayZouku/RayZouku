import { cn } from "@/lib/utils"

interface ResponsiveContainerProps {
  children: React.ReactNode
  className?: string
  size?: "sm" | "md" | "lg" | "xl" | "full"
}

const sizeClasses = {
  sm: "max-w-3xl",
  md: "max-w-5xl", 
  lg: "max-w-7xl",
  xl: "max-w-[1400px]",
  full: "max-w-none"
}

export function ResponsiveContainer({ 
  children, 
  className, 
  size = "lg" 
}: ResponsiveContainerProps) {
  return (
    <div className={cn(
      "container mx-auto px-4 sm:px-6 lg:px-8",
      sizeClasses[size],
      className
    )}>
      {children}
    </div>
  )
}