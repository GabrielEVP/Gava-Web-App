import { FC } from 'react'
import { New, View, Edit, Trash } from '@components/buttons/index'
import { SearchInput, FieldFilter } from '@components/fields/index'
import { Card, TableCell, TableRow } from '@components/ui/index'
import DashboardTable from '@components/dashboards/Table'
import Client from '@pages/client/Clients'

const tableHeaders = ['Nombre Legal', 'R.I.F', 'Gremio']

const clients = [
  {
    id: 1,
    name: 'Empresa A',
    rif: 'J-12345678-9',
    guild: 'Tecnología',
  },
  { id: 2, name: 'Empresa B', rif: 'J-87654321-0', guild: 'Construcción' },
  { id: 3, name: 'Empresa C', rif: 'J-11223344-5', guild: 'Salud' },
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

const PurchaseListPage: FC = () => {
  return (
    <Client>
      <Card className="w-full max-w-7xl mx-auto p-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-4">
          <div className="relative flex-1">
            <SearchInput />
          </div>
          <div className="grid grid-cols-2">
            <FieldFilter selectFields={selectFields} />
            <New title="Nuevo Producto" route="/products/new" />
          </div>
        </div>
      </Card>

      <DashboardTable headers={tableHeaders}>
        {clients.map((client, index) => (
          <TableRow key={index} className="md:table-row mb-4 md:mb-0 border-b">
            <TableCell className="font-medium md:table-cell block">
              <div className="flex justify-between">
                <span className="md:hidden font-bold">Nombre Legal:</span>
                {client.name}
              </div>
            </TableCell>
            <TableCell className="font-medium md:table-cell block">
              <div className="flex justify-between">
                <span className="md:hidden font-bold">RIF:</span>
                {client.rif}
              </div>
            </TableCell>
            <TableCell className="font-medium md:table-cell block">
              <div className="flex justify-between">
                <span className="md:hidden font-bold">Gremio:</span>
                {client.guild}
              </div>
            </TableCell>
            <TableCell className="flex gap-2 justify-center">
              <View route={`/clients/${client.id}`} />
              <Edit route={`/clients/edit/${client.id}`} />
              <Trash />
            </TableCell>
          </TableRow>
        ))}
      </DashboardTable>
    </Client>
  )
}

export default PurchaseListPage
