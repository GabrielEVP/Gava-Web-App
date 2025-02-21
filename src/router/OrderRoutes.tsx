import { RouteObject } from 'react-router-dom'
import OrderDetailsView from '@pages/private/orders/OrderDetails'
import OrderEditView from '@pages/private/orders/OrderEdit'
import OrderNewView from '@pages/private/orders/OrderNew'
import OrdersView from '@pages/private/orders/Orders'

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
