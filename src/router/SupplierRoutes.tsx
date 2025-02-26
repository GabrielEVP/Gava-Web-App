import { RouteObject } from 'react-router-dom'
import SupplierDetailsView from '@pages/suppliers/SupplierDetails'
import SupplierEditView from '@pages/suppliers/SupplierEdit'
import SupplierNewView from '@pages/suppliers/SupplierNew'
import SuppliersView from '@pages/suppliers/Suppliers'

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
