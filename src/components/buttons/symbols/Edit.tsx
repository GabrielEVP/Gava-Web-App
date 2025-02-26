import { Button } from '@components/ui/button'
import { Pencil } from 'lucide-react'
import { NavLink } from 'react-router-dom'

interface EditProps {
  route: string
}

const Edit = ({ route }: EditProps) => {
  return (
    <NavLink to={route}>
      <Button asChild className="bg-blue-400 hover:bg-blue-700">
        <span className="flex items-center">
          <Pencil className="h-4 w-4" />
        </span>
      </Button>
    </NavLink>
  )
}

export default Edit
