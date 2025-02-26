import FormSupplier from '@pages/supplier/components/forms/FormSupplier'
import Sidebar from '@components/menus/SideBar'
import { Card, CardContent, Button } from '@components/ui/index'

const Supplier: React.FC = () => {
  return (
    <Sidebar>
      <div className="container">
        <Card>
          <CardContent className="p-6 shadow-xl">
            <FormSupplier />
            <hr className="mt-10 border-gray-200 dark:border-gray-700" />
            <div className="flex gap-2 justify-end pt-4">
              <Button variant="outline">Cancelar</Button>
              <Button>Aceptar</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Sidebar>
  )
}

export default Supplier
