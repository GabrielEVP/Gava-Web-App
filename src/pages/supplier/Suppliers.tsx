import { FC, ReactNode } from 'react'
import Sidebar from '@components/menus/SideBar'

interface SupplierProps {
  children: ReactNode
}

const SupplierContainer: FC<SupplierProps> = ({ children }) => {
  return <Sidebar>{children}</Sidebar>
}

export default SupplierContainer
