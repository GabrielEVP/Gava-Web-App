import { RouteObject } from 'react-router-dom'
import OrderDetailsView from '@pages/orders/OrderDetails'
import OrderEditView from '@pages/orders/OrderEdit'
import OrderNewView from '@pages/orders/OrderNew'
import OrdersView from '@pages/orders/Orders'

const OrderRoutes: Array<RouteObject> = [
  {
    path: '/orders',
    element: <OrdersView />,
  },
  {
    path: '/orders/new',
    element: <OrderNewView />,
  },
  {
    path: '/orders/edit/:id',
    element: <OrderEditView />,
  },
  {
    path: '/orders/:id',
    element: <OrderDetailsView />,
  },
]

export default OrderRoutes
