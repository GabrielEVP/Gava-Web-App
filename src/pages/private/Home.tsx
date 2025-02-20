import React, { useState, useMemo } from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js'
import Sidebar from '@components/SideBar' // Assuming this is a Vue component, you'll need a React equivalent

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

interface Metric {
  label: string
  value: number
  percentage: number
}

const Dashboard: React.FC = () => {
  const [topMetrics, setTopMetrics] = useState<Metric[]>([
    { label: 'Proveedores', value: 7265, percentage: 11.01 },
    { label: 'Compras', value: 7265, percentage: 11.01 },
    { label: 'Compras Recurrentes', value: 7265, percentage: 11.01 },
    { label: 'Productos', value: 7265, percentage: 11.01 },
  ])

  const [bottomMetrics, setBottomMetrics] = useState<Metric[]>([
    { label: 'Compras', value: 7265, percentage: 11.01 },
    { label: 'Compras Recurrentes', value: 7265, percentage: 11.01 },
    { label: 'Productos', value: 7265, percentage: 11.01 },
    { label: 'Proveedores', value: 7265, percentage: 11.01 },
  ])

  const isDarkMode = useMemo(
    () => document.documentElement.classList.contains('dark'),
    []
  )

  const mainChartData = useMemo(
    () => ({
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      datasets: [
        {
          label: 'This year',
          data: [15000, 21000, 18000, 25000, 23000, 28000, 30000],
          borderColor: isDarkMode ? '#e5e7eb' : '#4c9141',
          backgroundColor: isDarkMode ? '#e5e7eb' : '#4c9141',
          tension: 0.4,
          borderWidth: 2,
        },
        {
          label: 'Last year',
          data: [12000, 19000, 16000, 20000, 18000, 22000, 25000],
          borderColor: isDarkMode ? '#4b5563' : '#d1d5db',
          backgroundColor: isDarkMode ? '#4b5563' : '#d1d5db',
          borderDash: [5, 5],
          tension: 0.4,
          borderWidth: 2,
        },
      ],
    }),
    [isDarkMode]
  )

  const secondChartData = useMemo(
    () => ({
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      datasets: [
        {
          label: 'This year',
          data: [18000, 23000, 20000, 27000, 25000, 30000, 32000],
          borderColor: isDarkMode ? '#e5e7eb' : '#4c9141',
          backgroundColor: isDarkMode ? '#e5e7eb' : '#4c9141',
          tension: 0.4,
          borderWidth: 2,
        },
        {
          label: 'Last year',
          data: [14000, 21000, 18000, 22000, 20000, 24000, 27000],
          borderColor: isDarkMode ? '#4b5563' : '#d1d5db',
          backgroundColor: isDarkMode ? '#4b5563' : '#d1d5db',
          borderDash: [5, 5],
          tension: 0.4,
          borderWidth: 2,
        },
      ],
    }),
    [isDarkMode]
  )

  const chartOptions: ChartOptions<'line'> = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          mode: 'index',
          intersect: false,
          backgroundColor: isDarkMode ? '#374151' : 'white',
          titleColor: isDarkMode ? '#e5e7eb' : 'black',
          bodyColor: isDarkMode ? '#e5e7eb' : 'black',
          borderColor: isDarkMode ? '#4b5563' : '#e5e7eb',
          borderWidth: 1,
          padding: 12,
          displayColors: false,
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
          ticks: {
            color: isDarkMode ? '#9ca3af' : '#6b7280',
          },
        },
        y: {
          grid: {
            color: isDarkMode ? '#374151' : '#f3f4f6',
          },
          ticks: {
            color: isDarkMode ? '#9ca3af' : '#6b7280',
            callback: (value: string | number) =>
              typeof value === 'number' ? value.toLocaleString() : value,
          },
          border: {
            dash: [5, 5],
          },
        },
      },
      interaction: {
        intersect: false,
        mode: 'index',
      },
    }),
    [isDarkMode]
  )

  return (
    <Sidebar>
      {' '}
      {/* Replace with your React Sidebar component */}
      <div className="p-6 space-y-6">
        {/* Chart Section */}
        <div className="grid grid-cols-2">
          {/* ... (rest of your JSX structure - adapt classNames to className, etc.) */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-sm text-gray-600 dark:text-gray-400">
                Total Facturas
              </h2>
              <div className="flex items-center space-x-4 text-xs">
                {/* ... */}
              </div>
            </div>
            <div className="h-64">
              <Line data={mainChartData} options={chartOptions} />
            </div>
          </div>
          {/* ... (other chart and metric sections) */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-sm text-gray-600 dark:text-gray-400">
                Total Facturas
              </h2>
              <div className="flex items-center space-x-4 text-xs">
                {/* ... */}
              </div>
            </div>
            <div className="h-64">
              <Line data={secondChartData} options={chartOptions} />
            </div>
          </div>
        </div>
        {/* ... */}
      </div>
    </Sidebar>
  )
}

export default Dashboard
