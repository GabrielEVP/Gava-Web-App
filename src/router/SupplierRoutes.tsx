import { RouteObject } from 'react-router-dom';
import SupplierDetailsView from '@views/private/suppliers/SupplierDetailsView';
import SupplierEditView from '@views/private/suppliers/SupplierEditView';
import SupplierNewView from '@views/private/suppliers/SupplierNewView';
import SuppliersView from '@views/private/suppliers/SuppliersView';

const SupplierRoutes: Array<RouteObject> = [
    {
        path: '/suppliers',
        element: <SuppliersView />,
    },
    {
        path: '/suppliers/new',
        element: <SupplierNewView />,
    },
    {
        path: '/suppliers/edit/:id',
        element: <SupplierEditView />,
    },
    {
        path: '/suppliers/:id',
        element: <SupplierDetailsView />,
    },
];

export default SupplierRoutes;
