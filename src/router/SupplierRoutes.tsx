import { RouteObject } from 'react-router-dom'
import SupplierDetailsView from '@pages/private/suppliers/SupplierDetails'
import SupplierEditView from '@pages/private/suppliers/SupplierEdit'
import SupplierNewView from '@pages/private/suppliers/SupplierNew'
import SuppliersView from '@pages/private/suppliers/Suppliers'

const SupplierRoutes: Array<RouteObject> = [
  {
    path: '/suppliers',
    element: <SuppliersView />,
  },
  {
    path: '/suppliers/new',
    element: <SupplierNewView />,
  },
  {
    path: '/suppliers/edit/:id',
    element: <SupplierEditView />,
  },
  {
    path: '/suppliers/:id',
    element: <SupplierDetailsView />,
  },
]

export default SupplierRoutes
