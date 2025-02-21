import { RouteObject } from 'react-router-dom'
import InvoiceDetailsView from '@pages/private/invoices/InvoiceDetails'
import InvoiceEditView from '@pages/private/invoices/InvoiceEdit'
import InvoiceNewView from '@pages/private/invoices/InvoiceNew'
import InvoicesView from '@pages/private/invoices/Invoices'

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
]

export default InvoiceRoutes
