import React from 'react';
import { StatCard } from '@/components/dashboard/StatCard';
import { Card } from '@/components/ui/Card';
import { Table, TableRow, TableCell } from '@/components/ui/Table';
import { Button } from '@/components/ui/Button';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Trees Planted"
          value="12,450"
          icon={<i className='bx bx-tree text-2xl'></i>}
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          title="Carbon Offset (kg)"
          value="45,200"
          icon={<i className='bx bx-wind text-2xl'></i>}
          trend={{ value: 8, isPositive: true }}
        />
        <StatCard
          title="Active Campaigns"
          value="8"
          icon={<i className='bx bx-map-alt text-2xl'></i>}
        />
        <StatCard
          title="Donations Collected"
          value="$24,500"
          icon={<i className='bx bx-dollar-circle text-2xl'></i>}
          trend={{ value: 5, isPositive: true }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity / Campaigns */}
        <Card className="lg:col-span-2" title="Recent Campaigns">
          <Table headers={['Campaign Name', 'Location', 'Status', 'Progress']}>
            <TableRow>
              <TableCell className="font-medium">Amazon Reforestation</TableCell>
              <TableCell>Brazil</TableCell>
              <TableCell>
                <span className="px-2 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full">
                  Active
                </span>
              </TableCell>
              <TableCell>75%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Urban Green Initiative</TableCell>
              <TableCell>New York</TableCell>
              <TableCell>
                <span className="px-2 py-1 text-xs font-semibold text-yellow-700 bg-yellow-100 rounded-full">
                  Pending
                </span>
              </TableCell>
              <TableCell>30%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Save the Mangroves</TableCell>
              <TableCell>Indonesia</TableCell>
              <TableCell>
                <span className="px-2 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full">
                  Active
                </span>
              </TableCell>
              <TableCell>90%</TableCell>
            </TableRow>
          </Table>
          <div className="mt-4 flex justify-end">
            <Button variant="ghost" size="sm">View All</Button>
          </div>
        </Card>

        {/* Quick Actions / Notifications */}
        <Card title="Quick Actions" className="space-y-4">
          <Button className="w-full justify-start" variant="secondary">
            <i className='bx bx-plus-circle mr-2 text-xl'></i>
            Start New Campaign
          </Button>
          <Button className="w-full justify-start" variant="secondary">
            <i className='bx bx-donate-heart mr-2 text-xl'></i>
            Make a Donation
          </Button>
          <Button className="w-full justify-start" variant="secondary">
            <i className='bx bx-user-plus mr-2 text-xl'></i>
            Invite Team Member
          </Button>
        </Card>
      </div>
    </div>
  );
}
