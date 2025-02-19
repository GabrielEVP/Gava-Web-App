import { RouteObject } from 'react-router-dom';
import ClientDetailsView from '@views/private/clients/ClientDetailsView';
import ClientEditView from '@views/private/clients/ClientEditView';
import ClientNewView from '@views/private/clients/ClientNewView';
import ClientsView from '@views/private/clients/ClientsView';

const ClientRoutes: Array<RouteObject> = [
    {
        path: '/clients',
        element: <ClientsView />,
    },
    {
        path: '/clients/new',
        element: <ClientNewView />,
    },
    {
        path: '/clients/edit/:id',
        element: <ClientEditView />,
    },
    {
        path: '/clients/:id',
        element: <ClientDetailsView />,
    },
];

export default ClientRoutes;
