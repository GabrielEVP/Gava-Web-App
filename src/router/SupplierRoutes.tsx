import { RouteObject } from 'react-router-dom'
import SupplierDetailsView from '@pages/supplier/SupplierDetails'
import SupplierEditView from '@pages/supplier/SupplierEdit'
import SupplierNewView from '@pages/supplier/SupplierNew'
import SuppliersView from '@pages/supplier/Suppliers'

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
