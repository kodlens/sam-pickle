import React, { useState, useEffect } from 'react';
import { Link, router, usePage } from '@inertiajs/react';
import {
    Layout,
    Menu,
    Button,
    Avatar,
    Dropdown,
    Tag,
    Breadcrumb,
    Progress,
    Tooltip,
    Drawer,
} from 'antd';
import type { MenuProps } from 'antd';
import {
    DashboardOutlined,
    TrophyOutlined,
    SafetyCertificateOutlined,
    HistoryOutlined,
    SearchOutlined,
    SettingOutlined,
    SwapOutlined,
    LogoutOutlined,
    HomeOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    FireFilled,
    TeamOutlined,
    CalendarOutlined,
    RocketOutlined,
    CloseOutlined,
} from '@ant-design/icons';
import SamPickleLogo from '@/components/sampickle-logo';
import type { BreadcrumbItem, User } from '@/types';
import { home } from '@/routes';

const { Header, Sider, Content } = Layout;

export interface PlayerLayoutProps {
    children: React.ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default function PlayerLayout({
    children,
    breadcrumbs = [],
}: PlayerLayoutProps) {
    const [collapsed, setCollapsed] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isMobileScreen, setIsMobileScreen] = useState(() =>
        typeof window !== 'undefined' ? window.innerWidth < 1024 : false
    );

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 1024;
            setIsMobileScreen(mobile);
            if (!mobile) {
                setMobileOpen(false);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleToggleSidebar = () => {
        if (isMobileScreen) {
            setMobileOpen((prev) => !prev);
        } else {
            setCollapsed((prev) => !prev);
        }
    };

    const page = usePage<{ auth?: { user?: User } }>();
    const user = page.props.auth?.user;
    const player = user?.player_profile;

    const handleLogout = () => {
        router.post('/logout');
    };

    const handleSwitchToOrganizer = () => {
        router.post('/switch-role', { role: 'organizer' });
    };

    const skillRating = player?.skill_rating || '3.5';
    const milestonePoints = player?.milestone_points ?? 320;
    const sexLabel = user?.sex ? (user.sex.toLowerCase() === 'male' ? 'M' : 'F') : null;

    const sidebarMenuItems: MenuProps['items'] = [
        {
            key: 'group-competition',
            type: 'group',
            label: (
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                    Competition & Courts
                </span>
            ),
            children: [
                {
                    key: '/player/dashboard',
                    icon: <DashboardOutlined className="text-emerald-400" />,
                    label: <Link href="/player/dashboard" onClick={() => setMobileOpen(false)}>Dashboard Overview</Link>,
                },
                {
                    key: '/player/my-tournaments',
                    icon: <TrophyOutlined className="text-amber-400" />,
                    label: (
                        <div className="flex items-center justify-between pr-2" onClick={() => setMobileOpen(false)}>
                            <span>My Tournaments</span>
                            <Tag color="success" className="m-0 text-[10px] font-bold px-1.5 py-0 leading-none">
                                2 Live
                            </Tag>
                        </div>
                    ),
                },
                {
                    key: '/player/queue',
                    icon: <CalendarOutlined className="text-sky-400" />,
                    label: (
                        <div className="flex items-center justify-between pr-2" onClick={() => setMobileOpen(false)}>
                            <span>Court Schedule</span>
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                            </span>
                        </div>
                    ),
                },
            ],
        },
        {
            key: 'group-performance',
            type: 'group',
            label: (
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                    Player Performance
                </span>
            ),
            children: [
                {
                    key: '/player/ratings',
                    icon: <FireFilled className="text-rose-400" />,
                    label: (
                        <div className="flex items-center justify-between pr-2" onClick={() => setMobileOpen(false)}>
                            <span>DUPR & Ratings</span>
                            <span className="text-[11px] font-mono font-bold text-amber-300">
                                {skillRating}
                            </span>
                        </div>
                    ),
                },
                {
                    key: '/player/history',
                    icon: <HistoryOutlined className="text-indigo-400" />,
                    label: <span onClick={() => setMobileOpen(false)}>Match Scorecards</span>,
                },
                {
                    key: '/player/badges',
                    icon: <SafetyCertificateOutlined className="text-emerald-400" />,
                    label: (
                        <div className="flex items-center justify-between pr-2" onClick={() => setMobileOpen(false)}>
                            <span>Milestone Badges</span>
                            <Tag color="warning" className="m-0 text-[10px] font-bold px-1.5 py-0 leading-none">
                                4 Unlocked
                            </Tag>
                        </div>
                    ),
                },
            ],
        },
        {
            key: 'group-community',
            type: 'group',
            label: (
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                    Community & Events
                </span>
            ),
            children: [
                {
                    key: '/tournaments',
                    icon: <SearchOutlined className="text-teal-400" />,
                    label: <a href="/#tournaments" onClick={() => setMobileOpen(false)}>Find Tournaments</a>,
                },
                {
                    key: '/player/partners',
                    icon: <TeamOutlined className="text-cyan-400" />,
                    label: <span onClick={() => setMobileOpen(false)}>Partner Finder</span>,
                },
            ],
        },
    ];

    const userDropdownItems: MenuProps['items'] = [
        {
            key: 'info',
            label: (
                <div className="py-1 px-1">
                    <p className="font-bold text-slate-800 text-sm m-0 leading-tight">{user?.name}</p>
                    <p className="text-xs text-slate-500 m-0 mt-0.5">{user?.email}</p>
                    <div className="mt-2 flex items-center gap-1.5 flex-wrap">
                        <Tag color="cyan" className="text-[10px] font-bold m-0">
                            Skill: {skillRating}
                        </Tag>
                        {sexLabel && (
                            <Tag color="geekblue" className="text-[10px] font-bold m-0">
                                Sex: {sexLabel}
                            </Tag>
                        )}
                        <Tag color="gold" className="text-[10px] font-bold m-0">
                            Silver Dink
                        </Tag>
                    </div>
                </div>
            ),
            disabled: true,
        },
        { type: 'divider' },
        ...(user?.can_organize
            ? [
                  {
                      key: 'switch-organizer',
                      icon: <SwapOutlined className="text-emerald-700" />,
                      label: (
                          <span onClick={handleSwitchToOrganizer} className="font-semibold text-emerald-800">
                              Switch to Organizer Portal
                          </span>
                      ),
                  },
              ]
            : []),
        {
            key: 'settings',
            icon: <SettingOutlined />,
            label: <Link href="/settings/profile">Account Settings</Link>,
        },
        { type: 'divider' },
        {
            key: 'logout',
            icon: <LogoutOutlined className="text-red-500" />,
            label: (
                <span onClick={handleLogout} className="text-red-600 font-semibold">
                    Sign Out
                </span>
            ),
        },
    ];

    // Render internal sidebar content (used both in Desktop Sider and Mobile Drawer)
    const renderSidebarInner = (isDrawer = false) => (
        <div className="flex flex-col h-full bg-[#0B132B] text-white">
            {/* Header */}
            <div className="h-16 flex items-center justify-between px-4 border-b border-slate-800/80 bg-slate-900/60 shrink-0">
                <Link href={home().url} className="flex items-center gap-2 overflow-hidden" onClick={() => setMobileOpen(false)}>
                    <SamPickleLogo variant="light" size="sm" showBadge={false} />
                </Link>
                {(!collapsed || isDrawer) ? (
                    <div className="flex items-center gap-2">
                        <Tag color="green" className="m-0 text-[10px] font-extrabold tracking-wider uppercase border-none bg-emerald-500/20 text-emerald-400">
                            Player Hub
                        </Tag>
                        {isDrawer && (
                            <Button
                                type="text"
                                icon={<CloseOutlined className="text-slate-400 hover:text-white" />}
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center justify-center p-1 h-8 w-8"
                            />
                        )}
                    </div>
                ) : null}
            </div>

            {/* Passport Card (when expanded or in drawer) */}
            {(!collapsed || isDrawer) ? (
                <div className="m-3 p-3.5 bg-gradient-to-br from-slate-900 via-slate-800/95 to-emerald-950/60 rounded-2xl border border-slate-700/80 shadow-inner text-white space-y-3 shrink-0">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5 min-w-0">
                            <div className="relative shrink-0">
                                <Avatar
                                    size={40}
                                    className="bg-emerald-700 text-white font-black ring-2 ring-emerald-400/40 text-sm shadow-md"
                                >
                                    {user?.name?.charAt(0).toUpperCase()}
                                </Avatar>
                                <span className="absolute -bottom-1 -right-1 bg-amber-400 text-slate-950 text-[9px] font-black rounded-full px-1 shadow-xs">
                                    ★
                                </span>
                            </div>
                            <div className="overflow-hidden min-w-0">
                                <span className="text-xs font-black truncate block text-white leading-tight">
                                    {user?.name}
                                </span>
                                <span className="text-[10px] text-emerald-400 font-bold block truncate mt-0.5">
                                    Level 3 • Silver Dink
                                </span>
                            </div>
                        </div>

                        <div className="text-right shrink-0">
                            <span className="text-[9px] uppercase font-bold text-slate-400 block tracking-wider">
                                DUPR
                            </span>
                            <span className="text-xs font-mono font-black text-amber-300 bg-amber-400/10 px-1.5 py-0.5 rounded border border-amber-400/30">
                                {skillRating}
                            </span>
                        </div>
                    </div>

                    <div className="space-y-1">
                        <div className="flex justify-between text-[10px] text-slate-400 font-medium">
                            <span>Milestone XP</span>
                            <span className="text-slate-300 font-mono font-bold">
                                {milestonePoints} / 500
                            </span>
                        </div>
                        <Progress
                            percent={Math.min(100, Math.round((milestonePoints / 500) * 100))}
                            size={['100%', 5]}
                            strokeColor={{
                                '0%': '#10B981',
                                '100%': '#84CC16',
                            }}
                            showInfo={false}
                            className="m-0"
                        />
                    </div>

                    <div className="grid grid-cols-3 gap-1 pt-2 border-t border-slate-700/60 text-center">
                        <div className="bg-slate-900/60 rounded-lg p-1.5">
                            <span className="text-[10px] text-slate-400 block">Matches</span>
                            <span className="text-xs font-black text-white font-mono">18</span>
                        </div>
                        <div className="bg-slate-900/60 rounded-lg p-1.5">
                            <span className="text-[10px] text-slate-400 block">Win %</span>
                            <span className="text-xs font-black text-emerald-400 font-mono">67%</span>
                        </div>
                        <div className="bg-slate-900/60 rounded-lg p-1.5">
                            <span className="text-[10px] text-slate-400 block">Badges</span>
                            <span className="text-xs font-black text-amber-400 font-mono">4</span>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="py-4 flex flex-col items-center border-b border-slate-800/80 shrink-0">
                    <Tooltip title={`${user?.name} (DUPR ${skillRating})`} placement="right">
                        <Avatar
                            size={40}
                            className="bg-emerald-700 text-white font-black ring-2 ring-emerald-400/40 text-sm cursor-pointer shadow-md"
                        >
                            {user?.name?.charAt(0).toUpperCase()}
                        </Avatar>
                    </Tooltip>
                    <Tag color="cyan" className="mt-2 text-[9px] font-mono font-bold m-0 px-1">
                        {skillRating}
                    </Tag>
                </div>
            )}

            {/* Navigation Menu (Scrollable) */}
            <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden py-2">
                <Menu
                    theme="dark"
                    mode="inline"
                    selectedKeys={[window.location.pathname]}
                    items={sidebarMenuItems}
                    style={{ backgroundColor: 'transparent' }}
                    className="border-none font-semibold text-sm"
                />
            </div>

            {/* Bottom Actions Widget */}
            {(!collapsed || isDrawer) ? (
                <div className="p-3 border-t border-slate-800/80 space-y-2.5 bg-slate-900/40 shrink-0 mt-auto">
                    <div className="p-2.5 bg-slate-900/80 rounded-xl border border-slate-800 flex items-start gap-2.5 text-xs">
                        <span className="flex h-2.5 w-2.5 relative mt-1 shrink-0">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                        </span>
                        <div className="flex-1 min-w-0">
                            <span className="font-bold text-white text-[11px] block leading-tight">
                                Court Radar Active
                            </span>
                            <span className="text-[10px] text-slate-400 leading-tight block mt-0.5 truncate">
                                Listening for match queue callouts
                            </span>
                        </div>
                    </div>

                    {user?.can_organize ? (
                        <Button
                            block
                            icon={<SwapOutlined />}
                            onClick={() => {
                                setMobileOpen(false);
                                handleSwitchToOrganizer();
                            }}
                            className="h-9 font-bold text-xs bg-emerald-950/60 hover:bg-emerald-900/60 text-emerald-300 border-emerald-700/60 hover:border-emerald-500 flex items-center justify-center gap-1.5"
                        >
                            Switch to Organizer Portal
                        </Button>
                    ) : (
                        <Button
                            block
                            icon={<RocketOutlined className="text-amber-400" />}
                            onClick={() => {
                                setMobileOpen(false);
                                router.visit('/register?role=organizer');
                            }}
                            className="h-9 font-bold text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700 flex items-center justify-center gap-1.5"
                        >
                            Host Your Own Tournament
                        </Button>
                    )}
                </div>
            ) : (
                <div className="p-2 border-t border-slate-800/80 flex flex-col items-center gap-2 shrink-0 mt-auto">
                    {user?.can_organize && (
                        <Tooltip title="Switch to Organizer Mode" placement="right">
                            <Button
                                type="text"
                                icon={<SwapOutlined className="text-emerald-400 text-base" />}
                                onClick={handleSwitchToOrganizer}
                                className="hover:bg-slate-800"
                            />
                        </Tooltip>
                    )}
                    <Tooltip title="Sign Out" placement="right">
                        <Button
                            type="text"
                            icon={<LogoutOutlined className="text-red-400 text-base" />}
                            onClick={handleLogout}
                            className="hover:bg-slate-800"
                        />
                    </Tooltip>
                </div>
            )}
        </div>
    );

    return (
        <Layout hasSider={!isMobileScreen} className="min-h-screen bg-slate-100 font-sans w-full overflow-x-hidden">
            {/* DESKTOP SIDEBAR (Visible only on lg and up) */}
            {!isMobileScreen && (
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={collapsed}
                    width={270}
                    collapsedWidth={80}
                    style={{
                        backgroundColor: '#0B132B',
                        height: '100vh',
                        position: 'sticky',
                        top: 0,
                        left: 0,
                    }}
                    className="shadow-xl z-30 border-r border-slate-800/80 flex flex-col shrink-0"
                >
                    {renderSidebarInner(false)}
                </Sider>
            )}

            {/* MOBILE DRAWER (Only on mobile < lg) */}
            <Drawer
                placement="left"
                open={mobileOpen}
                onClose={() => setMobileOpen(false)}
                width={285}
                styles={{
                    body: { padding: 0, backgroundColor: '#0B132B', height: '100%' },
                    header: { display: 'none' },
                }}
            >
                {renderSidebarInner(true)}
            </Drawer>

            {/* MAIN CONTENT AREA */}
            <Layout className="flex flex-col flex-1 min-w-0 w-full overflow-x-hidden">
                {/* Header Bar */}
                <Header
                    style={{ backgroundColor: '#ffffff', lineHeight: 'normal' }}
                    className="sticky top-0 z-20 flex items-center justify-between h-16 px-3 sm:px-6 border-b border-slate-200/90 shadow-xs w-full"
                >
                    {/* Left: Sidebar Toggle + Mobile Brand Logo + Breadcrumbs */}
                    <div className="flex items-center gap-2 sm:gap-4 min-w-0">
                        {/* Unified Sidebar Toggle */}
                        <Button
                            type="text"
                            icon={
                                isMobileScreen ? (
                                    <MenuUnfoldOutlined className="text-lg" />
                                ) : collapsed ? (
                                    <MenuUnfoldOutlined className="text-base" />
                                ) : (
                                    <MenuFoldOutlined className="text-base" />
                                )
                            }
                            onClick={handleToggleSidebar}
                            title={isMobileScreen ? 'Open Navigation Menu' : collapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
                            aria-label="Toggle Sidebar Menu"
                            className="text-slate-700 hover:text-slate-900 flex items-center justify-center p-2 rounded-lg"
                        />

                        {/* Mobile Logo Anchor */}
                        {isMobileScreen && (
                            <div className="flex items-center">
                                <Link href={home().url}>
                                    <SamPickleLogo size="sm" showBadge={false} />
                                </Link>
                            </div>
                        )}

                        {/* Breadcrumbs (Hidden on phone screens to prevent overflow) */}
                        {breadcrumbs.length > 0 && (
                            <div className="hidden md:flex min-w-0">
                                <Breadcrumb
                                    items={[
                                        {
                                            title: (
                                                <Link href="/player/dashboard" className="text-slate-500 hover:text-emerald-700">
                                                    <HomeOutlined />
                                                </Link>
                                            ),
                                        },
                                        ...breadcrumbs.map((b) => ({
                                            title: b.href ? (
                                                <Link href={b.href} className="text-slate-600 hover:text-emerald-700">
                                                    {b.title}
                                                </Link>
                                            ) : (
                                                <span className="font-semibold text-slate-800 truncate">{b.title}</span>
                                            ),
                                        })),
                                    ]}
                                />
                            </div>
                        )}
                    </div>

                    {/* Right: Actions */}
                    <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                        {user?.can_organize && (
                            <Button
                                icon={<SwapOutlined />}
                                onClick={handleSwitchToOrganizer}
                                className="hidden md:inline-flex items-center font-bold text-xs text-emerald-800 border-emerald-300 bg-emerald-50 hover:bg-emerald-100"
                            >
                                Switch to Organizer
                            </Button>
                        )}

                        <Tag color="cyan" className="font-bold text-xs m-0 px-2 py-0.5 hidden sm:inline-block">
                            Silver Dink
                        </Tag>

                        <Dropdown menu={{ items: userDropdownItems }} placement="bottomRight" trigger={['click']}>
                            <button className="flex items-center gap-1.5 sm:gap-2 p-1 pl-1.5 sm:pl-2 pr-2 sm:pr-3 rounded-full border border-slate-200 hover:border-emerald-600 bg-white transition-all cursor-pointer">
                                <Avatar size={28} className="bg-emerald-800 text-white font-bold text-xs">
                                    {user?.name?.charAt(0).toUpperCase()}
                                </Avatar>
                                <span className="text-xs font-semibold text-slate-700 hidden md:inline max-w-[120px] truncate">
                                    {user?.name}
                                </span>
                            </button>
                        </Dropdown>
                    </div>
                </Header>

                {/* Page Content Container */}
                <Content className="p-3 sm:p-6 lg:p-8 flex-1 min-w-0 w-full overflow-x-hidden">
                    <div className="max-w-7xl mx-auto w-full min-w-0">
                        {children}
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
}
