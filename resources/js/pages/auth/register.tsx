import React, { useEffect } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { Tag, Button } from 'antd';
import { UserOutlined, TrophyOutlined, RocketOutlined } from '@ant-design/icons';

export default function Register() {
    const { data, setData, post, processing, errors } = useForm({
        role: 'player',
        fname: '',
        mname: '',
        lname: '',
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

    return (
        <div className="space-y-6">
            <Head title="Create Your Account - SamPickle" />

            {/* ROLE SELECTOR CARDS */}
            <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                    Choose Account Type
                </label>
                <div className="grid grid-cols-2 gap-3">
                    <button
                        type="button"
                        onClick={() => setData('role', 'player')}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                            data.role === 'player'
                                ? 'border-emerald-600 bg-emerald-50/70 text-emerald-950 ring-2 ring-emerald-600/20'
                                : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                        }`}
                    >
                        <div className="flex items-center gap-1.5 font-bold text-sm">
                            <UserOutlined className={data.role === 'player' ? 'text-emerald-700' : 'text-slate-400'} />
                            <span>Player</span>
                        </div>
                        <p className="text-[11px] text-slate-500 m-0 mt-1 leading-tight">
                            Compete & earn badges
                        </p>
                    </button>

                    <button
                        type="button"
                        onClick={() => setData('role', 'organizer')}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                            data.role === 'organizer'
                                ? 'border-emerald-600 bg-emerald-50/70 text-emerald-950 ring-2 ring-emerald-600/20'
                                : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                        }`}
                    >
                        <div className="flex items-center gap-1.5 font-bold text-sm">
                            <TrophyOutlined className={data.role === 'organizer' ? 'text-amber-600' : 'text-slate-400'} />
                            <span>Organizer</span>
                        </div>
                        <p className="text-[11px] text-slate-500 m-0 mt-1 leading-tight">
                            Host tournaments & courts
                        </p>
                    </button>
                </div>
            </div>

            {data.role === 'organizer' && (
                <div className="rounded-lg bg-emerald-50 p-2.5 border border-emerald-200 text-xs text-emerald-900 flex items-center justify-between">
                    <span className="font-semibold">Includes 14-Day Free Pro Trial</span>
                    <Tag color="success" className="m-0 text-[10px] font-bold">No Card Needed</Tag>
                </div>
            )}

            <form onSubmit={submit} className="space-y-4">
                {/* Organizer Specific Fields */}
                {data.role === 'organizer' && (
                    <>
                        <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">
                                Organization / Club Name *
                            </label>
                            <input
                                type="text"
                                required
                                value={data.organization_name}
                                onChange={(e) => setData('organization_name', e.target.value)}
                                placeholder="e.g. Austin Pickleball Club"
                                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                            />
                            {errors.organization_name && (
                                <p className="text-red-500 text-xs mt-1">{errors.organization_name}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">
                                City / Location
                            </label>
                            <input
                                type="text"
                                value={data.city}
                                onChange={(e) => setData('city', e.target.value)}
                                placeholder="e.g. Austin, TX"
                                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                            />
                            {errors.city && (
                                <p className="text-red-500 text-xs mt-1">{errors.city}</p>
                            )}
                        </div>
                    </>
                )}

                {/* Player Specific Fields */}
                {data.role === 'player' && (
                    <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Self-Assessed Skill Rating
                        </label>
                        <select
                            value={data.skill_rating}
                            onChange={(e) => setData('skill_rating', e.target.value)}
                            className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                        >
                            <option value="2.5">2.5 - Beginner / Social Player</option>
                            <option value="3.0">3.0 - Intermediate Novice</option>
                            <option value="3.5">3.5 - Intermediate Competitor</option>
                            <option value="4.0">4.0 - Advanced Tournament Player</option>
                            <option value="4.5">4.5 - Expert Competitor</option>
                            <option value="5.0+">5.0+ - Pro / Open Division</option>
                        </select>
                        {errors.skill_rating && (
                            <p className="text-red-500 text-xs mt-1">{errors.skill_rating}</p>
                        )}
                    </div>
                )}

                {/* Name Fields: First, Middle, Last */}
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                            First Name *
                        </label>
                        <input
                            type="text"
                            required
                            value={data.fname}
                            onChange={(e) => setData('fname', e.target.value)}
                            placeholder="Juan"
                            className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                        />
                        {errors.fname && (
                            <p className="text-red-500 text-xs mt-1">{errors.fname}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Middle Name
                        </label>
                        <input
                            type="text"
                            value={data.mname}
                            onChange={(e) => setData('mname', e.target.value)}
                            placeholder="Optional"
                            className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                        />
                        {errors.mname && (
                            <p className="text-red-500 text-xs mt-1">{errors.mname}</p>
                        )}
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Last Name *
                    </label>
                    <input
                        type="text"
                        required
                        value={data.lname}
                        onChange={(e) => setData('lname', e.target.value)}
                        placeholder="Dela Cruz"
                        className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                    />
                    {errors.lname && (
                        <p className="text-red-500 text-xs mt-1">{errors.lname}</p>
                    )}
                </div>

                {/* Email Address */}
                <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address *
                    </label>
                    <input
                        type="email"
                        required
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        placeholder="juan@example.com"
                        className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                </div>

                {/* Password & Confirmation */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Password *
                        </label>
                        <input
                            type="password"
                            required
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            placeholder="••••••••"
                            className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                        />
                        {errors.password && (
                            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Confirm Password *
                        </label>
                        <input
                            type="password"
                            required
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            placeholder="••••••••"
                            className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                        />
                        {errors.password_confirmation && (
                            <p className="text-red-500 text-xs mt-1">{errors.password_confirmation}</p>
                        )}
                    </div>
                </div>

                {/* Submit Button */}
                <Button
                    type="primary"
                    htmlType="submit"
                    loading={processing}
                    icon={<RocketOutlined />}
                    className="w-full h-11 font-bold text-sm bg-[#064E2B] hover:bg-[#075F35] text-white mt-2"
                >
                    {data.role === 'organizer' ? 'Register as Organizer' : 'Create Player Account'}
                </Button>
            </form>

            <div className="text-center text-sm text-slate-500 pt-2 border-t border-slate-100">
                Already have an account?{' '}
                <Link href="/login" className="font-semibold text-emerald-700 hover:text-emerald-800">
                    Sign in here
                </Link>
            </div>
        </div>
    );
}

Register.layout = {
    title: 'Join SamPickle',
    description: 'Register as an organizer or player in seconds',
};
