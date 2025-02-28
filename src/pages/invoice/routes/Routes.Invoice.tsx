import { RouteObject } from 'react-router-dom'
import { List, Details, Form } from '@pages/invoice/components'

const InvoiceRoutes: Array<RouteObject> = [
  {
    path: '/invoices',
    element: <List />,
  },
  {
    path: '/invoices/new',
    element: <Form />,
  },
  {
    path: '/invoices/edit/:id',
    element: <Form />,
  },
  {
    path: '/invoices/:id',
    element: <Details />,
  },
]

export default InvoiceRoutes
