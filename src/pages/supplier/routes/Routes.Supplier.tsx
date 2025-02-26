import { RouteObject } from 'react-router-dom'
import { List, Details, Form } from '@pages/supplier/components'

const SupplierRoutes: Array<RouteObject> = [
  {
    path: '/suppliers',
    element: <List />,
  },
  {
    path: '/suppliers/new',
    element: <Form />,
  },
  {
    path: '/suppliers/edit/:id',
    element: <Form />,
  },
  {
    path: '/suppliers/:id',
    element: <Details />,
  },
]

export default SupplierRoutes
