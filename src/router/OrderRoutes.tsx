import { RouteObject } from 'react-router-dom'
import OrderDetailsView from '@pages/order/OrderDetails'
import OrderEditView from '@pages/order/OrderEdit'
import OrderNewView from '@pages/order/OrderNew'
import OrdersView from '@pages/order/Orders'

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
