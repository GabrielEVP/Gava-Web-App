import Sidebar from '@components/menus/SideBar'
import FullFormClient from '@pages/clients/components/forms/FormClient'
import { Card, CardContent } from '@components/ui/card'
import { Button } from '@components/ui/button'

const ClientsViews: React.FC = () => {
  return (
    <Sidebar>
      <>
        <div className="container">
          <Card>
            <CardContent className="p-6 shadow-xl">
              <FullFormClient />
              <hr className="mt-10 border-gray-200 dark:border-gray-700" />
              <div className="flex gap-2 justify-end pt-4">
                <Button variant="outline">Cancelar</Button>
                <Button>Aceptar</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </>
    </Sidebar>
  )
}

export default ClientsViews
