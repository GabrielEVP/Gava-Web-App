import {
  Card,
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@components/ui'
interface DashboardTableProps {
  headers: string[]
  children: React.ReactNode
}

const DashboardTable = ({ headers, children }: DashboardTableProps) => {
  return (
    <div className="pt-6">
      <Card>
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              {headers.map((header) => {
                return (
                  <TableHead className="text-left px-6 py-3" key={header}>
                    {header}
                  </TableHead>
                )
              })}
              <TableHead>Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>{children}</TableBody>
        </Table>
      </Card>
    </div>
  )
}

export default DashboardTable
