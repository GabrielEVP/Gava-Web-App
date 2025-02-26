import { RouteObject } from 'react-router-dom'
import PurchaseDetailsView from '@pages/purchases/PurchaseDetails'
import PurchaseEditView from '@pages/purchases/PurchaseEdit'
import PurchaseNewView from '@pages/purchases/PurchaseNew'
import PurchasesView from '@pages/purchases/Purchases'

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
