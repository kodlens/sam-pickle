import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { Button, Input, Checkbox, Alert } from 'antd';
import {
    LoginOutlined,
    MailOutlined,
    LockOutlined,
    ArrowLeftOutlined,
    TrophyOutlined,
    CheckCircleFilled,
    SafetyCertificateFilled,
    ThunderboltFilled,
} from '@ant-design/icons';
import SamPickleLogo from '@/components/sampickle-logo';

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/login');
    };

    const hasGlobalErrors = Object.keys(errors).length > 0;

    return (
        <div className="min-h-screen bg-white font-sans flex flex-col lg:flex-row">
            <Head title="Sign In - SamPickle" />

            {/* LEFT COLUMN: Dedicated Brand Showcase */}
            <div className="lg:w-5/12 bg-gradient-to-br from-[#064E2B] via-[#085C34] to-[#04331C] text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden">
                {/* Court geometry background illustration */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-10 left-10 w-96 h-96 border-2 border-white rounded-3xl -rotate-12" />
                    <div className="absolute bottom-10 right-10 w-80 h-80 border-2 border-dashed border-white rounded-full" />
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/40" />
                </div>

                {/* Top: Logo & Back Link */}
                <div className="relative z-10 space-y-6">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="inline-block hover:opacity-90 transition-opacity">
                            <SamPickleLogo size="lg" />
                        </Link>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-200 hover:text-white transition-colors bg-white/10 hover:bg-white/15 px-3 py-1.5 rounded-full backdrop-blur-sm"
                        >
                            <ArrowLeftOutlined />
                            <span>Tournament Hub</span>
                        </Link>
                    </div>

                    <div className="pt-8 lg:pt-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-400/30">
                            <ThunderboltFilled className="text-amber-300" />
                            <span>SamPickle Tournament Portal</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                            Welcome back to the <span className="text-amber-400">court</span>.
                        </h1>

                        <p className="text-emerald-100/90 text-sm sm:text-base mt-4 leading-relaxed max-w-md">
                            Sign in to check your active tournament brackets, report court scores, or access your player ratings and achievements.
                        </p>
                    </div>

                    <div className="pt-8 space-y-3">
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 flex items-start gap-3.5">
                            <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0">
                                <TrophyOutlined className="text-lg" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-sm m-0">Live Court Schedules & Brackets</h4>
                                <p className="text-xs text-emerald-100/80 m-0 mt-0.5">
                                    Instant access to your assigned court queue and next round matchups.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 flex items-start gap-3.5">
                            <div className="w-10 h-10 rounded-xl bg-emerald-400/20 text-emerald-300 flex items-center justify-center shrink-0">
                                <SafetyCertificateFilled className="text-lg" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-sm m-0">Organizer Director Controls</h4>
                                <p className="text-xs text-emerald-100/80 m-0 mt-0.5">
                                    Manage seeds, mobile scorekeepers, disputes, and tournament announcements.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Trust Badge */}
                <div className="relative z-10 pt-8 border-t border-white/15 text-xs text-emerald-200/80 flex items-center justify-between">
                    <span>Official Pickleball Tournament Engine</span>
                    <span className="font-semibold text-white">SamPickle v2.0</span>
                </div>
            </div>

            {/* RIGHT COLUMN: Dedicated Fullscreen Login Form */}
            <div className="lg:w-7/12 bg-slate-50/50 p-6 sm:p-12 lg:p-16 flex flex-col justify-center overflow-y-auto">
                <div className="max-w-md w-full mx-auto space-y-6">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                                Sign In
                            </h2>
                            <p className="text-xs sm:text-sm text-slate-500 mt-1">
                                Enter your credentials to access your account
                            </p>
                        </div>
                        <div className="text-right">
                            <span className="text-xs text-slate-400 block">New player or club?</span>
                            <Link href="/register" className="text-xs font-bold text-emerald-700 hover:text-emerald-800">
                                Register →
                            </Link>
                        </div>
                    </div>

                    {/* Card Form */}
                    <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                        {hasGlobalErrors && (
                            <Alert
                                message="Invalid credentials. Please verify your email and password."
                                type="error"
                                showIcon
                                className="rounded-xl text-xs"
                            />
                        )}

                        <form onSubmit={submit} className="space-y-4">
                            {/* Email */}
                            <div>
                                <label className="block text-xs font-semibold text-slate-700 mb-1">
                                    Email Address <span className="text-red-500">*</span>
                                </label>
                                <Input
                                    size="large"
                                    type="email"
                                    required
                                    autoFocus
                                    prefix={<MailOutlined className="text-slate-400" />}
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    placeholder="your.email@example.com"
                                    status={errors.email ? 'error' : ''}
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-xs mt-1 m-0">{errors.email}</p>
                                )}
                            </div>

                            {/* Password */}
                            <div>
                                <label className="block text-xs font-semibold text-slate-700 mb-1">
                                    Password <span className="text-red-500">*</span>
                                </label>
                                <Input.Password
                                    size="large"
                                    required
                                    prefix={<LockOutlined className="text-slate-400" />}
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    placeholder="••••••••"
                                    status={errors.password ? 'error' : ''}
                                />
                                {errors.password && (
                                    <p className="text-red-500 text-xs mt-1 m-0">{errors.password}</p>
                                )}
                            </div>

                            {/* Remember Me */}
                            <div className="flex items-center justify-between pt-1">
                                <Checkbox
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                    className="text-xs text-slate-600 font-medium"
                                >
                                    Remember me on this device
                                </Checkbox>
                            </div>

                            {/* Submit Button */}
                            <Button
                                type="primary"
                                htmlType="submit"
                                loading={processing}
                                icon={<LoginOutlined />}
                                size="large"
                                className="w-full h-12 font-bold text-sm bg-[#064E2B] hover:bg-[#075F35] text-white rounded-xl shadow-md shadow-emerald-950/20 border-none mt-2"
                            >
                                Sign In
                            </Button>
                        </form>
                    </div>

                    <div className="text-center text-xs text-slate-400">
                        Need help? Contact your tournament director or support.
                    </div>
                </div>
            </div>
        </div>
    );
}
