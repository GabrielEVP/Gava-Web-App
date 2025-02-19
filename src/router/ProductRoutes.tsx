import { RouteObject } from 'react-router-dom';
import ProductDetailsView from '@views/private/products/ProductDetailsView';
import ProductEditView from '@views/private/products/ProductEditView';
import ProductNewView from '@views/private/products/ProductNewView';
import ProductsView from '@views/private/products/ProductsView';

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
];

export default ProductRoutes;
