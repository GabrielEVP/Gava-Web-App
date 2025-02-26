import { RouteObject } from 'react-router-dom'
import PurchaseDetailsView from '@pages/purchase/PurchaseDetails'
import PurchaseEditView from '@pages/purchase/PurchaseEdit'
import PurchaseNewView from '@pages/purchase/PurchaseNew'
import PurchasesView from '@pages/purchase/Purchases'

const PurchaseRoutes: Array<RouteObject> = [
  {
    path: '/purchases',
    element: <PurchasesView />,
  },
  {
    path: '/purchases/new',
    element: <PurchaseNewView />,
  },
  {
    path: '/purchases/edit/:id',
    element: <PurchaseEditView />,
  },
  {
    path: '/purchases/:id',
    element: <PurchaseDetailsView />,
  },
]

export default PurchaseRoutes
