import { RouteObject } from 'react-router-dom'
import { List, Details, Form } from '@pages/order/components'

const OrderRoutes: Array<RouteObject> = [
  {
    path: '/orders',
    element: <List />,
  },
  {
    path: '/orders/new',
    element: <Form />,
  },
  {
    path: '/orders/edit/:id',
    element: <Form />,
  },
  {
    path: '/orders/:id',
    element: <Details />,
  },
]

export default OrderRoutes
