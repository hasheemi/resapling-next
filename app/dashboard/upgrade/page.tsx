import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function UpgradePage() {
  return (
    <div className="space-y-6">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-3xl font-bold text-leaf-950 mb-4">Upgrade Your Impact</h2>
        <p className="text-gray-500">Choose a plan that fits your commitment to the planet. Unlock exclusive features and badges.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Basic Plan */}
        <Card className="border-2 border-transparent hover:border-leaf-200 transition-colors">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-gray-900">Seedling</h3>
            <div className="mt-4 flex items-baseline justify-center">
              <span className="text-4xl font-extrabold text-gray-900">$0</span>
              <span className="ml-1 text-xl text-gray-500">/mo</span>
            </div>
          </div>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center text-gray-600">
              <i className='bx bx-check text-green-500 mr-2'></i>
              Basic profile
            </li>
            <li className="flex items-center text-gray-600">
              <i className='bx bx-check text-green-500 mr-2'></i>
              Track donations
            </li>
          </ul>
          <Button variant="secondary" className="w-full">Current Plan</Button>
        </Card>

        {/* Pro Plan */}
        <Card className="border-2 border-leaf-500 relative transform scale-105 shadow-xl z-10">
          <div className="absolute top-0 right-0 -mt-3 -mr-3">
            <span className="bg-leaf-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Popular</span>
          </div>
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-leaf-950">Sapling</h3>
            <div className="mt-4 flex items-baseline justify-center">
              <span className="text-4xl font-extrabold text-gray-900">$10</span>
              <span className="ml-1 text-xl text-gray-500">/mo</span>
            </div>
          </div>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center text-gray-600">
              <i className='bx bx-check text-green-500 mr-2'></i>
              All Free features
            </li>
            <li className="flex items-center text-gray-600">
              <i className='bx bx-check text-green-500 mr-2'></i>
              Exclusive badges
            </li>
            <li className="flex items-center text-gray-600">
              <i className='bx bx-check text-green-500 mr-2'></i>
              Monthly tree report
            </li>
          </ul>
          <Button variant="primary" className="w-full">Upgrade Now</Button>
        </Card>

        {/* Enterprise Plan */}
        <Card className="border-2 border-transparent hover:border-leaf-200 transition-colors">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-gray-900">Forest</h3>
            <div className="mt-4 flex items-baseline justify-center">
              <span className="text-4xl font-extrabold text-gray-900">$50</span>
              <span className="ml-1 text-xl text-gray-500">/mo</span>
            </div>
          </div>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center text-gray-600">
              <i className='bx bx-check text-green-500 mr-2'></i>
              All Pro features
            </li>
            <li className="flex items-center text-gray-600">
              <i className='bx bx-check text-green-500 mr-2'></i>
              API Access
            </li>
            <li className="flex items-center text-gray-600">
              <i className='bx bx-check text-green-500 mr-2'></i>
              Dedicated support
            </li>
          </ul>
          <Button variant="secondary" className="w-full">Contact Sales</Button>
        </Card>
      </div>
    </div>
  );
}
