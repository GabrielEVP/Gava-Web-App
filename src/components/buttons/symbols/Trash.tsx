import { Button } from '@components/ui/button'
import { Trash2 } from 'lucide-react'

const Trash = () => {
  return (
    <Button type="button" className="bg-blue-400 hover:bg-blue-700">
      <Trash2 className="h-4 w-4" />
    </Button>
  )
}

export default Trash
