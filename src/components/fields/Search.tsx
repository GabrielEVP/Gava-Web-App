import { useState } from 'react'
import { Search } from 'lucide-react'
import { Input } from '@components/ui/index'

interface SearchProps {
  placeholder: string
  onchage: () => void
}

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Searching for:', searchQuery)
  }
  return (
    <>
      <Input
        type="search"
        placeholder="Busca por cliente"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
    </>
  )
}

export default SearchInput
