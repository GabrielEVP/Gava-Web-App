import { Button } from '@components/ui/button'
import { Plus } from 'lucide-react'
import { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

interface NewProps {
  title: string
  route: string
}

const New = ({ title, route }: NewProps) => {
  const navigate = useNavigate()

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) return

      if (event.key === 'n') {
        navigate(route)
      }
    }

    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [route, navigate])

  return (
    <NavLink to={route}>
      <Button className="bg-blue-500 hover:bg-blue-600 text-white transition-colors duration-200 group relative overflow-hidden">
        <span className="sm:block text-xs pl-2 pr-2 pt-1 pb-1 bg-blue-800 text-white opacity-70 transition-opacity duration-200 group-hover:opacity-100 hidden">
          N
        </span>
        <span className="flex items-center">
          <Plus className="mr-2 h-4 w-4" />
          {title}
        </span>
      </Button>
    </NavLink>
  )
}

export default New
