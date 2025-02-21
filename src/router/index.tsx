import { RouteObject } from 'react-router-dom'
import ClientRoutes from '@router/ClientRoutes'
import InvoiceRoutes from '@router/InvoiceRoutes'
import OrderRoutes from '@router/OrderRoutes'
import ProductRoutes from '@router/ProductRoutes'
import PurchaseRoutes from '@router/PurchaseRoutes'
import SupplierRoutes from '@router/SupplierRoutes'
import HomeView from '@pages/private/Home'

const routes: Array<RouteObject> = [
  ...ClientRoutes,
  ...InvoiceRoutes,
  ...OrderRoutes,
  ...ProductRoutes,
  ...PurchaseRoutes,
  ...SupplierRoutes,
  {
    path: '/',
    element: <HomeView />,
  },
  {
    path: '*',
    element: <h1>404 - Not Found</h1>,
  },
]

export default routes
