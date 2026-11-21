import React, { useEffect } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { Tag, Button, Input, Select, Alert } from 'antd';
import {
    UserOutlined,
    TrophyOutlined,
    RocketOutlined,
    ArrowLeftOutlined,
    MailOutlined,
    LockOutlined,
    BankOutlined,
    EnvironmentOutlined,
    CheckCircleFilled,
    SafetyCertificateFilled,
    ThunderboltFilled,
    TeamOutlined,
    FireFilled,
} from '@ant-design/icons';
import SamPickleLogo from '@/components/sampickle-logo';

export default function Register() {
    const { data, setData, post, processing, errors } = useForm({
        role: 'player',
        fname: '',
        mname: '',
        lname: '',
        sex: 'male',
        email: '',
        password: '',
        password_confirmation: '',
        organization_name: '',
        city: '',
        skill_rating: '3.5',
    });

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const roleParam = params.get('role');
        if (roleParam === 'organizer' || roleParam === 'player') {
            setData('role', roleParam);
        }
    }, []);

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/register');
    };

    const hasGlobalErrors = Object.keys(errors).length > 0;

    return (
        <div className="min-h-screen bg-white font-sans flex flex-col lg:flex-row">
            <Head title="Create Your Account - SamPickle" />

            {/* LEFT COLUMN: Dedicated Brand & Value Showcase (Fullscreen on desktop) */}
            <div className="lg:w-5/12 bg-linear-to-br from-[#064E2B] via-[#085C34] to-[#04331C] text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden">
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

                    {/* Dynamic Hero Messaging based on Role */}
                    <div className="pt-8 lg:pt-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-400/30">
                            {data.role === 'organizer' ? (
                                <>
                                    <SafetyCertificateFilled className="text-amber-400" />
                                    <span>Tournament Director Suite</span>
                                </>
                            ) : (
                                <>
                                    <ThunderboltFilled className="text-amber-300" />
                                    <span>Player Network</span>
                                </>
                            )}
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                            {data.role === 'organizer' ? (
                                <>Run tournaments with <span className="text-amber-400">pro-level</span> precision.</>
                            ) : (
                                <>Compete, track ratings & <span className="text-amber-300">level up</span> your game.</>
                            )}
                        </h1>

                        <p className="text-emerald-100/90 text-sm sm:text-base mt-4 leading-relaxed max-w-md">
                            {data.role === 'organizer'
                                ? 'Automate double-elimination brackets, schedule active courts, assign digital scorekeepers, and stream live results instantly.'
                                : 'Track official DUPR-ready skill ratings, enter local Philippine brackets, follow real-time match callouts, and collect milestone badges.'}
                        </p>
                    </div>

                    {/* Role-specific Highlights Cards */}
                    <div className="pt-6 space-y-3">
                        {data.role === 'organizer' ? (
                            <>
                                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 flex items-start gap-3.5">
                                    <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0">
                                        <TrophyOutlined className="text-lg" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-sm m-0">Instant Auto-Bracketing</h4>
                                        <p className="text-xs text-emerald-100/80 m-0 mt-0.5">
                                            Single & double elimination brackets with automated winner/loser progression.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 flex items-start gap-3.5">
                                    <div className="w-10 h-10 rounded-xl bg-emerald-400/20 text-emerald-300 flex items-center justify-center shrink-0">
                                        <TeamOutlined className="text-lg" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-sm m-0">Live Mobile Scorekeeping</h4>
                                        <p className="text-xs text-emerald-100/80 m-0 mt-0.5">
                                            Court marshals enter points in real-time from any phone without touching your desk.
                                        </p>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 flex items-start gap-3.5">
                                    <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0">
                                        <FireFilled className="text-lg" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-sm m-0">Official DUPR & Skill Ratings</h4>
                                        <p className="text-xs text-emerald-100/80 m-0 mt-0.5">
                                            Automatic rating updates as matches conclude in certified tournaments.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 flex items-start gap-3.5">
                                    <div className="w-10 h-10 rounded-xl bg-emerald-400/20 text-emerald-300 flex items-center justify-center shrink-0">
                                        <UserOutlined className="text-lg" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-sm m-0">One-Click Tournament Registration</h4>
                                        <p className="text-xs text-emerald-100/80 m-0 mt-0.5">
                                            Enter doubles and singles divisions and receive court assignment alerts.
                                        </p>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>

                {/* Bottom Trust Badge */}
                <div className="relative z-10 pt-8 border-t border-white/15 text-xs text-emerald-200/80 flex items-center justify-between">
                    <span>Official Pickleball Tournament Engine</span>
                    <span className="font-semibold text-white">SamPickle v2.0</span>
                </div>
            </div>

            {/* RIGHT COLUMN: Dedicated Fullscreen Form Experience */}
            <div className="lg:w-7/12 bg-slate-50/50 p-6 sm:p-12 lg:p-16 flex flex-col justify-center overflow-y-auto">
                <div className="max-w-xl w-full mx-auto space-y-6">
                    {/* Header Bar */}
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                                Create Account
                            </h2>
                            <p className="text-xs sm:text-sm text-slate-500 mt-1">
                                Choose your role to customize your dashboard & privileges
                            </p>
                        </div>
                        <div className="text-right">
                            <span className="text-xs text-slate-400 block">Existing member?</span>
                            <Link href="/login" className="text-xs font-bold text-emerald-700 hover:text-emerald-800">
                                Sign In →
                            </Link>
                        </div>
                    </div>

                    {/* Interactive Role Selector Cards */}
                    <div>
                        <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                            Select Account Mode (Switchable Anytime)
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                            {/* Player Option */}
                            <button
                                type="button"
                                onClick={() => setData('role', 'player')}
                                className={`relative p-4 rounded-2xl border-2 text-left transition-all cursor-pointer flex flex-col justify-between ${
                                    data.role === 'player'
                                        ? 'border-emerald-700 bg-white shadow-md shadow-emerald-900/5 ring-1 ring-emerald-700'
                                        : 'border-slate-200 bg-white/70 text-slate-700 hover:border-slate-300 hover:bg-white'
                                }`}
                            >
                                {data.role === 'player' && (
                                    <div className="absolute top-3.5 right-3.5 text-emerald-700">
                                        <CheckCircleFilled className="text-lg" />
                                    </div>
                                )}
                                <div>
                                    <div className="flex items-center gap-2.5 mb-1.5">
                                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                                            data.role === 'player' ? 'bg-[#064E2B] text-white' : 'bg-slate-100 text-slate-600'
                                        }`}>
                                            <UserOutlined className="text-base" />
                                        </div>
                                        <div>
                                            <span className="font-black text-slate-900 text-sm block">Player Account</span>
                                            <span className="text-[11px] text-slate-400 font-medium">Free Forever</span>
                                        </div>
                                    </div>
                                    <p className="text-xs text-slate-500 m-0 leading-relaxed mt-2">
                                        Register for brackets, track skill rating, and earn tournament badges.
                                    </p>
                                </div>
                            </button>

                            {/* Organizer Option */}
                            <button
                                type="button"
                                onClick={() => setData('role', 'organizer')}
                                className={`relative p-4 rounded-2xl border-2 text-left transition-all cursor-pointer flex flex-col justify-between ${
                                    data.role === 'organizer'
                                        ? 'border-emerald-700 bg-white shadow-md shadow-emerald-900/5 ring-1 ring-emerald-700'
                                        : 'border-slate-200 bg-white/70 text-slate-700 hover:border-slate-300 hover:bg-white'
                                }`}
                            >
                                {data.role === 'organizer' && (
                                    <div className="absolute top-3.5 right-3.5 text-emerald-700">
                                        <CheckCircleFilled className="text-lg" />
                                    </div>
                                )}
                                <div>
                                    <div className="flex items-center gap-2.5 mb-1.5">
                                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                                            data.role === 'organizer' ? 'bg-[#064E2B] text-white' : 'bg-slate-100 text-slate-600'
                                        }`}>
                                            <TrophyOutlined className="text-base text-amber-400" />
                                        </div>
                                        <div>
                                            <span className="font-black text-slate-900 text-sm block">Tournament Director</span>
                                            <span className="text-[11px] text-amber-700 font-bold">14-Day Pro Trial</span>
                                        </div>
                                    </div>
                                    <p className="text-xs text-slate-500 m-0 leading-relaxed mt-2">
                                        Host tournaments, build brackets, and manage real-time courts.
                                    </p>
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Organizer Trial Callout */}
                    {data.role === 'organizer' && (
                        <div className="rounded-2xl bg-emerald-50/80 p-4 border border-emerald-200 text-xs text-emerald-950 flex items-start gap-3">
                            <SafetyCertificateFilled className="text-emerald-700 text-lg mt-0.5 shrink-0" />
                            <div className="flex-1">
                                <span className="font-bold block text-emerald-900 text-xs">Full Organizer Pro Privileges Included</span>
                                <p className="text-[11px] text-emerald-800 m-0 mt-0.5 leading-normal">
                                    Instant access to bracket generation, court queuing, scorekeeper accounts, and public display boards. No credit card required.
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Form Container */}
                    <form onSubmit={submit} className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                        {/* Organizer Custom Fields */}
                        {data.role === 'organizer' && (
                            <div className="p-4 bg-slate-50/80 rounded-2xl border border-slate-200/80 space-y-3">
                                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                                    Club & Organization Details
                                </span>
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                                        Organization / Club Name <span className="text-red-500">*</span>
                                    </label>
                                    <Input
                                        size="large"
                                        prefix={<BankOutlined className="text-slate-400" />}
                                        value={data.organization_name}
                                        onChange={(e) => setData('organization_name', e.target.value)}
                                        placeholder="e.g. Manila Pickleball Association"
                                        status={errors.organization_name ? 'error' : ''}
                                    />
                                    {errors.organization_name && (
                                        <p className="text-red-500 text-xs mt-1 m-0">{errors.organization_name}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                                        Primary Venue City / Location
                                    </label>
                                    <Input
                                        size="large"
                                        prefix={<EnvironmentOutlined className="text-slate-400" />}
                                        value={data.city}
                                        onChange={(e) => setData('city', e.target.value)}
                                        placeholder="e.g. Bonifacio Global City / Pasig"
                                        status={errors.city ? 'error' : ''}
                                    />
                                    {errors.city && (
                                        <p className="text-red-500 text-xs mt-1 m-0">{errors.city}</p>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Player Custom Fields */}
                        {data.role === 'player' && (
                            <div className="p-4 bg-slate-50/80 rounded-2xl border border-slate-200/80 space-y-2">
                                <label className="block text-xs font-semibold text-slate-700 mb-1">
                                    Self-Assessed Skill Rating (DUPR Level)
                                </label>
                                <Select
                                    size="large"
                                    className="w-full"
                                    value={data.skill_rating}
                                    onChange={(val) => setData('skill_rating', val)}
                                    options={[
                                        { value: '2.5', label: '2.5 — Beginner / Social Player' },
                                        { value: '3.0', label: '3.0 — Novice Competitor' },
                                        { value: '3.5', label: '3.5 — Intermediate Competitor (Recommended)' },
                                        { value: '4.0', label: '4.0 — Advanced Tournament Player' },
                                        { value: '4.5', label: '4.5 — Expert Tournament Player' },
                                        { value: '5.0+', label: '5.0+ — Pro / Open Division' },
                                    ]}
                                />
                                <span className="text-[11px] text-slate-400 block">
                                    Tournaments match your seedings and brackets based on this rating.
                                </span>
                            </div>
                        )}

                        {/* Name Fields (Philippine Standard) */}
                        <div className="space-y-1.5 pt-1">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                                Full Name Information
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                                        First Name <span className="text-red-500">*</span>
                                    </label>
                                    <Input
                                        size="large"
                                        value={data.fname}
                                        onChange={(e) => setData('fname', e.target.value)}
                                        placeholder="Juan"
                                        status={errors.fname ? 'error' : ''}
                                    />
                                    {errors.fname && (
                                        <p className="text-red-500 text-xs mt-1 m-0">{errors.fname}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                                        Middle Name
                                    </label>
                                    <Input
                                        size="large"
                                        value={data.mname}
                                        onChange={(e) => setData('mname', e.target.value)}
                                        placeholder="Optional"
                                        status={errors.mname ? 'error' : ''}
                                    />
                                    {errors.mname && (
                                        <p className="text-red-500 text-xs mt-1 m-0">{errors.mname}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                                        Last Name <span className="text-red-500">*</span>
                                    </label>
                                    <Input
                                        size="large"
                                        value={data.lname}
                                        onChange={(e) => setData('lname', e.target.value)}
                                        placeholder="Dela Cruz"
                                        status={errors.lname ? 'error' : ''}
                                    />
                                    {errors.lname && (
                                        <p className="text-red-500 text-xs mt-1 m-0">{errors.lname}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Biological Sex (Gender) for Tournament Bracket Eligibility */}
                        <div>
                            <div className="flex items-center justify-between mb-1.5">
                                <label className="block text-xs font-semibold text-slate-700">
                                    Sex <span className="text-red-500">*</span>
                                </label>
                                <span className="text-[11px] text-slate-400">
                                    For division brackets (Men's / Women's / Mixed)
                                </span>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    type="button"
                                    onClick={() => setData('sex', 'male')}
                                    className={`py-2.5 px-4 rounded-xl border text-sm transition-all cursor-pointer flex items-center justify-center gap-2 ${
                                        data.sex === 'male'
                                            ? 'border-emerald-700 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-700/20 font-bold'
                                            : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                                    }`}
                                >
                                    <UserOutlined className={data.sex === 'male' ? 'text-emerald-700' : 'text-slate-400'} />
                                    <span>Male</span>
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setData('sex', 'female')}
                                    className={`py-2.5 px-4 rounded-xl border text-sm transition-all cursor-pointer flex items-center justify-center gap-2 ${
                                        data.sex === 'female'
                                            ? 'border-emerald-700 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-700/20 font-bold'
                                            : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                                    }`}
                                >
                                    <UserOutlined className={data.sex === 'female' ? 'text-emerald-700' : 'text-slate-400'} />
                                    <span>Female</span>
                                </button>
                            </div>
                            {errors.sex && (
                                <p className="text-red-500 text-xs mt-1 m-0">{errors.sex}</p>
                            )}
                        </div>

                        {/* Email Address */}
                        <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">
                                Email Address <span className="text-red-500">*</span>
                            </label>
                            <Input
                                size="large"
                                type="email"
                                prefix={<MailOutlined className="text-slate-400" />}
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                placeholder="juan.delacruz@example.com"
                                status={errors.email ? 'error' : ''}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-xs mt-1 m-0">{errors.email}</p>
                            )}
                        </div>

                        {/* Password Fields */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                                <label className="block text-xs font-semibold text-slate-700 mb-1">
                                    Password <span className="text-red-500">*</span>
                                </label>
                                <Input.Password
                                    size="large"
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

                            <div>
                                <label className="block text-xs font-semibold text-slate-700 mb-1">
                                    Confirm Password <span className="text-red-500">*</span>
                                </label>
                                <Input.Password
                                    size="large"
                                    prefix={<LockOutlined className="text-slate-400" />}
                                    value={data.password_confirmation}
                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                    placeholder="••••••••"
                                    status={errors.password_confirmation ? 'error' : ''}
                                />
                                {errors.password_confirmation && (
                                    <p className="text-red-500 text-xs mt-1 m-0">{errors.password_confirmation}</p>
                                )}
                            </div>
                        </div>

                        {/* Global Error Banner */}
                        {hasGlobalErrors && (
                            <Alert
                                title="Please review the highlighted fields above."
                                type="error"
                                showIcon
                                className="rounded-xl text-xs"
                            />
                        )}

                        {/* Primary Submit CTA Button */}
                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={processing}
                            icon={<RocketOutlined />}
                            size="large"
                            className="w-full h-12 font-bold text-sm bg-[#064E2B] hover:bg-[#075F35] text-white rounded-xl shadow-md shadow-emerald-950/20 border-none mt-2"
                        >
                            {data.role === 'organizer'
                                ? 'Start 14-Day Free Organizer Trial'
                                : 'Create Free Player Account'}
                        </Button>

                        <p className="text-[11px] text-slate-400 text-center m-0 pt-2">
                            By continuing, you agree to SamPickle Tournament Rules & Fair Play Guidelines.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
