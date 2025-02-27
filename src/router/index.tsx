import { RouteObject } from 'react-router-dom'
import ClientRoutes from '@pages/client/routes/Routes.Client'
import InvoiceRoutes from '@router/InvoiceRoutes'
import OrderRoutes from '@router/OrderRoutes'
import ProductRoutes from '@pages/product/routes/Routes.Product'
import PurchaseRoutes from '@router/PurchaseRoutes'
import SupplierRoutes from '@pages/supplier/routes/Routes.Supplier'
import HomeView from '@pages/home/Home'

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
