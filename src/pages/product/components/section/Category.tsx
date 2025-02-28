'use client'

import * as React from 'react'
import { Check, ChevronsUpDown, Plus, X } from 'lucide-react'
import { z } from 'zod'

import { cn } from '@components/lib/utils'
import { Button } from '@components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@components/ui/popover'
import { Badge } from '@components/ui/badge'
import { Input } from '@components/ui/input'
import { toast } from '@components/ui/use-toast'

// Define the category schema with Zod
const categorySchema = z.object({
  id: z.string(),
  name: z.string().min(2, 'Category name must be at least 2 characters'),
})

type Category = z.infer<typeof categorySchema>

// Sample categories (in a real app, these would come from an API)
const initialCategories: Category[] = [
  { id: '1', name: 'Electronics' },
  { id: '2', name: 'Clothing' },
  { id: '3', name: 'Home & Kitchen' },
  { id: '4', name: 'Books' },
  { id: '5', name: 'Toys & Games' },
  { id: '6', name: 'Beauty & Personal Care' },
  { id: '7', name: 'Sports & Outdoors' },
]

export default function CategoryMultiSelect() {
  const [open, setOpen] = React.useState(false)
  const [categories, setCategories] =
    React.useState<Category[]>(initialCategories)
  const [selectedCategories, setSelectedCategories] = React.useState<
    Category[]
  >([])
  const [newCategory, setNewCategory] = React.useState('')
  const [isAddingNew, setIsAddingNew] = React.useState(false)

  const handleSelect = (category: Category) => {
    setSelectedCategories((current) => {
      if (current.some((item) => item.id === category.id)) {
        return current.filter((item) => item.id !== category.id)
      }
      return [...current, category]
    })
  }

  const handleRemove = (categoryId: string) => {
    setSelectedCategories((current) =>
      current.filter((item) => item.id !== categoryId)
    )
  }

  const handleAddNewCategory = () => {
    try {
      // Validate the new category name
      const validatedName = z.string().min(2).parse(newCategory)

      // Check if category already exists
      if (
        categories.some(
          (cat) => cat.name.toLowerCase() === validatedName.toLowerCase()
        )
      ) {
        toast({
          title: 'Category already exists',
          description: 'Please enter a unique category name',
          variant: 'destructive',
        })
        return
      }

      // Create new category
      const newCategoryObj: Category = {
        id: `new-${Date.now()}`,
        name: validatedName,
      }

      // Add to categories list
      setCategories((prev) => [...prev, newCategoryObj])

      // Select the new category
      setSelectedCategories((prev) => [...prev, newCategoryObj])

      // Reset the input
      setNewCategory('')
      setIsAddingNew(false)

      toast({
        title: 'Category added',
        description: `"${validatedName}" has been added to categories`,
      })
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: 'Invalid category name',
          description: error.errors[0].message,
          variant: 'destructive',
        })
      }
    }
  }

  return (
    <div className="w-full max-w-md space-y-4">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            {selectedCategories.length > 0
              ? `${selectedCategories.length} categories selected`
              : 'Select categories'}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0" align="start">
          <Command>
            <CommandInput placeholder="Search categories..." />
            <CommandList>
              <CommandEmpty>
                <div className="py-3 px-4 text-sm">
                  No categories found. Add a new one?
                </div>
              </CommandEmpty>
              <CommandGroup heading="Categories">
                {categories.map((category) => (
                  <CommandItem
                    key={category.id}
                    value={category.name}
                    onSelect={() => handleSelect(category)}
                  >
                    <Check
                      className={cn(
                        'mr-2 h-4 w-4',
                        selectedCategories.some(
                          (item) => item.id === category.id
                        )
                          ? 'opacity-100'
                          : 'opacity-0'
                      )}
                    />
                    {category.name}
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandSeparator />
              {!isAddingNew ? (
                <CommandGroup>
                  <CommandItem
                    onSelect={() => setIsAddingNew(true)}
                    className="text-primary"
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Add new category
                  </CommandItem>
                </CommandGroup>
              ) : (
                <div className="p-2 flex items-center gap-2">
                  <Input
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    placeholder="New category name"
                    className="h-8"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault()
                        handleAddNewCategory()
                      } else if (e.key === 'Escape') {
                        setIsAddingNew(false)
                        setNewCategory('')
                      }
                    }}
                    autoFocus
                  />
                  <Button
                    size="sm"
                    onClick={handleAddNewCategory}
                    disabled={newCategory.length < 2}
                  >
                    Add
                  </Button>
                </div>
              )}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      {selectedCategories.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {selectedCategories.map((category) => (
            <Badge key={category.id} variant="secondary" className="px-3 py-1">
              {category.name}
              <X
                className="ml-2 h-3 w-3 cursor-pointer"
                onClick={() => handleRemove(category.id)}
              />
            </Badge>
          ))}
        </div>
      )}
    </div>
  )
}
