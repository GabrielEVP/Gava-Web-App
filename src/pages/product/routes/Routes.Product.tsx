import { RouteObject } from 'react-router-dom'
import { List, Details, Form } from '@pages/product/components'

const ProductRoutes: Array<RouteObject> = [
  {
    path: '/products',
    element: <List />,
  },
  {
    path: '/products/new',
    element: <Form />,
  },
  {
    path: '/products/edit/:id',
    element: <Form />,
  },
  {
    path: '/products/:id',
    element: <Details />,
  },
]

export default ProductRoutes
