import { RouteObject } from 'react-router-dom'
import { List, Details, FullFormSupplier } from '@pages/supplier/components'

const SupplierRoutes: Array<RouteObject> = [
  {
    path: '/suppliers',
    element: <List />,
  },
  {
    path: '/suppliers/new',
    element: <FullFormSupplier />,
  },
  {
    path: '/suppliers/edit/:id',
    element: <FullFormSupplier />,
  },
  {
    path: '/suppliers/:id',
    element: <Details />,
  },
]

export default SupplierRoutes
