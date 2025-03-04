import Client from '@pages/client/presentation/Clients'
import { Card, CardContent, CardHeader, CardTitle } from '@components/ui'
import Billing from '@components/dashboards/Billing'

export default function ClientDashboard() {
  // Datos de ejemplo del cliente
  const client = {
    name: 'Acme Corporation',
    email: 'contact@acmecorp.com',
    phone: '+1 (555) 123-4567',
    address: '123 Business St, Cityville, State 12345',
  }

  // Datos de ejemplo para facturas
  const invoices = [
    { id: 'INV001', date: '2023-05-01', totalAmount: 1500.0, status: 'Paid' },
    {
      id: 'INV002',
      date: '2023-04-15',
      totalAmount: 2200.5,
      status: 'Pending',
    },
    {
      id: 'INV003',
      date: '2023-04-01',
      totalAmount: 1800.75,
      status: 'Overdue',
    },
    { id: 'INV004', date: '2023-03-15', totalAmount: 3000.25, status: 'Paid' },
    { id: 'INV005', date: '2023-03-01', totalAmount: 1250.0, status: 'Paid' },
  ]

  // Datos de ejemplo para presupuestos
  const quotes = [
    { id: 'QUO001', date: '2023-05-10', totalAmount: 5000.0, status: 'Sent' },
    {
      id: 'QUO002',
      date: '2023-04-25',
      totalAmount: 3500.5,
      status: 'Accepted',
    },
    {
      id: 'QUO003',
      date: '2023-04-12',
      totalAmount: 7200.75,
      status: 'Rejected',
    },
    {
      id: 'QUO004',
      date: '2023-03-28',
      totalAmount: 4100.25,
      status: 'Pending',
    },
    {
      id: 'QUO005',
      date: '2023-03-15',
      totalAmount: 6300.0,
      status: 'Accepted',
    },
  ]

  return (
    <Client>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Client Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2">
            <div>
              <strong>Name:</strong> {client.name}
            </div>
            <div>
              <strong>Email:</strong> {client.email}
            </div>
            <div>
              <strong>Phone:</strong> {client.phone}
            </div>
            <div>
              <strong>Address:</strong> {client.address}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Latest Invoices</CardTitle>
          </CardHeader>
          <CardContent>
            <Billing data={invoices} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Latest Quotes</CardTitle>
          </CardHeader>
          <CardContent>
            <Billing data={quotes} />
          </CardContent>
        </Card>
      </div>
    </Client>
  )
}
