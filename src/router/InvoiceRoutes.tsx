import { RouteObject } from 'react-router-dom';
import InvoiceDetailsView from '@views/private/invoices/InvoiceDetailsView';
import InvoiceEditView from '@views/private/invoices/InvoiceEditView';
import InvoiceNewView from '@views/private/invoices/InvoiceNewView';
import InvoicesView from '@views/private/invoices/InvoicesView';

const InvoiceRoutes: Array<RouteObject> = [
    {
        path: '/invoices',
        element: <InvoicesView />,
    },
    {
        path: '/invoices/new',
        element: <InvoiceNewView />,
    },
    {
        path: '/invoices/edit/:id',
        element: <InvoiceEditView />,
    },
    {
        path: '/invoices/:id',
        element: <InvoiceDetailsView />,
    },
];

export default InvoiceRoutes;
