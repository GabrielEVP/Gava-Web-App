import { RouteObject } from 'react-router-dom'
import PurchaseDetailsView from '@pages/private/purchases/PurchaseDetails'
import PurchaseEditView from '@pages/private/purchases/PurchaseEdit'
import PurchaseNewView from '@pages/private/purchases/PurchaseNew'
import PurchasesView from '@pages/private/purchases/Purchases'

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
