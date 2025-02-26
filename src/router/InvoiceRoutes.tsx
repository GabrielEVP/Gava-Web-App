import { RouteObject } from 'react-router-dom'
import InvoiceDetailsView from '@pages/invoice/InvoiceDetails'
import InvoiceEditView from '@pages/invoice/InvoiceEdit'
import InvoiceNewView from '@pages/invoice/InvoiceNew'
import InvoicesView from '@pages/invoice/Invoices'

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
