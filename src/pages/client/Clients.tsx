import { FC, ReactNode } from 'react'
import Sidebar from '@components/menus/SideBar'

interface ClientProps {
  children: ReactNode
}

const ClientContainer: FC<ClientProps> = ({ children }) => {
  return <Sidebar>{children}</Sidebar>
}

export default ClientContainer
