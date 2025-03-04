import { RouteObject } from 'react-router-dom'
import { List, Details, Form } from '@pages/client/components'

const ClientRoutes: Array<RouteObject> = [
  {
    path: '/clients',
    element: <List />,
  },
  {
    path: '/clients/new',
    element: <Form />,
  },
  {
    path: '/clients/edit/:id',
    element: <Form />,
  },
  {
    path: '/clients/:id',
    element: <Details />,
  },
]

export default ClientRoutes
