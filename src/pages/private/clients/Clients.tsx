import { FC } from 'react'
import { New, View, Edit, Trash } from '@components/buttons/index'
import Table from '@components/dashboards/Table'
import Sidebar from '@components/menus/SideBar'

const tableHeaders = ['Nombre Legal', 'R.I.F', 'Gremio']

const clients = [
  { name: 'Empresa A', rif: 'J-12345678-9', guild: 'Tecnología' },
  { name: 'Empresa B', rif: 'J-87654321-0', guild: 'Construcción' },
  { name: 'Empresa C', rif: 'J-11223344-5', guild: 'Salud' },
]

const ClientsViews: FC = () => {
  return (
    <Sidebar>
      <div className="rounded-lg p-3 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="mx-auto flex flex-wrap gap-4 items-center">
          <div className="flex-grow flex gap-2">
            <div className="relative"></div>
          </div>
          <New title="Nuevo Cliente" route="/clients/new" />
        </div>
      </div>
      <Table
        headers={tableHeaders}
        currentPage={1}
        totalPages={1}
        startIndex={0}
        endIndex={clients.length}
        totalItems={clients.length}
      >
        {clients.map((client, index) => (
          <tr
            key={index}
            className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-colors"
          >
            <td className="px-6 py-2.5 text-xs text-gray-600 dark:text-gray-300">
              {client.name}
            </td>
            <td className="px-6 py-2.5 text-xs text-gray-600 dark:text-gray-300">
              {client.rif}
            </td>
            <td className="px-6 py-2.5 text-xs text-gray-600 dark:text-gray-300">
              {client.guild}
            </td>
            <td className="px-6 py-2.5">
              <div className="flex gap-1 justify-center">
                <View route="/clients" />
                <Edit route="/clients" />
                <Trash />
              </div>
            </td>
          </tr>
        ))}
      </Table>
    </Sidebar>
  )
}

export default ClientsViews
