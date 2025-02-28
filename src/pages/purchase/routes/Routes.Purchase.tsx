import { RouteObject } from 'react-router-dom'
import { List, Details, Form } from '@pages/purchase/components'

const PurchaseRoutes: Array<RouteObject> = [
  {
    path: '/purchases',
    element: <List />,
  },
  {
    path: '/purchases/new',
    element: <Form />,
  },
  {
    path: '/purchases/edit/:id',
    element: <Form />,
  },
  {
    path: '/purchases/:id',
    element: <Details />,
  },
]

export default PurchaseRoutes
