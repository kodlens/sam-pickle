import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { Button, Checkbox } from 'antd';
import { LoginOutlined } from '@ant-design/icons';

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

    return (
        <div className="space-y-6">
            <Head title="Sign In - SamPickle" />

            <form onSubmit={submit} className="space-y-4">
                {/* Email Address */}
                <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address *
                    </label>
                    <input
                        type="email"
                        required
                        autoFocus
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        placeholder="your.email@example.com"
                        className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                </div>

                {/* Password */}
                <div>
                    <div className="flex items-center justify-between mb-1">
                        <label className="block text-xs font-semibold text-slate-700">
                            Password *
                        </label>
                    </div>
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

                {/* Remember Me */}
                <div className="flex items-center justify-between pt-1">
                    <label className="flex items-center gap-2 text-xs text-slate-600 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                            className="rounded border-slate-300 text-emerald-700 focus:ring-emerald-600"
                        />
                        <span>Remember me on this device</span>
                    </label>
                </div>

                {/* Submit Button */}
                <Button
                    type="primary"
                    htmlType="submit"
                    loading={processing}
                    icon={<LoginOutlined />}
                    className="w-full h-11 font-bold text-sm bg-[#064E2B] hover:bg-[#075F35] text-white mt-2"
                >
                    Sign In
                </Button>
            </form>

            <div className="text-center text-sm text-slate-500 pt-2 border-t border-slate-100">
                Don't have an account yet?{' '}
                <Link href="/register" className="font-semibold text-emerald-700 hover:text-emerald-800">
                    Create an account
                </Link>
            </div>
        </div>
    );
}

Login.layout = {
    title: 'Welcome Back',
    description: 'Sign in to access your tournament brackets or player dashboard',
};
