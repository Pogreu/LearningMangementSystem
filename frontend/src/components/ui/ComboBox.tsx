"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"

export type ComboboxOption = {
  value: string
  label: string
}

type ComboboxProps = {
  options: ComboboxOption[]
  value: string
  onChange: (value: string) => void
  placeholder?: string
  searchPlaceholder?: string
  emptyText?: string
  className?: string
  maxHeight?: number
}

export function Combobox({
  options,
  value,
  onChange,
  placeholder = "Select option...",
  searchPlaceholder = "Search...",
  emptyText = "No results found.",
  className,
  maxHeight = 240,
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false)

  const selected = options.find((o) => o.value === value)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("w-full justify-between", className)}
        >
          {selected ? selected.label : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>

        <PopoverContent className="w-full p-0 border shadow-md rounded-md bg-popover text-popover-foreground">
            <Command className="bg-[var(--popover)] text-popover-foreground overflow-y-auto">
                <CommandInput placeholder={searchPlaceholder} />
                <CommandList
                    className="overflow-y-auto"
                    style={{ maxHeight: `${maxHeight}px` }}
                  >
                  <CommandEmpty>{emptyText}</CommandEmpty>
                  <CommandGroup>
                      {options.map((option) => (
                      <CommandItem
                          key={option.value}
                          value={option.label}
                          onSelect={() => {
                            onChange(option.value)
                            setOpen(false)
                          }}
                      >
                          <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            value === option.value ? "opacity-100" : "opacity-0"
                          )}
                          />
                          {option.label}
                      </CommandItem>
                      ))}
                  </CommandGroup>
                </CommandList>
            </Command>
        </PopoverContent>
    </Popover>
  )
}