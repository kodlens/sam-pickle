import React, { useState } from 'react';
import { Link, router, usePage } from '@inertiajs/react';
import {
    Layout,
    Button,
    Dropdown,
    Avatar,
    Drawer,
    Breadcrumb,
    Divider,
    Tag,
    Badge,
} from 'antd';
import type { MenuProps } from 'antd';
import {
    MenuOutlined,
    CloseOutlined,
    UserOutlined,
    LogoutOutlined,
    DashboardOutlined,
    SettingOutlined,
    HomeOutlined,
    RightOutlined,
    TrophyOutlined,
    TeamOutlined,
    RocketOutlined,
    MobileOutlined,
    AppstoreOutlined,
    SafetyCertificateOutlined,
    AppleFilled,
    AndroidFilled,
    SearchOutlined,
    BellOutlined,
    ThunderboltFilled,
} from '@ant-design/icons';
import SamPickleLogo from '@/components/sampickle-logo';
import type { BreadcrumbItem, User } from '@/types';
import { dashboard, home, login, register } from '@/routes';

const { Header, Content, Footer } = Layout;

export interface AppLayoutProps {
    children: React.ReactNode;
    breadcrumbs?: BreadcrumbItem[];
    fullWidth?: boolean;
    activeNav?: string;
}

export default function AppLayout({
    children,
    breadcrumbs = [],
    fullWidth = false,
    activeNav = 'home',
}: AppLayoutProps) {
    const page = usePage<{ auth?: { user?: User } }>();
    const user = page.props.auth?.user;
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const handleLogout = () => {
        router.post('/logout');
    };

    const userMenuItems: MenuProps['items'] = [
        {
            key: 'user-info',
            label: (
                <div className="py-1 px-1">
                    <p className="text-sm font-semibold text-slate-800 leading-tight m-0">{user?.name}</p>
                    <p className="text-xs text-slate-500 truncate m-0 mt-0.5">{user?.email}</p>
                    <div className="mt-1.5 flex items-center gap-1.5">
                        <Tag color="green" className="text-[10px] m-0 font-bold px-1.5 py-0.5">Player 4.0+</Tag>
                        <Tag color="blue" className="text-[10px] m-0 font-bold px-1.5 py-0.5">Verified</Tag>
                    </div>
                </div>
            ),
            disabled: true,
        },
        { type: 'divider' },
        {
            key: 'dashboard',
            icon: <DashboardOutlined />,
            label: <Link href={dashboard().url}>Dashboard</Link>,
        },
        {
            key: 'tournaments',
            icon: <TrophyOutlined />,
            label: <a href="/#tournaments">My Tournaments</a>,
        },
        {
            key: 'badges',
            icon: <SafetyCertificateOutlined />,
            label: <a href="/#badges">Milestone Badges</a>,
        },
        {
            key: 'settings',
            icon: <SettingOutlined />,
            label: <Link href="/settings/profile">Settings</Link>,
        },
        { type: 'divider' },
        {
            key: 'logout',
            icon: <LogoutOutlined className="text-red-500" />,
            label: (
                <span className="text-red-600 font-medium" onClick={handleLogout}>
                    Sign Out
                </span>
            ),
        },
    ];

    const navigationLinks = [
        {
            key: 'tournaments',
            label: 'Tournaments',
            href: '/#tournaments',
            icon: <TrophyOutlined />,
            badge: <Tag color="green" className="ml-1 text-[10px] px-1 py-0 leading-none font-bold">Live</Tag>,
        },
        {
            key: 'bracketing',
            label: 'Bracketing',
            href: '/#bracketing',
            icon: <AppstoreOutlined />,
        },
        {
            key: 'badges',
            label: 'Player Badges',
            href: '/#badges',
            icon: <SafetyCertificateOutlined />,
            badge: <Tag color="gold" className="ml-1 text-[10px] px-1 py-0 leading-none font-bold">New</Tag>,
        },
        {
            key: 'mobile-app',
            label: 'Mobile Scorer',
            href: '/#mobile-app',
            icon: <MobileOutlined />,
        },
        {
            key: 'organizers',
            label: 'For Organizers',
            href: '/#organizers',
            icon: <TeamOutlined />,
        },
    ];

    return (
        <Layout className="min-h-screen bg-slate-50 flex flex-col font-sans w-full overflow-x-hidden">
            {/* LIVE MATCH TICKER (TOP BAR) */}
            <div className="bg-[#042816] text-emerald-100 text-xs py-1.5 px-4 sm:px-8 border-b border-emerald-900/60 z-50">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-2 truncate">
                        <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse shrink-0"></span>
                        <span className="font-bold text-white uppercase tracking-wider text-[11px]">
                            Live Match Ticker:
                        </span>
                        <span className="truncate text-emerald-200">
                            Spring Open Semifinals &bull; Court 2: Miller/Vance (11) vs. Patel/Gomez (9)
                        </span>
                    </div>
                    <a
                        href="/#tournaments"
                        className="hidden sm:inline-flex items-center gap-1 text-lime-300 hover:text-lime-200 font-bold shrink-0 transition-colors ml-4 text-[11px]"
                    >
                        <span>View Live Bracket</span>
                        <RightOutlined className="text-[10px]" />
                    </a>
                </div>
            </div>

            {/* MAIN NAVIGATION HEADER */}
            <Header
                style={{ backgroundColor: '#ffffff', lineHeight: 'normal' }}
                className="sticky top-0 z-40 flex items-center justify-between !h-17 px-4 sm:px-8 !bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs"
            >
                {/* Brand Logo & Desktop Navigation */}
                <div className="flex items-center gap-8">
                    <Link href={home().url} className="flex items-center hover:opacity-95 transition-opacity">
                        <SamPickleLogo size="md" />
                    </Link>

                    {/* Desktop Navigation Links */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navigationLinks.map((item) => (
                            <a
                                key={item.key}
                                href={item.href}
                                className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                                    activeNav === item.key
                                        ? 'text-[#064E2B] bg-emerald-50'
                                        : 'text-slate-600 hover:text-[#064E2B] hover:bg-slate-100'
                                }`}
                            >
                                <span className="text-[#064E2B] text-xs">{item.icon}</span>
                                <span>{item.label}</span>
                                {item.badge}
                            </a>
                        ))}
                    </nav>
                </div>

                {/* Right Action Buttons */}
                <div className="flex items-center gap-2 sm:gap-3">
                    {user ? (
                        <div className="flex items-center gap-3">
                            <Link href={dashboard().url} className="hidden sm:inline-block">
                                <Button type="default" icon={<DashboardOutlined />}>
                                    Dashboard
                                </Button>
                            </Link>

                            <Dropdown menu={{ items: userMenuItems }} placement="bottomRight" trigger={['click']}>
                                <button className="flex items-center gap-2 p-1 pl-2 pr-3 rounded-full border border-slate-200 hover:border-emerald-600 bg-white transition-all cursor-pointer">
                                    <Avatar
                                        size={30}
                                        src={user.avatar}
                                        icon={<UserOutlined />}
                                        className="bg-[#064E2B] text-white"
                                    >
                                        {user.name?.charAt(0).toUpperCase()}
                                    </Avatar>
                                    <span className="text-xs font-semibold text-slate-700 hidden sm:inline max-w-[100px] truncate">
                                        {user.name}
                                    </span>
                                </button>
                            </Dropdown>
                        </div>
                    ) : (
                        <div className="flex items-center gap-2">
                            <a href="/#tournaments" className="hidden sm:inline-block">
                                <Button
                                    icon={<SearchOutlined />}
                                    className="font-semibold text-slate-700 hover:text-[#064E2B]"
                                >
                                    Find Tournament
                                </Button>
                            </a>
                            <Link href={register().url}>
                                <Button
                                    type="primary"
                                    icon={<TrophyOutlined />}
                                    className="shadow-sm shadow-emerald-900/20 font-bold"
                                >
                                    Host an Event
                                </Button>
                            </Link>
                            <Link href={login().url} className="hidden md:inline-block">
                                <Button type="text" className="font-semibold text-slate-600 hover:text-[#064E2B]">
                                    Sign In
                                </Button>
                            </Link>
                        </div>
                    )}

                    {/* Mobile Menu Hamburger */}
                    <Button
                        type="text"
                        icon={<MenuOutlined className="text-lg" />}
                        className="lg:hidden flex items-center justify-center text-slate-700"
                        onClick={() => setMobileDrawerOpen(true)}
                        aria-label="Open Navigation Menu"
                    />
                </div>
            </Header>

            {/* Mobile Navigation Drawer */}
            <Drawer
                title={<SamPickleLogo size="sm" />}
                placement="right"
                onClose={() => setMobileDrawerOpen(false)}
                open={mobileDrawerOpen}
                closeIcon={<CloseOutlined />}
                width={310}
            >
                <div className="flex flex-col h-full justify-between py-2">
                    <div className="space-y-4">
                        {/* Live Ticker Card inside drawer */}
                        <div className="p-3 bg-emerald-950 text-white rounded-xl space-y-1">
                            <div className="flex items-center gap-1.5 text-xs font-bold text-lime-400">
                                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                                Spring Open Live
                            </div>
                            <p className="text-[11px] text-emerald-200 m-0">Court 2 &bull; Semifinals in progress</p>
                        </div>

                        <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-2">
                            Navigation
                        </div>
                        <div className="space-y-1">
                            {navigationLinks.map((item) => (
                                <a
                                    key={item.key}
                                    href={item.href}
                                    onClick={() => setMobileDrawerOpen(false)}
                                    className="flex items-center justify-between px-3 py-2.5 rounded-lg text-slate-700 font-semibold hover:bg-emerald-50 hover:text-[#064E2B] transition-colors"
                                >
                                    <span className="flex items-center gap-2.5">
                                        <span className="text-[#064E2B]">{item.icon}</span>
                                        {item.label}
                                    </span>
                                    <div className="flex items-center gap-1.5">
                                        {item.badge}
                                        <RightOutlined className="text-xs text-slate-400" />
                                    </div>
                                </a>
                            ))}
                        </div>

                        <Divider className="my-3" />

                        {/* Mobile App Download Teaser */}
                        <div className="rounded-xl bg-slate-50 p-3.5 border border-slate-200 space-y-2">
                            <span className="font-bold text-xs text-slate-900 flex items-center gap-1.5">
                                <MobileOutlined className="text-emerald-700" />
                                Courtside Mobile Scorer
                            </span>
                            <p className="text-[11px] text-slate-500 m-0 leading-relaxed">
                                Referees & players score matches point-by-point right at the court.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-2 pt-6">
                        {user ? (
                            <>
                                <Link
                                    href={dashboard().url}
                                    className="w-full"
                                    onClick={() => setMobileDrawerOpen(false)}
                                >
                                    <Button type="primary" block icon={<DashboardOutlined />}>
                                        Go to Dashboard
                                    </Button>
                                </Link>
                                <Button
                                    danger
                                    block
                                    icon={<LogoutOutlined />}
                                    onClick={() => {
                                        setMobileDrawerOpen(false);
                                        handleLogout();
                                    }}
                                >
                                    Sign Out
                                </Button>
                            </>
                        ) : (
                            <>
                                <Link
                                    href={login().url}
                                    className="w-full"
                                    onClick={() => setMobileDrawerOpen(false)}
                                >
                                    <Button block size="large">
                                        Sign In
                                    </Button>
                                </Link>
                                <Link
                                    href={register().url}
                                    className="w-full"
                                    onClick={() => setMobileDrawerOpen(false)}
                                >
                                    <Button type="primary" block size="large" icon={<TrophyOutlined />}>
                                        Host a Tournament
                                    </Button>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </Drawer>

            {/* Optional Breadcrumbs */}
            {breadcrumbs.length > 0 && (
                <div className="bg-white border-b border-slate-200 px-4 sm:px-8 py-2.5">
                    <div className="max-w-7xl mx-auto">
                        <Breadcrumb
                            items={[
                                {
                                    title: (
                                        <Link href={home().url} className="flex items-center gap-1 text-slate-500 hover:text-[#064E2B]">
                                            <HomeOutlined />
                                            <span>Home</span>
                                        </Link>
                                    ),
                                },
                                ...breadcrumbs.map((b) => ({
                                    title: b.href ? (
                                        <Link href={b.href} className="text-slate-600 hover:text-[#064E2B]">
                                            {b.title}
                                        </Link>
                                    ) : (
                                        <span className="text-slate-800 font-semibold">{b.title}</span>
                                    ),
                                })),
                            ]}
                        />
                    </div>
                </div>
            )}

            {/* Main Content */}
            <Content className="flex-1 w-full overflow-x-hidden min-w-0">
                {fullWidth ? (
                    children
                ) : (
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
                        {children}
                    </div>
                )}
            </Content>

            {/* FOOTER (OPTION 1: THE TOURNAMENT HUB WITH LIGHT SURFACE & MOBILE APP BANNER) */}
            <Footer className="bg-slate-100/90 text-slate-700 border-t border-slate-200 pt-12 pb-10 px-4 sm:px-8 lg:px-12 mt-auto">
                <div className="max-w-7xl mx-auto space-y-12">
                    {/* COURTSIDE MOBILE APP DOWNLOAD BANNER */}
                    <div className="bg-gradient-to-r from-[#064E2B] via-[#075F35] to-[#04341D] rounded-3xl p-6 sm:p-8 text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="space-y-2 text-center md:text-left">
                            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-lime-300 bg-white/10 px-3 py-1 rounded-full">
                                <MobileOutlined /> Dedicated Mobile App
                            </div>
                            <h3 className="text-xl sm:text-2xl font-black text-white m-0">
                                Scoring courtside today? Get the Mobile Companion.
                            </h3>
                            <p className="text-emerald-100/90 text-sm max-w-xl m-0">
                                Referees submit scores in real-time. Players receive push alerts when their court is called.
                            </p>
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
                            <a href="#mobile-app">
                                <button className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs transition-all cursor-pointer shadow-xs">
                                    <AppleFilled className="text-base" />
                                    <div className="text-left leading-tight">
                                        <div className="text-[9px] uppercase text-slate-500 font-semibold">Download on</div>
                                        <div>App Store</div>
                                    </div>
                                </button>
                            </a>
                            <a href="#mobile-app">
                                <button className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs transition-all cursor-pointer shadow-xs">
                                    <AndroidFilled className="text-base text-emerald-600" />
                                    <div className="text-left leading-tight">
                                        <div className="text-[9px] uppercase text-slate-500 font-semibold">Get it on</div>
                                        <div>Google Play</div>
                                    </div>
                                </button>
                            </a>
                        </div>
                    </div>

                    {/* FOOTER 4 CATEGORIZED COLUMNS */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pt-2">
                        {/* Brand Column */}
                        <div className="lg:col-span-2 space-y-4">
                            <SamPickleLogo size="lg" />
                            <p className="text-slate-600 text-sm leading-relaxed max-w-sm mt-3">
                                The home for pickleball tournaments, automated bracketing, and player milestone profiles. Track and submit live scores courtside with our mobile scorer app.
                            </p>
                            <div className="flex items-center gap-2 pt-1">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-[#064E2B] border border-emerald-200">
                                    🏓 Tournaments & Brackets
                                </span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                                    🎖️ Milestone Badges
                                </span>
                            </div>
                        </div>

                        {/* Tournaments Column */}
                        <div className="space-y-3">
                            <h4 className="text-slate-900 font-bold text-sm tracking-wider uppercase">
                                Tournaments & Brackets
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-600 list-none p-0 m-0">
                                <li>
                                    <a href="/#tournaments" className="hover:text-[#064E2B] transition-colors">
                                        Upcoming Tournaments
                                    </a>
                                </li>
                                <li>
                                    <a href="/#bracketing" className="hover:text-[#064E2B] transition-colors">
                                        Single & Double Elimination
                                    </a>
                                </li>
                                <li>
                                    <a href="/#bracketing" className="hover:text-[#064E2B] transition-colors">
                                        Round Robin Pool Play
                                    </a>
                                </li>
                                <li>
                                    <a href="/#tournaments" className="hover:text-[#064E2B] transition-colors">
                                        Live Court Displays
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Players Column */}
                        <div className="space-y-3">
                            <h4 className="text-slate-900 font-bold text-sm tracking-wider uppercase">
                                Players & Milestones
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-600 list-none p-0 m-0">
                                <li>
                                    <a href="/#badges" className="hover:text-[#064E2B] transition-colors">
                                        Player Profiles
                                    </a>
                                </li>
                                <li>
                                    <a href="/#badges" className="hover:text-[#064E2B] transition-colors">
                                        Milestone Badges
                                    </a>
                                </li>
                                <li>
                                    <a href="/#badges" className="hover:text-[#064E2B] transition-colors">
                                        Head-to-Head Records
                                    </a>
                                </li>
                                <li>
                                    <a href="/#mobile-app" className="hover:text-[#064E2B] transition-colors">
                                        Match Alerts
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Organizers & Mobile Column */}
                        <div className="space-y-3">
                            <h4 className="text-slate-900 font-bold text-sm tracking-wider uppercase">
                                Organizers & Scorer
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-600 list-none p-0 m-0">
                                <li>
                                    <a href="/#organizers" className="hover:text-[#064E2B] transition-colors">
                                        Host a Tournament
                                    </a>
                                </li>
                                <li>
                                    <a href="/#mobile-app" className="hover:text-[#064E2B] transition-colors">
                                        Courtside Scorer App
                                    </a>
                                </li>
                                <li>
                                    <Link href={register().url} className="hover:text-[#064E2B] transition-colors">
                                        Create Organizer Account
                                    </Link>
                                </li>
                                <li>
                                    <Link href={login().url} className="hover:text-[#064E2B] transition-colors">
                                        Sign In
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <Divider className="border-slate-300/80 my-4" />

                    {/* Bottom Row */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                        <div>
                            &copy; {new Date().getFullYear()} SamPickle. All rights reserved. Built for players, referees, and tournament organizers.
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="hover:text-slate-800 cursor-pointer">Tournament Rules</span>
                            <span>&bull;</span>
                            <span className="hover:text-slate-800 cursor-pointer">Privacy Policy</span>
                            <span>&bull;</span>
                            <span className="text-[#064E2B] font-bold">Serving Aces Everywhere 🏓</span>
                        </div>
                    </div>
                </div>
            </Footer>
        </Layout>
    );
}
