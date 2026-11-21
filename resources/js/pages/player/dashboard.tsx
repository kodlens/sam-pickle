import React from 'react';
import { Head, Link } from '@inertiajs/react';
import PlayerLayout from '@/layouts/player-layout';
import {
    Card,
    Row,
    Col,
    Statistic,
    Button,
    Tag,
    Typography,
    Progress,
    Avatar,
    Divider,
} from 'antd';
import {
    TrophyOutlined,
    SafetyCertificateOutlined,
    HistoryOutlined,
    SearchOutlined,
    FireFilled,
    CheckCircleFilled,
    CrownFilled,
    NotificationOutlined,
} from '@ant-design/icons';
import type { PlayerProfile } from '@/types';

const { Title, Text, Paragraph } = Typography;

interface PlayerDashboardProps {
    profile: PlayerProfile | null;
    stats: {
        matchesPlayed: number;
        winRate: string;
        milestoneLevel: string;
        badgesUnlocked: number;
    };
}

export default function PlayerDashboard({
    profile,
    stats,
}: PlayerDashboardProps) {
    return (
        <PlayerLayout
            breadcrumbs={[
                {
                    title: 'Player Dashboard',
                    href: '/player/dashboard',
                },
            ]}
        >
            <div className="space-y-6">
                <Head title="Player Dashboard - SamPickle" />

            {/* Top Welcome Banner */}
            <div className="bg-gradient-to-r from-slate-900 via-emerald-950 to-[#064E2B] rounded-2xl p-6 sm:p-8 text-white shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="space-y-1">
                    <div className="flex items-center gap-2">
                        <Tag color="cyan" className="font-bold text-xs uppercase m-0">
                            Player Portal
                        </Tag>
                        <span className="text-lime-300 font-bold text-xs">
                            Rating: {profile?.skill_rating || '3.5'}
                        </span>
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-black text-white m-0">
                        Player Performance & Milestones
                    </h1>
                    <p className="text-slate-300 text-sm max-w-xl m-0">
                        Track upcoming match alerts, view live courtside tournament brackets, and level up your badges.
                    </p>
                </div>
                <div className="flex flex-wrap items-center gap-3 shrink-0">
                    <a href="/#tournaments">
                        <Button
                            type="primary"
                            size="large"
                            icon={<SearchOutlined />}
                            className="bg-lime-500 hover:bg-lime-400 text-slate-950 font-bold border-none"
                        >
                            Find Tournaments
                        </Button>
                    </a>
                </div>
            </div>

            {/* Core Stats Overview */}
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} lg={6}>
                    <Card className="rounded-2xl border-slate-200 shadow-xs">
                        <Statistic
                            title={<span className="font-semibold text-slate-500 text-xs uppercase">Matches Played</span>}
                            value={stats?.matchesPlayed || 18}
                            prefix={<HistoryOutlined className="text-blue-500 mr-1" />}
                            valueStyle={{ fontWeight: 900, color: '#0f172a' }}
                        />
                        <div className="mt-2 text-xs text-slate-500">12 Wins &bull; 6 Losses</div>
                    </Card>
                </Col>

                <Col xs={24} sm={12} lg={6}>
                    <Card className="rounded-2xl border-slate-200 shadow-xs">
                        <Statistic
                            title={<span className="font-semibold text-slate-500 text-xs uppercase">Win Rate</span>}
                            value={stats?.winRate || '67%'}
                            prefix={<FireFilled className="text-amber-500 mr-1" />}
                            valueStyle={{ fontWeight: 900, color: '#0f172a' }}
                        />
                        <div className="mt-2 text-xs text-emerald-700 font-semibold">Top 20% in Division</div>
                    </Card>
                </Col>

                <Col xs={24} sm={12} lg={6}>
                    <Card className="rounded-2xl border-slate-200 shadow-xs">
                        <Statistic
                            title={<span className="font-semibold text-slate-500 text-xs uppercase">Milestone Rank</span>}
                            value={stats?.milestoneLevel || 'Silver Dink II'}
                            prefix={<CrownFilled className="text-amber-500 mr-1" />}
                            valueStyle={{ fontWeight: 800, fontSize: '18px', color: '#0f172a' }}
                        />
                        <div className="mt-2 text-xs text-slate-500">Next: Gold Dink Elite</div>
                    </Card>
                </Col>

                <Col xs={24} sm={12} lg={6}>
                    <Card className="rounded-2xl border-slate-200 shadow-xs">
                        <Statistic
                            title={<span className="font-semibold text-slate-500 text-xs uppercase">Badges Unlocked</span>}
                            value={stats?.badgesUnlocked || 5}
                            prefix={<SafetyCertificateOutlined className="text-emerald-600 mr-1" />}
                            valueStyle={{ fontWeight: 900, color: '#0f172a' }}
                        />
                        <div className="mt-2 text-xs text-emerald-700 font-semibold">+1 New Badge this week</div>
                    </Card>
                </Col>
            </Row>

            {/* Badges & Match Alerts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Milestone Badges Showcase */}
                <Card className="rounded-2xl border-slate-200 shadow-xs" title={<span className="font-bold text-slate-900">Unlocked Milestone Badges</span>}>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 space-y-1">
                            <span className="text-2xl">🥇</span>
                            <div className="font-bold text-xs">Tourney Champion</div>
                            <div className="text-[11px] text-amber-700">Won 1st Place Division</div>
                        </div>
                        <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-1">
                            <span className="text-2xl">⚡</span>
                            <div className="font-bold text-xs">Kitchen Master</div>
                            <div className="text-[11px] text-emerald-700">50+ Non-Volley Winners</div>
                        </div>
                        <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 space-y-1">
                            <span className="text-2xl">🔥</span>
                            <div className="font-bold text-xs">5-Game Streak</div>
                            <div className="text-[11px] text-blue-700">Undefeated run</div>
                        </div>
                        <div className="p-3 rounded-xl bg-purple-50 border border-purple-200 text-purple-900 space-y-1">
                            <span className="text-2xl">🛡️</span>
                            <div className="font-bold text-xs">Century Club</div>
                            <div className="text-[11px] text-purple-700">100+ Total Games</div>
                        </div>
                    </div>
                </Card>

                {/* Live Match Alert Card */}
                <Card className="rounded-2xl border-slate-200 shadow-xs" title={<span className="font-bold text-slate-900">Courtside Match Alerts</span>}>
                    <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-2">
                        <div className="flex items-center justify-between text-xs font-bold text-emerald-900">
                            <span className="flex items-center gap-1.5">
                                <NotificationOutlined className="text-emerald-700" />
                                On Deck for Match #14
                            </span>
                            <Tag color="green">Ready</Tag>
                        </div>
                        <p className="text-xs text-slate-700 m-0">
                            Report to <strong>Court 3</strong> in approximately 10 minutes for your Men's Doubles 3.5 Quarterfinal match.
                        </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                        <span>Referee: Scoring live on Mobile App</span>
                        <a href="/#tournaments" className="text-emerald-700 font-bold">
                            View Live Bracket &gt;
                        </a>
                    </div>
                </Card>
            </div>
        </div>
        </PlayerLayout>
    );
}
