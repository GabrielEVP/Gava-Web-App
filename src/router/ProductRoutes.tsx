import { RouteObject } from 'react-router-dom'
import ProductDetailsView from '@pages/product/ProductDetails'
import ProductEditView from '@pages/product/ProductEdit'
import ProductNewView from '@pages/product/ProductNew'
import ProductsView from '@pages/product/Products'

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
