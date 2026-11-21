import React, { useState } from 'react';
import { Link, router, usePage } from '@inertiajs/react';
import {
    Layout,
    Menu,
    Button,
    Avatar,
    Dropdown,
    Tag,
    Space,
    Divider,
    Breadcrumb,
    Typography,
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
    UserOutlined,
    LogoutOutlined,
    HomeOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    BellOutlined,
    CheckCircleFilled,
} from '@ant-design/icons';
import SamPickleLogo from '@/components/sampickle-logo';
import type { BreadcrumbItem, User } from '@/types';
import { home } from '@/routes';

const { Header, Sider, Content } = Layout;
const { Text } = Typography;

export interface OrganizerLayoutProps {
    children: React.ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default function OrganizerLayout({
    children,
    breadcrumbs = [],
}: OrganizerLayoutProps) {
    const [collapsed, setCollapsed] = useState(false);
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
            icon: <DashboardOutlined />,
            label: <Link href="/organizer/dashboard">Dashboard</Link>,
        },
        {
            key: '/organizer/tournaments',
            icon: <TrophyOutlined />,
            label: <span>Tournaments & Brackets</span>,
        },
        {
            key: '/organizer/courts',
            icon: <CalendarOutlined />,
            label: <span>Courts & Schedule</span>,
        },
        {
            key: '/organizer/mobile-referees',
            icon: <MobileOutlined />,
            label: <span>Mobile Scorer Access</span>,
        },
        {
            key: '/organizer/members',
            icon: <TeamOutlined />,
            label: <span>Participants & Teams</span>,
        },
        {
            key: '/organizer/billing',
            icon: <DollarOutlined />,
            label: <span>Subscription & Billing</span>,
        },
        { type: 'divider' },
        {
            key: '/settings/profile',
            icon: <SettingOutlined />,
            label: <Link href="/settings/profile">Settings</Link>,
        },
    ];

    const userDropdownItems: MenuProps['items'] = [
        {
            key: 'info',
            label: (
                <div className="py-1">
                    <p className="font-bold text-slate-800 text-sm m-0 leading-tight">{user?.name}</p>
                    <p className="text-xs text-slate-500 m-0">{user?.email}</p>
                    <Tag color="green" className="mt-1 text-[10px] font-bold">
                        Organizer Mode
                    </Tag>
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

    return (
        <Layout className="min-h-screen bg-slate-100 font-sans">
            {/* ORGANIZER SIDEBAR */}
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                width={260}
                style={{ backgroundColor: '#064E2B' }}
                className="shadow-md z-30"
            >
                {/* Brand / Logo Top */}
                <div className="h-16 flex items-center justify-between px-4 border-b border-emerald-800/80">
                    <Link href={home().url} className="flex items-center overflow-hidden">
                        <SamPickleLogo variant="light" size="sm" showBadge={false} />
                    </Link>
                </div>

                {/* Organization Card Banner */}
                {!collapsed && (
                    <div className="px-4 py-3 mx-3 my-3 bg-emerald-900/60 rounded-xl border border-emerald-700/50 text-white">
                        <div className="text-[10px] uppercase font-bold text-lime-400 tracking-wider">
                            Organizer Portal
                        </div>
                        <div className="text-sm font-black truncate mt-0.5">
                            {org?.organization_name || 'My Organization'}
                        </div>
                        <div className="text-[11px] text-emerald-200 flex items-center gap-1 mt-0.5">
                            <CheckCircleFilled className="text-lime-400 text-xs" />
                            <span>Pro Plan &bull; 14-Day Trial</span>
                        </div>
                    </div>
                )}

                {/* Navigation Menu */}
                <div className="py-2">
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={[window.location.pathname]}
                        items={sidebarMenuItems}
                        style={{ backgroundColor: '#064E2B' }}
                        className="border-none font-semibold text-sm"
                    />
                </div>
            </Sider>

            {/* MAIN CONTENT AREA */}
            <Layout className="flex flex-col flex-1">
                {/* Header Bar */}
                <Header
                    style={{ backgroundColor: '#ffffff', lineHeight: 'normal' }}
                    className="sticky top-0 z-20 flex items-center justify-between h-16 px-4 sm:px-6 border-b border-slate-200/90 shadow-xs"
                >
                    {/* Left: Collapse toggle + Breadcrumb */}
                    <div className="flex items-center gap-4">
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            className="text-slate-600 hover:text-slate-900 text-base flex items-center justify-center"
                        />

                        {breadcrumbs.length > 0 && (
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
                                            <span className="font-semibold text-slate-800">{b.title}</span>
                                        ),
                                    })),
                                ]}
                            />
                        )}
                    </div>

                    {/* Right: Quick actions & user menu */}
                    <div className="flex items-center gap-3">
                        {/* 1-Click Role Switcher */}
                        <Button
                            icon={<SwapOutlined />}
                            onClick={handleSwitchToPlayer}
                            className="hidden sm:inline-flex items-center font-bold text-xs text-emerald-800 border-emerald-300 bg-emerald-50 hover:bg-emerald-100"
                        >
                            Switch to Player Mode
                        </Button>

                        <Tag color="success" className="hidden md:inline-block font-bold text-xs m-0 px-2 py-0.5">
                            Pro Trial Active
                        </Tag>

                        <Dropdown menu={{ items: userDropdownItems }} placement="bottomRight" trigger={['click']}>
                            <button className="flex items-center gap-2 p-1 pl-2 pr-3 rounded-full border border-slate-200 hover:border-emerald-600 bg-white transition-all cursor-pointer">
                                <Avatar size={30} className="bg-[#064E2B] text-white font-bold">
                                    {user?.name?.charAt(0).toUpperCase()}
                                </Avatar>
                                <span className="text-xs font-semibold text-slate-700 hidden sm:inline max-w-[120px] truncate">
                                    {user?.name}
                                </span>
                            </button>
                        </Dropdown>
                    </div>
                </Header>

                {/* Page Content */}
                <Content className="p-4 sm:p-6 lg:p-8 flex-1 overflow-y-auto">
                    <div className="max-w-7xl mx-auto w-full">
                        {children}
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
}
