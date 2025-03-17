import Client from '@pages/client/Clients'
import BarChartProv from '@components/charts/bar'
import { Card } from '@components/ui'

export default function ClientDashboard() {
  return (
    <Client>
      <Card>
        <BarChartProv />
      </Card>
    </Client>
  )
}
