import React from 'react';
import { Card } from '@/components/ui/Card';
import { Table, TableRow, TableCell } from '@/components/ui/Table';
import { Button } from '@/components/ui/Button';

export default function AdminPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-leaf-950">User Management</h2>
        <Button>
          <i className='bx bx-plus mr-2'></i>
          Add User
        </Button>
      </div>

      <Card>
        <Table headers={['Name', 'Email', 'Role', 'Status', 'Actions']}>
          <TableRow>
            <TableCell className="font-medium">John Doe</TableCell>
            <TableCell>john@example.com</TableCell>
            <TableCell>Admin</TableCell>
            <TableCell>
              <span className="px-2 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full">
                Active
              </span>
            </TableCell>
            <TableCell>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm"><i className='bx bx-edit'></i></Button>
                <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50"><i className='bx bx-trash'></i></Button>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Jane Smith</TableCell>
            <TableCell>jane@example.com</TableCell>
            <TableCell>Editor</TableCell>
            <TableCell>
              <span className="px-2 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full">
                Active
              </span>
            </TableCell>
            <TableCell>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm"><i className='bx bx-edit'></i></Button>
                <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50"><i className='bx bx-trash'></i></Button>
              </div>
            </TableCell>
          </TableRow>
        </Table>
      </Card>
    </div>
  );
}
