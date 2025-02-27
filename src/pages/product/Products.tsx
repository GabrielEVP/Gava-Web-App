import { FC, ReactNode } from 'react'
import Sidebar from '@components/menus/SideBar'

interface ProductProps {
  children: ReactNode
}

const ProductContainer: FC<ProductProps> = ({ children }) => {
  return <Sidebar>{children}</Sidebar>
}

export default ProductContainer
