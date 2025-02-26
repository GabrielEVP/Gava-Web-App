import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Badge,
} from '@components/ui/'

interface BillingProps {
  id: string
  date: string
  totalAmount: number
  status: string
}

function getQuoteStatusVariant(
  status: string
): 'default' | 'secondary' | 'destructive' | 'outline' {
  switch (status.toLowerCase()) {
    case 'accepted':
      return 'default'
    case 'sent':
      return 'secondary'
    case 'rejected':
      return 'destructive'
    case 'pending':
      return 'outline'
    default:
      return 'default'
  }
}

const Billing = ({ data }: { data: BillingProps[] }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((quote) => (
          <TableRow key={quote.id}>
            <TableCell className="font-medium">{quote.id}</TableCell>
            <TableCell>{quote.date}</TableCell>
            <TableCell>${quote.totalAmount.toFixed(2)}</TableCell>
            <TableCell>
              <Badge variant={getQuoteStatusVariant(quote.status)}>
                {quote.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default Billing
