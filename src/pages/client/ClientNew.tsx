import FormClient from '@pages/clients/components/forms/FormClient'
import Sidebar from '@components/menus/SideBar'
import { Card, CardContent, Button } from '@components/ui/index'

const ClientsViews: React.FC = () => {
  return (
    <Sidebar>
      <div className="container">
        <Card>
          <CardContent className="p-6 shadow-xl">
            <FormClient />
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

export default ClientsViews
