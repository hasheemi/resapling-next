import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function CampaignPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-leaf-950">Active Campaigns</h2>
        <Button>
          <i className='bx bx-plus mr-2'></i>
          Create Campaign
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <Card key={item} className="flex flex-col h-full">
            <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-400">
              <i className='bx bx-image text-4xl'></i>
            </div>
            <h3 className="text-lg font-semibold text-leaf-950 mb-2">Reforestation Project {item}</h3>
            <p className="text-sm text-gray-500 mb-4 flex-1">
              Join us in planting trees in the local community to help combat climate change and restore natural habitats.
            </p>
            <div className="space-y-3">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-leaf-500 h-2.5 rounded-full" style={{ width: '45%' }}></div>
              </div>
              <div className="flex justify-between text-sm">
                <span className="font-medium text-leaf-700">$4,500 raised</span>
                <span className="text-gray-500">Goal: $10,000</span>
              </div>
              <Button className="w-full" variant="secondary">View Details</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
