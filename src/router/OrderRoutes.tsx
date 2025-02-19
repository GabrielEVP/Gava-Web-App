import { RouteObject } from 'react-router-dom';
import OrderDetailsView from '@views/private/orders/OrderDetailsView';
import OrderEditView from '@views/private/orders/OrderEditView';
import OrderNewView from '@views/private/orders/OrderNewView';
import OrdersView from '@views/private/orders/OrdersView';

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
];

export default OrderRoutes;
