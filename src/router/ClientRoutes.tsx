import { RouteObject } from 'react-router-dom'
import ClientDetailsView from '@pages/client/ClientDetails'
import ClientEditView from '@pages/client/ClientEdit'
import ClientNewView from '@pages/client/ClientNew'
import ClientsView from '@pages/client/Clients'

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
