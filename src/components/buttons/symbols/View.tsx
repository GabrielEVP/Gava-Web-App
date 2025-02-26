import { Button } from '@components/ui/button'
import { Eye } from 'lucide-react'
import { NavLink } from 'react-router-dom'

interface ViewProps {
  route: string
}
const View = ({ route }: ViewProps) => {
  return (
    <NavLink to={route}>
      <Button
        asChild
        type="button"
        className="bg-blue-400 hover:bg-blue-700"
        title="Ver"
      > 
        <span className="flex items-center">
          <Eye className="h-4 w-4" />
        </span>
      </Button>
    </NavLink>
  )
}

export default View
