import React from 'react';
import { Head, Link } from '@inertiajs/react';
import OrganizerLayout from '@/layouts/organizer-layout';
import {
    Card,
    Row,
    Col,
    Statistic,
    Button,
    Tag,
    Typography,
    Divider,
    Progress,
    Badge,
} from 'antd';
import {
    TrophyOutlined,
    TeamOutlined,
    CalendarOutlined,
    CheckCircleOutlined,
    PlusOutlined,
    MobileOutlined,
    ThunderboltFilled,
    ArrowRightOutlined,
} from '@ant-design/icons';
import type { OrganizerProfile } from '@/types';

const { Title, Text, Paragraph } = Typography;

interface OrganizerDashboardProps {
    organization: OrganizerProfile | null;
    stats: {
        activeTournaments: number;
        totalTeams: number;
        assignedCourts: number;
        completedMatches: number;
    };
}

export default function OrganizerDashboard({
    organization,
    stats,
}: OrganizerDashboardProps) {
    return (
        <OrganizerLayout
            breadcrumbs={[
                {
                    title: 'Organizer Dashboard',
                    href: '/organizer/dashboard',
                },
            ]}
        >
            <div className="space-y-6">
                <Head title="Organizer Dashboard - SamPickle" />

            {/* Top Welcome Banner */}
            <div className="bg-gradient-to-r from-[#064E2B] via-[#075F35] to-[#04341D] rounded-2xl p-6 sm:p-8 text-white shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <Tag color="success" className="font-bold text-xs uppercase m-0">
                            Tournament Director Hub
                        </Tag>
                        <span className="text-emerald-200 text-xs">
                            {organization?.organization_name || 'My Pickleball Club'}
                        </span>
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-black text-white m-0">
                        Welcome, Tournament Director
                    </h1>
                    <p className="text-emerald-100/90 text-sm mt-1 max-w-xl m-0">
                        Create divisions, generate single/double elimination brackets, and monitor live match scoring in real time.
                    </p>
                </div>
                <div className="flex flex-wrap items-center gap-3 shrink-0">
                    <Button
                        type="primary"
                        size="large"
                        icon={<PlusOutlined />}
                        className="bg-lime-500 hover:bg-lime-400 text-slate-950 font-bold border-none"
                    >
                        Create New Tournament
                    </Button>
                    <Button
                        size="large"
                        icon={<MobileOutlined />}
                        className="bg-white/10 hover:bg-white/20 text-white border-white/30"
                    >
                        Referee Scorer PINs
                    </Button>
                </div>
            </div>

            {/* Core Stats Overview */}
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} lg={6}>
                    <Card className="rounded-2xl border-slate-200 shadow-xs">
                        <Statistic
                            title={<span className="font-semibold text-slate-500 text-xs uppercase">Active Tournaments</span>}
                            value={stats?.activeTournaments || 2}
                            prefix={<TrophyOutlined className="text-amber-500 mr-1" />}
                            valueStyle={{ fontWeight: 900, color: '#0f172a' }}
                        />
                        <div className="mt-2 text-xs text-emerald-700 font-semibold flex items-center gap-1">
                            <span>1 in bracket play &bull; 1 registering</span>
                        </div>
                    </Card>
                </Col>

                <Col xs={24} sm={12} lg={6}>
                    <Card className="rounded-2xl border-slate-200 shadow-xs">
                        <Statistic
                            title={<span className="font-semibold text-slate-500 text-xs uppercase">Registered Teams</span>}
                            value={stats?.totalTeams || 38}
                            prefix={<TeamOutlined className="text-blue-500 mr-1" />}
                            valueStyle={{ fontWeight: 900, color: '#0f172a' }}
                        />
                        <div className="mt-2 text-xs text-slate-500">Across 3 skill brackets</div>
                    </Card>
                </Col>

                <Col xs={24} sm={12} lg={6}>
                    <Card className="rounded-2xl border-slate-200 shadow-xs">
                        <Statistic
                            title={<span className="font-semibold text-slate-500 text-xs uppercase">Courts In Play</span>}
                            value={stats?.assignedCourts || 6}
                            prefix={<CalendarOutlined className="text-emerald-600 mr-1" />}
                            valueStyle={{ fontWeight: 900, color: '#0f172a' }}
                        />
                        <div className="mt-2 text-xs text-emerald-700 font-semibold">Courts 1-6 active</div>
                    </Card>
                </Col>

                <Col xs={24} sm={12} lg={6}>
                    <Card className="rounded-2xl border-slate-200 shadow-xs">
                        <Statistic
                            title={<span className="font-semibold text-slate-500 text-xs uppercase">Completed Matches</span>}
                            value={stats?.completedMatches || 24}
                            prefix={<CheckCircleOutlined className="text-purple-500 mr-1" />}
                            valueStyle={{ fontWeight: 900, color: '#0f172a' }}
                        />
                        <div className="mt-2 text-xs text-slate-500">Auto-recorded from mobile scorer</div>
                    </Card>
                </Col>
            </Row>

            {/* Active Tournament Live Monitor */}
            <Card
                className="rounded-2xl border-slate-200 shadow-xs"
                title={
                    <div className="flex items-center justify-between py-1">
                        <span className="font-bold text-slate-900 flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
                            Live Tournament: Spring Invitational 2026
                        </span>
                        <Tag color="success">In Progress</Tag>
                    </div>
                }
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                        <div className="flex justify-between text-xs font-bold text-slate-700">
                            <span>Court 1: Semifinals</span>
                            <span className="text-lime-600 font-mono">11-9, 9-11, 4-2</span>
                        </div>
                        <p className="text-xs text-slate-500 m-0">Vance / Miller vs. Patel / Gomez</p>
                        <Tag color="processing" className="text-[10px] m-0">Scorer: Referee App Active</Tag>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                        <div className="flex justify-between text-xs font-bold text-slate-700">
                            <span>Court 2: Semifinals</span>
                            <span className="text-slate-500 font-mono">Upcoming</span>
                        </div>
                        <p className="text-xs text-slate-500 m-0">Baker / Kim vs. Chen / Evans</p>
                        <Tag color="default" className="text-[10px] m-0">Called to Court</Tag>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                        <div className="flex justify-between text-xs font-bold text-slate-700">
                            <span>Court 3: Consolation Final</span>
                            <span className="text-emerald-700 font-mono font-bold">11-7, 11-8 (Final)</span>
                        </div>
                        <p className="text-xs text-slate-500 m-0">Winner: Jackson / Ruiz (Bronze 🥉)</p>
                        <Tag color="success" className="text-[10px] m-0">Match Completed</Tag>
                    </div>
                </div>
            </Card>
        </div>
        </OrganizerLayout>
    );
}
