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
} from 'antd';
import type { MenuProps } from 'antd';
import {
    DashboardOutlined,
    UsergroupAddOutlined,
    ShopOutlined,
    CreditCardOutlined,
    SettingOutlined,
    LogoutOutlined,
    HomeOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    CloseOutlined,
} from '@ant-design/icons';
import SamPickleLogo from '@/components/sampickle-logo';
import type { BreadcrumbItem, User } from '@/types';
import { home } from '@/routes';

const { Header, Sider, Content } = Layout;

export interface AdminLayoutProps {
    children: React.ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default function AdminLayout({
    children,
    breadcrumbs = [],
}: AdminLayoutProps) {
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

    const handleLogout = () => {
        router.post('/logout');
    };

    const sidebarMenuItems: MenuProps['items'] = [
        {
            key: '/admin/dashboard',
            icon: <DashboardOutlined className="text-red-400" />,
            label: <Link href="/admin/dashboard" onClick={() => setMobileOpen(false)}>System Overview</Link>,
        },
        {
            key: '/admin/users',
            icon: <UsergroupAddOutlined className="text-amber-400" />,
            label: <span onClick={() => setMobileOpen(false)}>User Management</span>,
        },
        {
            key: '/admin/organizations',
            icon: <ShopOutlined className="text-emerald-400" />,
            label: <span onClick={() => setMobileOpen(false)}>Organizers & Clubs</span>,
        },
        {
            key: '/admin/subscriptions',
            icon: <CreditCardOutlined className="text-sky-400" />,
            label: <span onClick={() => setMobileOpen(false)}>Subscriptions & Payouts</span>,
        },
        { type: 'divider' },
        {
            key: '/settings/profile',
            icon: <SettingOutlined />,
            label: <Link href="/settings/profile" onClick={() => setMobileOpen(false)}>System Settings</Link>,
        },
    ];

    const userDropdownItems: MenuProps['items'] = [
        {
            key: 'info',
            label: (
                <div className="py-1 px-1">
                    <p className="font-bold text-slate-800 text-sm m-0 leading-tight">{user?.name}</p>
                    <p className="text-xs text-slate-500 m-0 mt-0.5">{user?.email}</p>
                    <div className="mt-1.5">
                        <Tag color="red" className="text-[10px] font-bold m-0">
                            Root Administrator
                        </Tag>
                    </div>
                </div>
            ),
            disabled: true,
        },
        { type: 'divider' },
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
        <div className="flex flex-col h-full bg-[#18181b] text-white">
            <div className="h-16 flex items-center justify-between px-4 border-b border-zinc-800 shrink-0">
                <Link href={home().url} className="flex items-center overflow-hidden" onClick={() => setMobileOpen(false)}>
                    <SamPickleLogo variant="light" size="sm" showBadge={false} />
                </Link>
                {(!collapsed || isDrawer) ? (
                    <div className="flex items-center gap-2">
                        <Tag color="red" className="m-0 text-[10px] font-extrabold uppercase border-none bg-red-600/30 text-red-300">
                            Admin
                        </Tag>
                        {isDrawer && (
                            <Button
                                type="text"
                                icon={<CloseOutlined className="text-zinc-400 hover:text-white" />}
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center justify-center p-1 h-8 w-8"
                            />
                        )}
                    </div>
                ) : null}
            </div>

            {(!collapsed || isDrawer) ? (
                <div className="px-4 py-2 mx-3 my-3 bg-red-950/40 rounded-xl border border-red-900/60 text-white shrink-0">
                    <div className="text-[10px] uppercase font-bold text-red-400 tracking-wider">
                        Administration
                    </div>
                    <div className="text-xs text-zinc-300 font-semibold mt-0.5">
                        Platform Control Center
                    </div>
                </div>
            ) : null}

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
                    width={250}
                    collapsedWidth={80}
                    style={{
                        backgroundColor: '#18181b',
                        height: '100vh',
                        position: 'sticky',
                        top: 0,
                        left: 0,
                    }}
                    className="shadow-md z-30 border-r border-zinc-800 flex flex-col shrink-0"
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
                    body: { padding: 0, backgroundColor: '#18181b', height: '100%' },
                    header: { display: 'none' },
                }}
            >
                {renderSidebarInner(true)}
            </Drawer>

            {/* MAIN CONTENT AREA */}
            <Layout className="flex flex-col flex-1 min-w-0 w-full overflow-x-hidden">
                <Header
                    style={{ backgroundColor: '#ffffff', lineHeight: 'normal' }}
                    className="sticky top-0 z-20 flex items-center justify-between h-16 px-3 sm:px-6 border-b border-slate-200/90 shadow-xs w-full"
                >
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
                                                <Link href="/admin/dashboard" className="text-slate-500 hover:text-red-700">
                                                    <HomeOutlined />
                                                </Link>
                                            ),
                                        },
                                        ...breadcrumbs.map((b) => ({
                                            title: b.href ? (
                                                <Link href={b.href} className="text-slate-600 hover:text-red-700">
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

                    <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                        <Tag color="red" className="font-bold text-xs m-0 px-2 py-0.5">
                            System Admin
                        </Tag>

                        <Dropdown menu={{ items: userDropdownItems }} placement="bottomRight" trigger={['click']}>
                            <button className="flex items-center gap-1.5 sm:gap-2 p-1 pl-1.5 sm:pl-2 pr-2 sm:pr-3 rounded-full border border-slate-200 hover:border-red-600 bg-white transition-all cursor-pointer">
                                <Avatar size={28} className="bg-red-700 text-white font-bold text-xs">
                                    A
                                </Avatar>
                                <span className="text-xs font-semibold text-slate-700 hidden md:inline max-w-[120px] truncate">
                                    {user?.name}
                                </span>
                            </button>
                        </Dropdown>
                    </div>
                </Header>

                <Content className="p-3 sm:p-6 lg:p-8 flex-1 min-w-0 w-full overflow-x-hidden">
                    <div className="max-w-7xl mx-auto w-full min-w-0">
                        {children}
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
}
