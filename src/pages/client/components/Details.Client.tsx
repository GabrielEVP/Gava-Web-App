import { FC } from 'react'
import { New, View, Edit, Trash } from '@components/buttons/index'
import { SearchInput, FieldFilter } from '@components/fields/index'
import DashboardTable from '@components/dashboards/Table'
import Sidebar from '@components/menus/SideBar'
import { TableCell, TableRow } from '@components/ui/index'

const tableHeaders = ['Nombre Legal', 'R.I.F', 'Gremio']

const clients = [
  { name: 'Empresa A', rif: 'J-12345678-9', guild: 'Tecnología' },
  { name: 'Empresa B', rif: 'J-87654321-0', guild: 'Construcción' },
  { name: 'Empresa C', rif: 'J-11223344-5', guild: 'Salud' },
]

const selectFields = [
  {
    label: 'Tipo de Cuenta',
    options: [
      { value: '', text: 'Todos' },
      { value: 'ahorro', text: 'Ahorro' },
      { value: 'corriente', text: 'Corriente' },
    ],
  },
]

const ClientsListPage: FC = () => {
  return (
    <Sidebar>
      <div className="rounded-lg p-3 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="mx-auto flex flex-wrap">
          <div className="flex-grow flex gap-2">
            <div className="relative">
              <SearchInput />
            </div>
            <FieldFilter selectFields={selectFields} />
          </div>
          <New title="Nuevo Cliente" route="/clients/new" />
        </div>
      </div>
      <DashboardTable headers={tableHeaders}>
        {clients.map((client, index) => (
          <TableRow key={index}>
            <TableCell>{client.name}</TableCell>
            <TableCell>{client.rif}</TableCell>
            <TableCell>{client.guild}</TableCell>
            <TableCell className="flex gap-2 justify-center">
              <View route="/clients" />
              <Edit route="/clients" />
              <Trash />
            </TableCell>
          </TableRow>
        ))}
      </DashboardTable>
    </Sidebar>
  )
}

export default ClientsListPage
