import React from 'react';
import { Card } from '@/components/ui/Card';
import { Table, TableRow, TableCell } from '@/components/ui/Table';

export default function LeaderboardPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-leaf-950">Top Contributors</h2>

      <Card>
        <Table headers={['Rank', 'User', 'Trees Planted', 'Donations', 'Badges']}>
          {[1, 2, 3, 4, 5].map((rank) => (
            <TableRow key={rank}>
              <TableCell>
                <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-bold ${rank === 1 ? 'bg-yellow-100 text-yellow-700' :
                    rank === 2 ? 'bg-gray-100 text-gray-700' :
                      rank === 3 ? 'bg-orange-100 text-orange-700' :
                        'text-gray-500'
                  }`}>
                  {rank}
                </span>
              </TableCell>
              <TableCell className="font-medium">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-leaf-100 rounded-full flex items-center justify-center text-leaf-700 font-bold text-xs">
                    U{rank}
                  </div>
                  User {rank}
                </div>
              </TableCell>
              <TableCell>{1000 - (rank * 50)}</TableCell>
              <TableCell>${5000 - (rank * 200)}</TableCell>
              <TableCell>
                <div className="flex gap-1">
                  <i className='bx bxs-medal text-yellow-500'></i>
                  <i className='bx bxs-tree text-green-500'></i>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </Table>
      </Card>
    </div>
  );
}
