import React, { useState } from 'react';
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
    const page = usePage<{ auth?: { user?: User } }>();
    const user = page.props.auth?.user;
    const player = user?.player_profile;

    const handleLogout = () => {
        router.post('/logout');
    };

    const handleSwitchToOrganizer = () => {
        router.post('/switch-role', { role: 'organizer' });
    };

    const sidebarMenuItems: MenuProps['items'] = [
        {
            key: '/player/dashboard',
            icon: <DashboardOutlined />,
            label: <Link href="/player/dashboard">Dashboard</Link>,
        },
        {
            key: '/player/my-tournaments',
            icon: <TrophyOutlined />,
            label: <span>My Tournaments</span>,
        },
        {
            key: '/player/badges',
            icon: <SafetyCertificateOutlined />,
            label: <span>Milestone Badges</span>,
        },
        {
            key: '/player/history',
            icon: <HistoryOutlined />,
            label: <span>Match History & Stats</span>,
        },
        {
            key: '/tournaments',
            icon: <SearchOutlined />,
            label: <a href="/#tournaments">Find Tournaments</a>,
        },
        { type: 'divider' },
        {
            key: '/settings/profile',
            icon: <SettingOutlined />,
            label: <Link href="/settings/profile">Profile Settings</Link>,
        },
    ];

    const userDropdownItems: MenuProps['items'] = [
        {
            key: 'info',
            label: (
                <div className="py-1">
                    <p className="font-bold text-slate-800 text-sm m-0 leading-tight">{user?.name}</p>
                    <p className="text-xs text-slate-500 m-0">{user?.email}</p>
                    <div className="mt-1 flex items-center gap-1">
                        <Tag color="cyan" className="text-[10px] font-bold">
                            Rating {player?.skill_rating || '3.0'}
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

    return (
        <Layout className="min-h-screen bg-slate-100 font-sans">
            {/* PLAYER SIDEBAR */}
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                width={250}
                style={{ backgroundColor: '#0f172a' }}
                className="shadow-md z-30"
            >
                {/* Brand Logo Top */}
                <div className="h-16 flex items-center justify-between px-4 border-b border-slate-800">
                    <Link href={home().url} className="flex items-center overflow-hidden">
                        <SamPickleLogo variant="light" size="sm" showBadge={false} />
                    </Link>
                </div>

                {/* Player Profile Progress Card */}
                {!collapsed && (
                    <div className="px-4 py-3 mx-3 my-3 bg-slate-800/80 rounded-xl border border-slate-700 text-white space-y-1.5">
                        <div className="flex items-center justify-between">
                            <span className="text-[10px] uppercase font-bold text-lime-400 tracking-wider">
                                Player Card
                            </span>
                            <span className="text-xs font-mono font-bold text-slate-300">
                                {player?.skill_rating || '3.0'} Skill
                            </span>
                        </div>
                        <div className="text-sm font-black truncate">{user?.name}</div>
                        <div className="pt-1">
                            <div className="flex justify-between text-[10px] text-slate-400 mb-0.5">
                                <span>Milestone Progress</span>
                                <span className="text-lime-300 font-bold">Level 3</span>
                            </div>
                            <Progress percent={60} size="small" strokeColor="#84CC16" showInfo={false} />
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
                        style={{ backgroundColor: '#0f172a' }}
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
                    {/* Left: Collapse toggle + Breadcrumbs */}
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
                                            <span className="font-semibold text-slate-800">{b.title}</span>
                                        ),
                                    })),
                                ]}
                            />
                        )}
                    </div>

                    {/* Right: Actions */}
                    <div className="flex items-center gap-3">
                        {user?.can_organize && (
                            <Button
                                icon={<SwapOutlined />}
                                onClick={handleSwitchToOrganizer}
                                className="hidden sm:inline-flex items-center font-bold text-xs text-emerald-800 border-emerald-300 bg-emerald-50 hover:bg-emerald-100"
                            >
                                Switch to Organizer Portal
                            </Button>
                        )}

                        <Tag color="cyan" className="font-bold text-xs m-0 px-2 py-0.5">
                            Level: Silver Dink
                        </Tag>

                        <Dropdown menu={{ items: userDropdownItems }} placement="bottomRight" trigger={['click']}>
                            <button className="flex items-center gap-2 p-1 pl-2 pr-3 rounded-full border border-slate-200 hover:border-emerald-600 bg-white transition-all cursor-pointer">
                                <Avatar size={30} className="bg-slate-900 text-white font-bold">
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
