import { RouteObject } from 'react-router-dom'
import ProductDetailsView from '@pages/private/products/ProductDetails'
import ProductEditView from '@pages/private/products/ProductEdit'
import ProductNewView from '@pages/private/products/ProductNew'
import ProductsView from '@pages/private/products/Products'

const ProductRoutes: Array<RouteObject> = [
  {
    path: '/products',
    element: <ProductsView />,
  },
  {
    path: '/products/new',
    element: <ProductNewView />,
  },
  {
    path: '/products/edit/:id',
    element: <ProductEditView />,
  },
  {
    path: '/products/:id',
    element: <ProductDetailsView />,
  },
]

export default ProductRoutes
