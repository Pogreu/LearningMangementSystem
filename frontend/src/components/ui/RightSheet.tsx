"use client"

import * as React from "react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet"
import { X } from "lucide-react"

type RightSheetProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  title?: string
  description?: string
  side?: "right" | "left" | "top" | "bottom"
  children: React.ReactNode
  footer?: React.ReactNode
  showClose?: boolean
  className?: string
}

export function RightSheet({
  open,
  onOpenChange,
  title,
  description,
  side = "right",
  children,
  footer,
  showClose = true,
  className = "",
}: RightSheetProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side={side}
        className={`
          w-[420px] sm:w-[540px]
          flex flex-col
          p-0
          ${className}
        `}
      >
        {/* HEADER */}
        {(title || showClose) && (
          <div className="border-b px-6 py-4 flex items-start justify-between">
            <div className="space-y-1">
              {title && (
                <SheetHeader className="p-0">
                  <SheetTitle className="text-base font-semibold">
                    {title}
                  </SheetTitle>
                </SheetHeader>
              )}

              {description && (
                <p className="text-sm text-muted-foreground">
                  {description}
                </p>
              )}
            </div>

            {showClose && (
              <SheetClose asChild>
                <button
                  className="rounded-md p-2 hover:bg-muted transition"
                  aria-label="Close"
                >
                </button>
              </SheetClose>
            )}
          </div>
        )}

        {/* BODY */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          {children}
        </div>

        {/* FOOTER (optional, great for forms/actions) */}
        {footer && (
          <div className="border-t px-6 py-4 bg-muted/20">
            <div className="flex gap-2 justify-end">
              {footer}
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}