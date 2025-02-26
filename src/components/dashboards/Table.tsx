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
    <Card className="mt-6">
      <div className="overflow-x-auto">
        <Table className="w-full">
          <TableHeader className="hidden md:table-header-group">
            <TableRow>
              {headers.map((header) => {
                return (
                  <TableHead className="text-left px-6 py-3" key={header}>
                    {header}
                  </TableHead>
                )
              })}
              <TableHead className="w-[100px]">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>{children}</TableBody>
        </Table>
      </div>
    </Card>
  )
}

export default DashboardTable
