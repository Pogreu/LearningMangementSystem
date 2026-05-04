"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const cardVariants = cva(
  "rounded-xl border bg-[var(--card)] text-[var(--card-foreground)] shadow-sm transition",
  {
    variants: {
      variant: {
        default: "border-[var(--border)]",
        muted: "border-[var(--border)] bg-[var(--muted)]",
        outline: "border-[var(--border)] shadow-none",
      },
      clickable: {
        true: "cursor-pointer hover:shadow-md",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      clickable: false,
    },
  }
)

type CardProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cardVariants> & {
    title?: React.ReactNode
    description?: React.ReactNode
    footer?: React.ReactNode
    children?: React.ReactNode
    showHeader?: boolean
  }

export function Card({
  className,
  variant,
  clickable,
  title,
  description,
  footer,
  children,
  showHeader = true,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(cardVariants({ variant, clickable }), className)}
      {...props}
    >
      {/* HEADER */}
      {showHeader && (title || description) && (
        <div className="border-b px-6 py-4 space-y-1">
          {title && (
            <h3 className="text-lg font-semibold leading-tight">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-sm text-neutral-500">
              {description}
            </p>
          )}
        </div>
      )}

      {/* BODY */}
      <div className="p-1">
        {children}
      </div>

      {/* FOOTER */}
      {footer && (
        <div className="border-t px-6 py-4 bg-muted/20">
          {footer}
        </div>
      )}
    </div>
  )
}