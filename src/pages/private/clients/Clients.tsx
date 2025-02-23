import { FC } from 'react'
import Sidebar from '@components/menus/SideBar'
import New from '@components/buttons/New'

const ClientsViews: FC = () => {

  return (
    <Sidebar>
      <New title="Nuevo Cliente" route='/clients/new' />
    </Sidebar>
  )
}

export default ClientsViews
