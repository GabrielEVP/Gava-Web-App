import { RouteObject } from 'react-router-dom'
import ClientDetailsView from '@pages/clients/ClientDetails'
import ClientEditView from '@pages/clients/ClientEdit'
import ClientNewView from '@pages/clients/ClientNew'
import ClientsView from '@pages/clients/Clients'

const ClientRoutes: Array<RouteObject> = [
  {
    path: '/clients',
    element: <ClientsView />,
  },
  {
    path: '/clients/new',
    element: <ClientNewView />,
  },
  {
    path: '/clients/edit/:id',
    element: <ClientEditView />,
  },
  {
    path: '/clients/:id',
    element: <ClientDetailsView />,
  },
]

export default ClientRoutes
