"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        unstyled: true,
        classNames: {
          toast:
            "toast-chamfer flex items-center gap-3 w-full px-4 py-3.5 " +
            "border border-border backdrop-blur-md " +
            "bg-background/80 text-foreground " +
            "shadow-lg shadow-black/5 dark:shadow-black/20 " +
            "text-sm font-medium tracking-tight",
          success:
            "toast-success border-primary/25 " +
            "text-primary",
          error:
            "toast-error border-destructive/30 " +
            "text-destructive",
          description: "text-muted-foreground text-xs mt-0.5",
          actionButton:
            "chamfer-sm px-3 py-1.5 text-xs font-medium " +
            "bg-primary text-primary-foreground",
          cancelButton:
            "chamfer-sm px-3 py-1.5 text-xs font-medium " +
            "bg-muted text-muted-foreground",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
