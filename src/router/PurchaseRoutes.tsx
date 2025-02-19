import { RouteObject } from 'react-router-dom';
import PurchaseDetailsView from '@views/private/purchases/PurchaseDetailsView';
import PurchaseEditView from '@views/private/purchases/PurchaseEditView';
import PurchaseNewView from '@views/private/purchases/PurchaseNewView';
import PurchasesView from '@views/private/purchases/PurchasesView';

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
];

export default PurchaseRoutes;
