import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { Button, Alert } from 'antd';
import {
    MailOutlined,
    LogoutOutlined,
    ArrowLeftOutlined,
    SafetyCertificateFilled,
    CheckCircleFilled,
    TrophyOutlined,
} from '@ant-design/icons';
import SamPickleLogo from '@/components/sampickle-logo';

interface VerifyEmailProps {
    status?: string;
}

export default function VerifyEmail({ status }: VerifyEmailProps) {
    const { post, processing } = useForm({});

    const submitResend = (e: React.FormEvent) => {
        e.preventDefault();
        post('/email/verification-notification');
    };

    const submitLogout = (e: React.FormEvent) => {
        e.preventDefault();
        post('/logout');
    };

    return (
        <div className="min-h-screen bg-white font-sans flex flex-col lg:flex-row">
            <Head title="Verify Email - SamPickle" />

            {/* LEFT COLUMN: Dedicated Brand Showcase */}
            <div className="lg:w-5/12 bg-gradient-to-br from-[#064E2B] via-[#085C34] to-[#04331C] text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-10 left-10 w-96 h-96 border-2 border-white rounded-3xl -rotate-12" />
                    <div className="absolute bottom-10 right-10 w-80 h-80 border-2 border-dashed border-white rounded-full" />
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/40" />
                </div>

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
                            <SafetyCertificateFilled className="text-amber-300" />
                            <span>Account Security & Verification</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                            Verify your email to <span className="text-amber-400">unlock</span> tournament access.
                        </h1>

                        <p className="text-emerald-100/90 text-sm sm:text-base mt-4 leading-relaxed max-w-md">
                            Verifying your email confirms your player identity for official DUPR ratings, bracket seeds, and court assignment notifications.
                        </p>
                    </div>

                    <div className="pt-8 space-y-3">
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 flex items-start gap-3.5">
                            <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0">
                                <TrophyOutlined className="text-lg" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-sm m-0">Verified Player Badge</h4>
                                <p className="text-xs text-emerald-100/80 m-0 mt-0.5">
                                    Guarantees fair play and official tournament eligibility across all clubs.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 flex items-start gap-3.5">
                            <div className="w-10 h-10 rounded-xl bg-emerald-400/20 text-emerald-300 flex items-center justify-center shrink-0">
                                <CheckCircleFilled className="text-lg" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-sm m-0">Live Match Notifications</h4>
                                <p className="text-xs text-emerald-100/80 m-0 mt-0.5">
                                    Receive court assignments and scheduled round callouts via email and SMS.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 pt-8 border-t border-white/15 text-xs text-emerald-200/80 flex items-center justify-between">
                    <span>Official Pickleball Tournament Engine</span>
                    <span className="font-semibold text-white">SamPickle v2.0</span>
                </div>
            </div>

            {/* RIGHT COLUMN: Action Form */}
            <div className="lg:w-7/12 bg-slate-50/50 p-6 sm:p-12 lg:p-16 flex flex-col justify-center overflow-y-auto">
                <div className="max-w-md w-full mx-auto space-y-6">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                            Check Your Inbox
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                            Thanks for signing up! Before getting started, please verify your email address by clicking the link we just sent to you.
                        </p>
                    </div>

                    <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-5">
                        {status === 'verification-link-sent' && (
                            <div className='my-4'>
                                <Alert
                                    title="Email Sent!"
                                    description="A fresh verification link has been sent to your email address!"
                                    type="success"
                                    showIcon
                                    className="rounded-xl text-xs"
                                />
                            </div>
                        )}

                        <div className="p-4 bg-emerald-50/60 rounded-2xl border border-emerald-200/70 text-xs text-emerald-950 flex items-start gap-3">
                            <MailOutlined className="text-emerald-700 text-lg mt-0.5 shrink-0" />
                            <div className="leading-relaxed">
                                <span className="font-bold block text-emerald-900">Didn't receive the email?</span>
                                <span>Check your spam folder or click below to request another verification email.</span>
                            </div>
                        </div>

                        <form onSubmit={submitResend}>
                            <Button
                                type="primary"
                                htmlType="submit"
                                loading={processing}
                                icon={<MailOutlined />}
                                size="large"
                                className="w-full h-12 font-bold text-sm bg-[#064E2B] hover:bg-[#075F35] text-white rounded-xl shadow-md shadow-emerald-950/20 border-none"
                            >
                                Resend Verification Email
                            </Button>
                        </form>

                        <form onSubmit={submitLogout} className="pt-2 text-center border-t border-slate-100">
                            <Button
                                type="text"
                                htmlType="submit"
                                icon={<LogoutOutlined />}
                                className="text-xs font-semibold text-slate-500 hover:text-red-600"
                            >
                                Sign Out
                            </Button>
                        </form>
                    </div>

                    <div className="text-center text-xs text-slate-400">
                        Need to use a different email? Sign out above and register again.
                    </div>
                </div>
            </div>
        </div>
    );
}
