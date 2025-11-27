import React from 'react';
import { Card } from '../ui/Card';

interface StatCardProps {
    title: string;
    value: string | number;
    icon?: React.ReactNode;
    trend?: {
        value: number;
        isPositive: boolean;
    };
    className?: string;
}

export function StatCard({ title, value, icon, trend, className = '' }: StatCardProps) {
    return (
        <Card className={`flex items-start justify-between ${className}`}>
            <div>
                <p className="text-sm font-medium text-gray-500">{title}</p>
                <p className="mt-2 text-3xl font-bold text-leaf-950">{value}</p>
                {trend && (
                    <div className={`mt-2 flex items-center text-sm ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                        <span className="font-medium">
                            {trend.isPositive ? '+' : ''}{trend.value}%
                        </span>
                        <span className="ml-2 text-gray-500">from last month</span>
                    </div>
                )}
            </div>
            {icon && (
                <div className="p-3 bg-leaf-100 rounded-lg text-leaf-700">
                    {icon}
                </div>
            )}
        </Card>
    );
}
