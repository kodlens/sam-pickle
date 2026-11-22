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
    Drawer,
    Tooltip,
} from 'antd';
import type { MenuProps } from 'antd';
import {
    DashboardOutlined,
    TrophyOutlined,
    CalendarOutlined,
    MobileOutlined,
    TeamOutlined,
    DollarOutlined,
    SettingOutlined,
    SwapOutlined,
    LogoutOutlined,
    HomeOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    CheckCircleFilled,
    CloseOutlined,
} from '@ant-design/icons';
import SamPickleLogo from '@/components/sampickle-logo';
import type { BreadcrumbItem, User } from '@/types';
import { home } from '@/routes';

const { Header, Sider, Content } = Layout;

export interface OrganizerLayoutProps {
    children: React.ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default function OrganizerLayout({
    children,
    breadcrumbs = [],
}: OrganizerLayoutProps) {
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
    const org = user?.organizer_profile;

    const handleLogout = () => {
        router.post('/logout');
    };

    const handleSwitchToPlayer = () => {
        router.post('/switch-role', { role: 'player' });
    };

    const sidebarMenuItems: MenuProps['items'] = [
        {
            key: '/organizer/dashboard',
            icon: <DashboardOutlined className="text-emerald-300" />,
            label: <Link href="/organizer/dashboard" onClick={() => setMobileOpen(false)}>Dashboard</Link>,
        },
        {
            key: '/organizer/tournaments',
            icon: <TrophyOutlined className="text-amber-400" />,
            label: <span onClick={() => setMobileOpen(false)}>Tournaments & Brackets</span>,
        },
        {
            key: '/organizer/courts',
            icon: <CalendarOutlined className="text-sky-300" />,
            label: <span onClick={() => setMobileOpen(false)}>Courts & Schedule</span>,
        },
        {
            key: '/organizer/mobile-referees',
            icon: <MobileOutlined className="text-lime-300" />,
            label: <span onClick={() => setMobileOpen(false)}>Mobile Scorer Access</span>,
        },
        {
            key: '/organizer/members',
            icon: <TeamOutlined className="text-teal-300" />,
            label: <span onClick={() => setMobileOpen(false)}>Participants & Teams</span>,
        },
        {
            key: '/organizer/billing',
            icon: <DollarOutlined className="text-amber-300" />,
            label: <span onClick={() => setMobileOpen(false)}>Subscription & Billing</span>,
        },
        { type: 'divider' },
        {
            key: '/settings/profile',
            icon: <SettingOutlined />,
            label: <Link href="/settings/profile" onClick={() => setMobileOpen(false)}>Settings</Link>,
        },
    ];

    const userDropdownItems: MenuProps['items'] = [
        {
            key: 'info',
            label: (
                <div className="py-1 px-1">
                    <p className="font-bold text-slate-800 text-sm m-0 leading-tight">{user?.name}</p>
                    <p className="text-xs text-slate-500 m-0 mt-0.5">{user?.email}</p>
                    <div className="mt-1.5 flex items-center gap-1.5 flex-wrap">
                        <Tag color="success" className="text-[10px] font-bold m-0">
                            Organizer Pro
                        </Tag>
                        <Tag color="geekblue" className="text-[10px] font-bold m-0">
                            14-Day Trial
                        </Tag>
                    </div>
                </div>
            ),
            disabled: true,
        },
        { type: 'divider' },
        {
            key: 'switch-player',
            icon: <SwapOutlined className="text-emerald-700" />,
            label: (
                <span onClick={handleSwitchToPlayer} className="font-semibold text-emerald-800">
                    Switch to Player Mode
                </span>
            ),
        },
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

    const renderSidebarInner = (isDrawer = false) => (
        <div className="flex flex-col h-full bg-[#064E2B] text-white">
            {/* Brand Header */}
            <div className="h-16 flex items-center justify-between px-4 border-b border-emerald-800/80 shrink-0">
                <Link href={home().url} className="flex items-center overflow-hidden" onClick={() => setMobileOpen(false)}>
                    <SamPickleLogo variant="light" size="sm" showBadge={false} />
                </Link>
                {(!collapsed || isDrawer) ? (
                    <div className="flex items-center gap-2">
                        <Tag color="success" className="m-0 text-[10px] font-extrabold tracking-wider uppercase border-none bg-lime-400 text-slate-950">
                            Director
                        </Tag>
                        {isDrawer && (
                            <Button
                                type="text"
                                icon={<CloseOutlined className="text-emerald-200 hover:text-white" />}
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center justify-center p-1 h-8 w-8"
                            />
                        )}
                    </div>
                ) : null}
            </div>

            {/* Organization Banner */}
            {(!collapsed || isDrawer) ? (
                <div className="px-4 py-3 mx-3 my-3 bg-emerald-900/60 rounded-xl border border-emerald-700/50 text-white shrink-0">
                    <div className="text-[10px] uppercase font-bold text-lime-400 tracking-wider">
                        Tournament Director Hub
                    </div>
                    <div className="text-sm font-black truncate mt-0.5">
                        {org?.organization_name || 'My Organization'}
                    </div>
                    <div className="text-[11px] text-emerald-200 flex items-center gap-1 mt-0.5">
                        <CheckCircleFilled className="text-lime-400 text-xs" />
                        <span>Pro Plan &bull; 14-Day Trial</span>
                    </div>
                </div>
            ) : null}

            {/* Menu */}
            <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden py-2">
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={[window.location.pathname]}
                    items={sidebarMenuItems}
                    style={{ backgroundColor: 'transparent' }}
                    className="border-none font-semibold text-sm"
                />
            </div>

            {/* Bottom Actions */}
            {(!collapsed || isDrawer) ? (
                <div className="p-3 border-t border-emerald-800/80 space-y-2 bg-emerald-950/40 shrink-0 mt-auto">
                    <Button
                        block
                        icon={<SwapOutlined />}
                        onClick={() => {
                            setMobileOpen(false);
                            handleSwitchToPlayer();
                        }}
                        className="h-9 font-bold text-xs bg-emerald-900/80 hover:bg-emerald-800 text-white border-emerald-700 flex items-center justify-center gap-1.5"
                    >
                        Switch to Player Mode
                    </Button>
                </div>
            ) : (
                <div className="p-2 border-t border-emerald-800/80 flex flex-col items-center gap-2 shrink-0 mt-auto">
                    <Tooltip title="Switch to Player Mode" placement="right">
                        <Button
                            type="text"
                            icon={<SwapOutlined className="text-emerald-200 text-base" />}
                            onClick={handleSwitchToPlayer}
                            className="hover:bg-emerald-800"
                        />
                    </Tooltip>
                    <Tooltip title="Sign Out" placement="right">
                        <Button
                            type="text"
                            icon={<LogoutOutlined className="text-red-400 text-base" />}
                            onClick={handleLogout}
                            className="hover:bg-emerald-800"
                        />
                    </Tooltip>
                </div>
            )}
        </div>
    );

    return (
        <Layout hasSider={!isMobileScreen} className="min-h-screen bg-slate-100 font-sans w-full overflow-x-hidden">
            {/* DESKTOP SIDEBAR */}
            {!isMobileScreen && (
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={collapsed}
                    width={260}
                    collapsedWidth={80}
                    style={{
                        backgroundColor: '#064E2B',
                        height: '100vh',
                        position: 'sticky',
                        top: 0,
                        left: 0,
                    }}
                    className="shadow-md z-30 border-r border-emerald-800/80 flex flex-col shrink-0"
                >
                    {renderSidebarInner(false)}
                </Sider>
            )}

            {/* MOBILE DRAWER */}
            <Drawer
                placement="left"
                open={mobileOpen}
                onClose={() => setMobileOpen(false)}
                width={280}
                styles={{
                    body: { padding: 0, backgroundColor: '#064E2B', height: '100%' },
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
                    {/* Left: Sidebar Toggle + Brand + Breadcrumbs */}
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

                        {breadcrumbs.length > 0 && (
                            <div className="hidden md:flex min-w-0">
                                <Breadcrumb
                                    items={[
                                        {
                                            title: (
                                                <Link href="/organizer/dashboard" className="text-slate-500 hover:text-emerald-700">
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

                    {/* Right: Quick actions & user menu */}
                    <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                        <Button
                            icon={<SwapOutlined />}
                            onClick={handleSwitchToPlayer}
                            className="hidden md:inline-flex items-center font-bold text-xs text-emerald-800 border-emerald-300 bg-emerald-50 hover:bg-emerald-100"
                        >
                            Switch to Player Mode
                        </Button>

                        <Tag color="success" className="hidden sm:inline-block font-bold text-xs m-0 px-2 py-0.5">
                            Pro Trial
                        </Tag>

                        <Dropdown menu={{ items: userDropdownItems }} placement="bottomRight" trigger={['click']}>
                            <button className="flex items-center gap-1.5 sm:gap-2 p-1 pl-1.5 sm:pl-2 pr-2 sm:pr-3 rounded-full border border-slate-200 hover:border-emerald-600 bg-white transition-all cursor-pointer">
                                <Avatar size={28} className="bg-[#064E2B] text-white font-bold text-xs">
                                    {user?.name?.charAt(0).toUpperCase()}
                                </Avatar>
                                <span className="text-xs font-semibold text-slate-700 hidden md:inline max-w-[120px] truncate">
                                    {user?.name}
                                </span>
                            </button>
                        </Dropdown>
                    </div>
                </Header>

                {/* Page Content */}
                <Content className="p-3 sm:p-6 lg:p-8 flex-1 min-w-0 w-full overflow-x-hidden">
                    <div className="max-w-7xl mx-auto w-full min-w-0">
                        {children}
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
}
