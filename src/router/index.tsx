import { RouteObject } from 'react-router-dom'
import Client from '@pages/client/routes/Routes.Client'
import Invoice from '@pages/invoice/routes/Routes.Invoice'
import Order from '@pages/order/routes/Routes.Order'
import Product from '@pages/product/routes/Routes.Product'
import Purchase from '@pages/purchase/routes/Routes.Purchase'
import Supplier from '@pages/supplier/routes/Routes.Supplier'
import Home from '@pages/home/Home'

const routes: Array<RouteObject> = [
  ...Client,
  ...Invoice,
  ...Order,
  ...Product,
  ...Purchase,
  ...Supplier,
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '*',
    element: <h1>404 - Not Found</h1>,
  },
]

export default routes
