import { RouteObject } from 'react-router-dom'
import InvoiceDetailsView from '@pages/invoices/InvoiceDetails'
import InvoiceEditView from '@pages/invoices/InvoiceEdit'
import InvoiceNewView from '@pages/invoices/InvoiceNew'
import InvoicesView from '@pages/invoices/Invoices'

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
