import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import {
    Button,
    Card,
    Tag,
    Badge,
    Avatar,
    Progress,
    Divider,
    Space,
    Typography,
    Tooltip,
} from 'antd';
import {
    ArrowRightOutlined,
    CalendarOutlined,
    TrophyOutlined,
    TeamOutlined,
    CheckCircleFilled,
    ThunderboltFilled,
    EnvironmentOutlined,
    SafetyCertificateOutlined,
    RocketOutlined,
    MobileOutlined,
    CheckOutlined,
    PlayCircleOutlined,
    UserOutlined,
    CrownFilled,
    FireFilled,
    AimOutlined,
    NotificationOutlined,
    AuditOutlined,
    ClockCircleOutlined,
} from '@ant-design/icons';
import { login, register } from '@/routes';

const { Title, Paragraph, Text } = Typography;

export default function Welcome() {
    const [selectedRole, setSelectedRole] = useState<'organizer' | 'player'>('organizer');

    return (
        <AppLayout fullWidth>
            <Head title="SamPickle - Pickleball Tournaments, Brackets & Player Milestones" />

            {/* HERO SECTION */}
            <section className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-[#064E2B] to-[#032e19] text-white pt-16 pb-24 lg:pt-22 lg:pb-32">
                {/* Pickleball Court Lines Background */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full border-x-2 border-dashed border-white"></div>
                    <div className="absolute top-1/2 left-0 w-full border-t-2 border-white"></div>
                    <div className="absolute top-1/4 left-1/6 right-1/6 h-1/2 border-2 border-white rounded-xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto space-y-6">
                        {/* Pill Tag */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-200 text-xs sm:text-sm font-semibold tracking-wide">
                            <span className="flex h-2 w-2 rounded-full bg-lime-400 animate-pulse"></span>
                            <span>The Platform for Pickleball Tournaments & Players</span>
                            <span className="text-white/40">|</span>
                            <span className="text-lime-300 font-bold">Courtside Ready</span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.1]">
                            Tournaments, Live Brackets &{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 via-emerald-200 to-teal-100">
                                Player Milestones
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-lg sm:text-xl text-emerald-100/90 leading-relaxed max-w-2xl mx-auto font-normal">
                            Organizers set up tournaments and automated brackets in minutes.
                            Players compete, earn milestone badges, and follow live scores directly from our courtside mobile scoring companion.
                        </p>

                        {/* CTA Buttons */}
                        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href={register().url}>
                                <Button
                                    type="primary"
                                    size="large"
                                    icon={<TrophyOutlined />}
                                    className="h-13 px-8 text-base font-bold bg-lime-500 hover:bg-lime-400 text-emerald-950 border-none shadow-lg shadow-lime-950/30 transition-transform hover:-translate-y-0.5"
                                >
                                    Host a Tournament
                                </Button>
                            </Link>

                            <Link href={register().url}>
                                <Button
                                    size="large"
                                    icon={<UserOutlined />}
                                    className="h-13 px-7 text-base font-semibold bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-md transition-transform hover:-translate-y-0.5"
                                >
                                    Join as a Player
                                </Button>
                            </Link>

                            <a href="#mobile-app">
                                <Button
                                    type="text"
                                    size="large"
                                    icon={<MobileOutlined className="text-lime-300" />}
                                    className="text-white hover:text-lime-300 text-sm font-semibold"
                                >
                                    Explore Mobile Scorer App
                                </Button>
                            </a>
                        </div>

                        {/* Key Pillars Checklist */}
                        <div className="pt-4 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-emerald-200/90">
                            <span className="flex items-center gap-1.5">
                                <CheckCircleFilled className="text-lime-400" /> Instant Bracketing & Seeding
                            </span>
                            <span className="flex items-center gap-1.5">
                                <CheckCircleFilled className="text-lime-400" /> Milestone Badges & Player Profiles
                            </span>
                            <span className="flex items-center gap-1.5">
                                <CheckCircleFilled className="text-lime-400" /> External Courtside Mobile Scorer
                            </span>
                        </div>
                    </div>

                    {/* INTERACTIVE SHOWCASE: 3 KEY PILLARS */}
                    <div className="mt-14 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* CARD 1: LIVE BRACKETING */}
                        <div className="bg-white rounded-2xl shadow-xl border border-emerald-900/10 overflow-hidden flex flex-col justify-between text-slate-800">
                            <div className="bg-slate-900 text-white px-4 py-3 flex items-center justify-between border-b border-slate-800">
                                <span className="font-bold text-xs flex items-center gap-1.5">
                                    <TrophyOutlined className="text-amber-400" />
                                    Live Tournament Bracket
                                </span>
                                <Tag color="success" className="text-[11px] m-0 font-semibold">Round Robin / Elim</Tag>
                            </div>
                            <div className="p-5 space-y-4">
                                <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                                    Men's Doubles &bull; Semifinals &bull; Court 2
                                </div>

                                {/* Match 1 */}
                                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 space-y-2">
                                    <div className="flex items-center justify-between text-xs font-bold text-slate-900">
                                        <span className="flex items-center gap-1.5">
                                            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                                            D. Miller / T. Vance
                                        </span>
                                        <span className="font-mono text-emerald-700 font-extrabold text-sm">11 &bull; 9 &bull; 11 (W)</span>
                                    </div>
                                    <Divider className="my-1 border-slate-200" />
                                    <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
                                        <span>R. Patel / C. Gomez</span>
                                        <span className="font-mono text-slate-500 text-sm">9 &bull; 11 &bull; 8</span>
                                    </div>
                                </div>

                                {/* Auto-Advancement indicator */}
                                <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-2.5 text-xs text-emerald-800 flex items-center gap-2">
                                    <ThunderboltFilled className="text-emerald-600 text-sm" />
                                    <span><strong>Miller & Vance</strong> auto-advanced to Championship Finals!</span>
                                </div>
                            </div>
                            <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                                <span>Single & Double Elimination</span>
                                <span className="text-[#064E2B] font-bold">Auto-Seeding &gt;</span>
                            </div>
                        </div>

                        {/* CARD 2: PLAYER BADGES & MILESTONES */}
                        <div className="bg-white rounded-2xl shadow-xl border border-emerald-900/10 overflow-hidden flex flex-col justify-between text-slate-800">
                            <div className="bg-slate-900 text-white px-4 py-3 flex items-center justify-between border-b border-slate-800">
                                <span className="font-bold text-xs flex items-center gap-1.5">
                                    <SafetyCertificateOutlined className="text-lime-400" />
                                    Player Profile & Badges
                                </span>
                                <span className="text-[11px] text-lime-400 font-mono font-bold">DUPR 4.35</span>
                            </div>
                            <div className="p-5 space-y-4">
                                <div className="flex items-center gap-3">
                                    <Avatar size={48} className="bg-[#064E2B] text-white font-extrabold text-lg">
                                        MR
                                    </Avatar>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-sm m-0 flex items-center gap-1">
                                            Marcus Rivera
                                            <CrownFilled className="text-amber-500 text-xs" />
                                        </h4>
                                        <p className="text-xs text-slate-500 m-0">Tournament Competitor &bull; 42 Matches</p>
                                    </div>
                                </div>

                                {/* Milestone Progress Bar */}
                                <div>
                                    <div className="flex justify-between items-center text-xs mb-1">
                                        <span className="font-bold text-slate-700">Next Milestone: Gold Dink Elite</span>
                                        <span className="font-bold text-emerald-700">80%</span>
                                    </div>
                                    <Progress percent={80} strokeColor="#064E2B" size="small" showInfo={false} />
                                </div>

                                {/* Unlocked Badges */}
                                <div>
                                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                                        Unlocked Milestone Badges
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 text-xs">
                                        <div className="p-2 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 flex items-center gap-1.5 font-semibold">
                                            <span>🥇</span>
                                            <span className="truncate">Tourney Champion</span>
                                        </div>
                                        <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-center gap-1.5 font-semibold">
                                            <span>🔥</span>
                                            <span className="truncate">8-Game Streak</span>
                                        </div>
                                        <div className="p-2 rounded-lg bg-blue-50 border border-blue-200 text-blue-900 flex items-center gap-1.5 font-semibold">
                                            <span>⚡</span>
                                            <span className="truncate">Kitchen Master</span>
                                        </div>
                                        <div className="p-2 rounded-lg bg-purple-50 border border-purple-200 text-purple-900 flex items-center gap-1.5 font-semibold">
                                            <span>🛡️</span>
                                            <span className="truncate">Century (100+ Games)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                                <span>Career Stats & Trophies</span>
                                <span className="text-[#064E2B] font-bold">View Badges &gt;</span>
                            </div>
                        </div>

                        {/* CARD 3: MOBILE SCORING COMPANION APP */}
                        <div className="bg-white rounded-2xl shadow-xl border border-emerald-900/10 overflow-hidden flex flex-col justify-between text-slate-800">
                            <div className="bg-slate-900 text-white px-4 py-3 flex items-center justify-between border-b border-slate-800">
                                <span className="font-bold text-xs flex items-center gap-1.5">
                                    <MobileOutlined className="text-emerald-400" />
                                    Courtside Mobile App
                                </span>
                                <span className="text-[11px] text-emerald-300 font-semibold bg-emerald-950 px-2 py-0.5 rounded-full">
                                    Live Sync
                                </span>
                            </div>
                            <div className="p-5 space-y-4">
                                <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                                    Referee & Court Scoring Interface
                                </div>

                                {/* Score Screen Mockup */}
                                <div className="bg-slate-950 text-white p-4 rounded-xl space-y-3">
                                    <div className="flex justify-between items-center text-xs text-slate-400">
                                        <span>Court 4 Referee</span>
                                        <span className="text-lime-400 font-semibold">Game 2 (Best of 3)</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3 text-center py-1">
                                        <div className="bg-white/10 p-2.5 rounded-lg">
                                            <div className="text-xs text-slate-300 truncate">Team Alpha</div>
                                            <div className="text-3xl font-black text-lime-300 font-mono">10</div>
                                            <span className="text-[10px] text-lime-400 font-bold uppercase">Serving (2)</span>
                                        </div>
                                        <div className="bg-white/10 p-2.5 rounded-lg">
                                            <div className="text-xs text-slate-300 truncate">Team Bravo</div>
                                            <div className="text-3xl font-black text-white font-mono">8</div>
                                            <span className="text-[10px] text-slate-400 uppercase">Receiving</span>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-1.5 pt-1">
                                        <button className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-1.5 rounded-md text-xs">
                                            + Point
                                        </button>
                                        <button className="bg-amber-600 hover:bg-amber-500 text-white font-bold py-1.5 rounded-md text-xs">
                                            Side Out
                                        </button>
                                        <button className="bg-slate-700 hover:bg-slate-600 text-slate-300 font-semibold py-1.5 rounded-md text-xs">
                                            Undo
                                        </button>
                                    </div>
                                </div>

                                <div className="text-xs text-slate-600 flex items-center gap-1.5">
                                    <CheckCircleFilled className="text-emerald-600" />
                                    <span>Scores instantly update the bracket on the web!</span>
                                </div>
                            </div>
                            <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                                <span>Referees & Players on the Go</span>
                                <span className="text-[#064E2B] font-bold">Mobile First &gt;</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DUAL AUDIENCE: ORGANIZERS & PLAYERS */}
            <section id="roles" className="py-20 bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
                        <Tag color="success" className="px-3 py-1 font-semibold text-xs uppercase tracking-wide">
                            Built for the Pickleball Community
                        </Tag>
                        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                            Who Uses SamPickle?
                        </h2>
                        <p className="text-base text-slate-600">
                            Whether you are directing a 64-team weekend tournament or a player aiming to unlock your next milestone badge, SamPickle gives you the tools you need.
                        </p>

                        {/* Interactive Role Switcher */}
                        <div className="pt-2 flex justify-center">
                            <div className="inline-flex p-1.5 rounded-xl bg-slate-100 border border-slate-200">
                                <button
                                    onClick={() => setSelectedRole('organizer')}
                                    className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                                        selectedRole === 'organizer'
                                            ? 'bg-[#064E2B] text-white shadow-sm'
                                            : 'text-slate-600 hover:text-slate-900'
                                    }`}
                                >
                                    <TeamOutlined /> For Tournament Organizers
                                </button>
                                <button
                                    onClick={() => setSelectedRole('player')}
                                    className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                                        selectedRole === 'player'
                                            ? 'bg-[#064E2B] text-white shadow-sm'
                                            : 'text-slate-600 hover:text-slate-900'
                                    }`}
                                >
                                    <UserOutlined /> For Players & Competitors
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* ORGANIZERS VIEW */}
                    {selectedRole === 'organizer' && (
                        <div id="organizers" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                                    🏆 Tournament Directors & Club Organizers
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                                    Create tournaments and manage brackets without the headaches.
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Say goodbye to manual paper sheets and delayed matches. With SamPickle, you can set up divisions, auto-seed players, assign courts, and let referees score matches courtside using the mobile companion.
                                </p>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-3.5">
                                        <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#064E2B] flex items-center justify-center shrink-0 mt-0.5">
                                            <TrophyOutlined className="text-base" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-800 text-base mb-0.5">
                                                Flexible Bracketing Formats
                                            </h4>
                                            <p className="text-sm text-slate-500 m-0">
                                                Support for Single Elimination, Double Elimination with loser brackets, and Round Robin pool play.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3.5">
                                        <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#064E2B] flex items-center justify-center shrink-0 mt-0.5">
                                            <CalendarOutlined className="text-base" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-800 text-base mb-0.5">
                                                Divisions, Categories & Court Assignments
                                            </h4>
                                            <p className="text-sm text-slate-500 m-0">
                                                Create Men's, Women's, and Mixed divisions with skill tiers (3.0, 3.5, 4.0, 4.5, 5.0+). Drag-and-drop matches to available courts.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3.5">
                                        <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#064E2B] flex items-center justify-center shrink-0 mt-0.5">
                                            <MobileOutlined className="text-base" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-800 text-base mb-0.5">
                                                Real-Time Live Scoring via Mobile Scorer
                                            </h4>
                                            <p className="text-sm text-slate-500 m-0">
                                                Station volunteers or referees on each court with the mobile app. Scores submit with one tap and advance winners instantly.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-2">
                                    <Link href={register().url}>
                                        <Button type="primary" size="large" icon={<RocketOutlined />}>
                                            Register as an Organizer
                                        </Button>
                                    </Link>
                                </div>
                            </div>

                            {/* Organizer Visual Mock */}
                            <div className="bg-gradient-to-br from-emerald-900 to-[#04381e] p-8 rounded-3xl text-white shadow-xl space-y-6">
                                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                                    <div>
                                        <span className="text-xs font-semibold text-lime-300 uppercase tracking-wider">
                                            Tournament Director Control Center
                                        </span>
                                        <h4 className="text-xl font-bold text-white m-0">SamPickle Spring Open 2026</h4>
                                    </div>
                                    <Tag color="success" className="font-bold text-xs">Live Event</Tag>
                                </div>

                                <div className="grid grid-cols-3 gap-3">
                                    <div className="bg-white/10 p-3.5 rounded-xl text-center">
                                        <div className="text-2xl font-black text-white">48</div>
                                        <div className="text-[11px] text-emerald-200">Teams Registered</div>
                                    </div>
                                    <div className="bg-white/10 p-3.5 rounded-xl text-center">
                                        <div className="text-2xl font-black text-lime-300">6</div>
                                        <div className="text-[11px] text-emerald-200">Active Courts</div>
                                    </div>
                                    <div className="bg-white/10 p-3.5 rounded-xl text-center">
                                        <div className="text-2xl font-black text-white">32/45</div>
                                        <div className="text-[11px] text-emerald-200">Matches Finished</div>
                                    </div>
                                </div>

                                <div className="bg-white/10 p-4 rounded-xl space-y-2.5">
                                    <div className="flex justify-between items-center text-xs">
                                        <span className="font-bold text-emerald-100">Next Upcoming Matches</span>
                                        <span className="text-lime-300 text-xs font-semibold">Ready to Assign</span>
                                    </div>
                                    <div className="bg-black/30 p-2.5 rounded-lg flex items-center justify-between text-xs">
                                        <div>
                                            <div className="font-semibold text-white">Court 1: Quarterfinal Match 4</div>
                                            <div className="text-[11px] text-slate-300">Davis/Kim vs. Baker/O'Connor</div>
                                        </div>
                                        <Tag color="cyan" className="m-0 text-[11px]">Assigned</Tag>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* PLAYERS VIEW */}
                    {selectedRole === 'player' && (
                        <div id="players" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Player Visual Mock */}
                            <div className="bg-gradient-to-br from-slate-900 to-[#064E2B] p-8 rounded-3xl text-white shadow-xl space-y-6">
                                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                                    <div className="flex items-center gap-3">
                                        <Avatar size={48} className="bg-lime-400 text-slate-900 font-black">
                                            SR
                                        </Avatar>
                                        <div>
                                            <h4 className="text-lg font-bold text-white m-0">Sophia Ramirez</h4>
                                            <span className="text-xs text-lime-300">Milestone Rank: Veteran Dink &bull; Level 6</span>
                                        </div>
                                    </div>
                                    <Tag color="gold">4.0 Division</Tag>
                                </div>

                                <div className="grid grid-cols-3 gap-3">
                                    <div className="bg-white/10 p-3 rounded-xl text-center">
                                        <div className="text-xl font-bold text-white">36</div>
                                        <div className="text-[11px] text-slate-400">Matches Won</div>
                                    </div>
                                    <div className="bg-white/10 p-3 rounded-xl text-center">
                                        <div className="text-xl font-bold text-lime-300">14</div>
                                        <div className="text-[11px] text-slate-400">Badges Unlocked</div>
                                    </div>
                                    <div className="bg-white/10 p-3 rounded-xl text-center">
                                        <div className="text-xl font-bold text-white">3</div>
                                        <div className="text-[11px] text-slate-400">Podium Trophies</div>
                                    </div>
                                </div>

                                <div className="bg-white/10 p-4 rounded-xl space-y-2">
                                    <span className="text-xs font-semibold text-slate-200">Recent Milestones Earned:</span>
                                    <div className="flex flex-wrap gap-2 pt-1">
                                        <Tag color="purple">🏅 Gold Medalist (Summer Slam)</Tag>
                                        <Tag color="green">⚡ 5 Aces in One Game</Tag>
                                        <Tag color="orange">🔥 5-Match Undefeated</Tag>
                                        <Tag color="blue">🤝 Fair Play Ambassador</Tag>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                                    🏓 Passionate Players & Competitors
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                                    Build your player legacy, unlock badges, and follow your matches.
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Every match you play matters. Track your career stats, compare head-to-head records against opponents, and collect achievement badges every time you hit tournament milestones.
                                </p>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-3.5">
                                        <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#064E2B] flex items-center justify-center shrink-0 mt-0.5">
                                            <SafetyCertificateOutlined className="text-base" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-800 text-base mb-0.5">
                                                Player Profile & Achievement Badges
                                            </h4>
                                            <p className="text-sm text-slate-500 m-0">
                                                Earn badges for tournament podiums, winning streaks, game comebacks, and milestone matches. Display them proudly on your player card.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3.5">
                                        <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#064E2B] flex items-center justify-center shrink-0 mt-0.5">
                                            <TrophyOutlined className="text-base" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-800 text-base mb-0.5">
                                                Join Tournaments in 1-Click
                                            </h4>
                                            <p className="text-sm text-slate-500 m-0">
                                                Browse open tournaments by location, date, and skill tier. Register with your doubles partner in seconds.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3.5">
                                        <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#064E2B] flex items-center justify-center shrink-0 mt-0.5">
                                            <MobileOutlined className="text-base" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-800 text-base mb-0.5">
                                                Mobile Match Alerts
                                            </h4>
                                            <p className="text-sm text-slate-500 m-0">
                                                Know the moment you are on deck, view your assigned court, and check live opponent scores while warming up.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-2">
                                    <Link href={register().url}>
                                        <Button type="primary" size="large" icon={<RocketOutlined />}>
                                            Create Free Player Account
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* EXTERNAL MOBILE APP COMPANION SPOTLIGHT */}
            <section id="mobile-app" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <Tag color="success" className="px-3 py-1 font-bold text-xs uppercase tracking-wide">
                                📱 Courtside Mobile App Companion
                            </Tag>
                            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                                Scoring Right on the Court.
                                <br />
                                <span className="text-lime-400">Live Sync to the Tournament.</span>
                            </h2>
                            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                                No running back to the tournament desk. Our companion mobile app turns any smartphone or tablet into a digital courtside scoreboard for referees, scorekeepers, and players.
                            </p>

                            <div className="space-y-4 pt-2">
                                <div className="flex items-start gap-3.5">
                                    <div className="w-8 h-8 rounded-lg bg-lime-400/20 text-lime-400 flex items-center justify-center shrink-0 mt-0.5">
                                        <ThunderboltFilled className="text-base" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-base mb-0.5">
                                            One-Tap Scorekeeper Interface
                                        </h4>
                                        <p className="text-sm text-slate-400 m-0">
                                            Simple "+ Point", "Side Out", and "Serve 2" buttons designed for quick, error-free scoring courtside.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3.5">
                                    <div className="w-8 h-8 rounded-lg bg-lime-400/20 text-lime-400 flex items-center justify-center shrink-0 mt-0.5">
                                        <NotificationOutlined className="text-base" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-base mb-0.5">
                                            "You're Up Next" Push Notifications
                                        </h4>
                                        <p className="text-sm text-slate-400 m-0">
                                            Players receive instant alerts when their match is called and which court to report to.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3.5">
                                    <div className="w-8 h-8 rounded-lg bg-lime-400/20 text-lime-400 flex items-center justify-center shrink-0 mt-0.5">
                                        <TeamOutlined className="text-base" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-base mb-0.5">
                                            Future Ready for Organizers
                                        </h4>
                                        <p className="text-sm text-slate-400 m-0">
                                            Expanding soon to full on-the-go organizer tools so directors can manage courts, delays, and brackets right from their phone.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Phone Mockup */}
                        <div className="flex justify-center">
                            <div className="w-full max-w-sm rounded-[40px] p-4 bg-slate-800 border-4 border-slate-700 shadow-2xl">
                                <div className="rounded-[32px] overflow-hidden bg-slate-950 p-6 space-y-5 border border-slate-800 text-white">
                                    {/* Phone Header */}
                                    <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-3">
                                        <span className="font-bold text-lime-400">SamPickle Mobile Scorer</span>
                                        <span>Court 3 &bull; Match #14</span>
                                    </div>

                                    {/* Active Match Box */}
                                    <div className="text-center space-y-1">
                                        <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">
                                            Mixed Doubles 4.0 &bull; Game 3
                                        </span>
                                        <div className="grid grid-cols-2 gap-3 pt-2">
                                            <div className="p-3 bg-emerald-950/80 border border-emerald-800 rounded-xl">
                                                <div className="text-xs font-bold truncate">Evans / Hayes</div>
                                                <div className="text-4xl font-black text-lime-300 font-mono my-1">9</div>
                                                <span className="text-[10px] bg-lime-400/20 text-lime-300 px-2 py-0.5 rounded-full font-bold">
                                                    Serving (1)
                                                </span>
                                            </div>
                                            <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl">
                                                <div className="text-xs font-bold truncate">Lee / Ortiz</div>
                                                <div className="text-4xl font-black text-white font-mono my-1">7</div>
                                                <span className="text-[10px] text-slate-400 font-medium">
                                                    Receiving
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Large Touch Controls */}
                                    <div className="space-y-2 pt-2">
                                        <Button
                                            type="primary"
                                            block
                                            size="large"
                                            className="h-12 text-base font-black bg-lime-500 hover:bg-lime-400 text-slate-950 border-none"
                                        >
                                            + 1 Point (Serving Team)
                                        </Button>
                                        <div className="grid grid-cols-2 gap-2">
                                            <Button block size="middle" className="bg-amber-600 text-white font-bold border-none">
                                                Side Out
                                            </Button>
                                            <Button block size="middle" className="bg-slate-800 text-slate-300 font-semibold border-slate-700">
                                                Undo Score
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Real-time status */}
                                    <div className="pt-2 text-center text-[11px] text-emerald-400 flex items-center justify-center gap-1.5">
                                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                                        Connected to SamPickle Cloud Bracket
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CORE APPLICATION FEATURES */}
            <section id="features" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <Tag color="success" className="px-3 py-1 font-semibold text-xs uppercase tracking-wide">
                            Everything You Need
                        </Tag>
                        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                            Complete Features for Modern Tournaments
                        </h2>
                        <p className="text-base text-slate-600">
                            Whether you host weekend community showdowns or major regional pickleball opens, SamPickle covers the entire match journey.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Feature 1 */}
                        <Card className="rounded-2xl border-slate-200 hover:shadow-md transition-shadow">
                            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#064E2B] flex items-center justify-center mb-4 text-xl font-bold">
                                <TrophyOutlined />
                            </div>
                            <h4 className="text-base font-bold text-slate-900 mb-1">
                                Easy Tournament Setup
                            </h4>
                            <p className="text-xs text-slate-500 leading-relaxed m-0">
                                Set up events, registration deadlines, match formats (e.g. best 2 of 3 to 11, win by 2), and entry requirements in minutes.
                            </p>
                        </Card>

                        {/* Feature 2 */}
                        <Card className="rounded-2xl border-slate-200 hover:shadow-md transition-shadow">
                            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#064E2B] flex items-center justify-center mb-4 text-xl font-bold">
                                <AimOutlined />
                            </div>
                            <h4 className="text-base font-bold text-slate-900 mb-1">
                                Dynamic Bracketing Engine
                            </h4>
                            <p className="text-xs text-slate-500 leading-relaxed m-0">
                                Single elimination, double elimination with consolation, and round-robin pools with automated seedings and match progression.
                            </p>
                        </Card>

                        {/* Feature 3 */}
                        <Card className="rounded-2xl border-slate-200 hover:shadow-md transition-shadow">
                            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#064E2B] flex items-center justify-center mb-4 text-xl font-bold">
                                <SafetyCertificateOutlined />
                            </div>
                            <h4 className="text-base font-bold text-slate-900 mb-1">
                                Player Badges & Milestones
                            </h4>
                            <p className="text-xs text-slate-500 leading-relaxed m-0">
                                Unlockable badges for tournament podiums, winning streaks, ace counters, and career match milestones that reward players.
                            </p>
                        </Card>

                        {/* Feature 4 */}
                        <Card className="rounded-2xl border-slate-200 hover:shadow-md transition-shadow">
                            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#064E2B] flex items-center justify-center mb-4 text-xl font-bold">
                                <MobileOutlined />
                            </div>
                            <h4 className="text-base font-bold text-slate-900 mb-1">
                                Courtside Mobile Scorer
                            </h4>
                            <p className="text-xs text-slate-500 leading-relaxed m-0">
                                Referees and players enter point-by-point scores right from the court, instantly updating spectator brackets on the web.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CALL TO ACTION BANNER */}
            <section className="py-20 bg-gradient-to-r from-emerald-950 via-[#064E2B] to-[#032e19] text-white text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
                    <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-lime-300 text-xs font-bold tracking-wide border border-white/10">
                        🏓 Ready for your next tournament?
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                        Join SamPickle Today
                    </h2>
                    <p className="text-emerald-100/90 text-base sm:text-lg max-w-xl mx-auto">
                        Whether you are an organizer planning an upcoming championship or a player ready to collect milestone badges, create your account and get on court.
                    </p>

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href={register().url}>
                            <Button
                                type="primary"
                                size="large"
                                icon={<RocketOutlined />}
                                className="h-12 px-8 text-base font-bold bg-lime-500 hover:bg-lime-400 text-emerald-950 border-none shadow-lg shadow-lime-950/30"
                            >
                                Register Now
                            </Button>
                        </Link>
                        <Link href={login().url}>
                            <Button
                                size="large"
                                className="h-12 px-7 text-base font-semibold bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-md"
                            >
                                Sign In
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}

// Ensure Inertia uses page's self-contained layout rendering
Welcome.layout = (page: React.ReactNode) => page;
