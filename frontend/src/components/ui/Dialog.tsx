"use client"

import * as React from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger, DialogClose } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

type ModalProps = {
  open?: boolean
  onOpenChange?: (open: boolean) => void

  trigger?: React.ReactNode

  title?: React.ReactNode
  description?: React.ReactNode

  children: React.ReactNode
  footer?: React.ReactNode

  className?: string
  contentClassName?: string

  showClose?: boolean
}

export function Modal({
  open,
  onOpenChange,
  trigger,
  title,
  description,
  children,
  footer,
  className,
  contentClassName,
  showClose = true,
}: ModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}

      <DialogContent className={cn("sm:max-w-md bg-white", contentClassName)}>
        {(title || description) && (
          <DialogHeader>
            {title && <DialogTitle>{title}</DialogTitle>}
            {description && (
              <DialogDescription>{description}</DialogDescription>
            )}
          </DialogHeader>
        )}

        <div className={cn("space-y-4", className)}>{children}</div>

        {footer && <DialogFooter>{footer}</DialogFooter>}

        {showClose && (
          <DialogClose className="absolute right-4 top-4" />
        )}
      </DialogContent>
    </Dialog>
  )
}