"use client"

import * as React from "react"
import {
  Carousel as BaseCarousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

type CarouselProps<T> = {
  items: T[]
  renderItem: (item: T, index: number) => React.ReactNode
  className?: string
  itemClassName?: string
  itemsPerView?: 1 | 2 | 3 | 4
}

export function Carousel<T>({
  items,
  renderItem,
  className,
  itemClassName,
  itemsPerView = 1,
}: CarouselProps<T>) {

  const basisMap = {
    1: "basis-full",
    2: "basis-1/2",
    3: "basis-1/3",
    4: "basis-1/4",
  }

  return (
    <div className="relative px-10">
      <BaseCarousel className={cn(className)}>
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem
              key={index}
              className={cn(basisMap[itemsPerView], itemClassName)}
            >
              {renderItem(item, index)}
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="top-1/2 -translate-y-1/2 z-20" />
        <CarouselNext className="top-1/2 -translate-y-1/2 z-20" />
      </BaseCarousel>
    </div>
  )
}