import { RouteObject } from 'react-router-dom'
import { List, Details, FullFormClient } from '@pages/client/components'

const ClientRoutes: Array<RouteObject> = [
  {
    path: '/clients',
    element: <List />,
  },
  {
    path: '/clients/new',
    element: <FullFormClient />,
  },
  {
    path: '/clients/edit/:id',
    element: <FullFormClient />,
  },
  {
    path: '/clients/:id',
    element: <Details />,
  },
]

export default ClientRoutes
