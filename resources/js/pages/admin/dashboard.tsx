import React from 'react';
import { Head } from '@inertiajs/react';
import {
    Card,
    Row,
    Col,
    Statistic,
    Tag,
    Button,
} from 'antd';
import {
    UsergroupAddOutlined,
    ShopOutlined,
    TrophyOutlined,
    SafetyCertificateOutlined,
    DashboardOutlined,
} from '@ant-design/icons';

interface AdminDashboardProps {
    metrics: {
        totalUsers: number;
        totalOrganizers: number;
        totalPlayers: number;
        activeTournaments: number;
    };
}

export default function AdminDashboard({ metrics }: AdminDashboardProps) {
    return (
        <div className="space-y-6">
            <Head title="System Admin Dashboard - SamPickle" />

            <div className="bg-zinc-900 rounded-2xl p-6 sm:p-8 text-white shadow-md flex items-center justify-between">
                <div>
                    <Tag color="red" className="font-bold text-xs uppercase mb-1">
                        Super Admin Center
                    </Tag>
                    <h1 className="text-2xl sm:text-3xl font-black text-white m-0">
                        SamPickle Platform Overview
                    </h1>
                    <p className="text-zinc-400 text-sm mt-1 m-0">
                        System-wide monitoring of organizers, players, tournament brackets, and subscriptions.
                    </p>
                </div>
            </div>

            <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} lg={6}>
                    <Card className="rounded-2xl border-slate-200 shadow-xs">
                        <Statistic
                            title={<span className="font-semibold text-slate-500 text-xs uppercase">Total Registered Users</span>}
                            value={metrics?.totalUsers || 1}
                            prefix={<UsergroupAddOutlined className="text-blue-500 mr-1" />}
                            valueStyle={{ fontWeight: 900, color: '#0f172a' }}
                        />
                    </Card>
                </Col>

                <Col xs={24} sm={12} lg={6}>
                    <Card className="rounded-2xl border-slate-200 shadow-xs">
                        <Statistic
                            title={<span className="font-semibold text-slate-500 text-xs uppercase">Total Organizers</span>}
                            value={metrics?.totalOrganizers || 1}
                            prefix={<ShopOutlined className="text-emerald-600 mr-1" />}
                            valueStyle={{ fontWeight: 900, color: '#0f172a' }}
                        />
                    </Card>
                </Col>

                <Col xs={24} sm={12} lg={6}>
                    <Card className="rounded-2xl border-slate-200 shadow-xs">
                        <Statistic
                            title={<span className="font-semibold text-slate-500 text-xs uppercase">Total Players</span>}
                            value={metrics?.totalPlayers || 1}
                            prefix={<SafetyCertificateOutlined className="text-amber-500 mr-1" />}
                            valueStyle={{ fontWeight: 900, color: '#0f172a' }}
                        />
                    </Card>
                </Col>

                <Col xs={24} sm={12} lg={6}>
                    <Card className="rounded-2xl border-slate-200 shadow-xs">
                        <Statistic
                            title={<span className="font-semibold text-slate-500 text-xs uppercase">Active Tournaments</span>}
                            value={metrics?.activeTournaments || 12}
                            prefix={<TrophyOutlined className="text-purple-600 mr-1" />}
                            valueStyle={{ fontWeight: 900, color: '#0f172a' }}
                        />
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

AdminDashboard.layout = {
    breadcrumbs: [
        {
            title: 'Admin Dashboard',
            href: '/admin/dashboard',
        },
    ],
};
