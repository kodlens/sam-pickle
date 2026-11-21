import { useState, useEffect } from 'react';
import { Form, Head, Link } from '@inertiajs/react';
import InputError from '@/components/input-error';
import PasswordInput from '@/components/password-input';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { login } from '@/routes';
import { store } from '@/routes/register';
import { Tag } from 'antd';
import { TrophyOutlined, UserOutlined, ShopOutlined } from '@ant-design/icons';

type Props = {
    passwordRules: string;
};

export default function Register({ passwordRules }: Props) {
    const [role, setRole] = useState<'player' | 'organizer'>('player');

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const roleParam = params.get('role');
        if (roleParam === 'organizer' || roleParam === 'player') {
            setRole(roleParam);
        }
    }, []);

    return (
        <>
            <Head title="Create Your SamPickle Account" />

            {/* ROLE SELECTOR CARDS */}
            <div className="grid grid-cols-2 gap-3 mb-2">
                <button
                    type="button"
                    onClick={() => setRole('player')}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        role === 'player'
                            ? 'border-emerald-600 bg-emerald-50/70 text-emerald-950 ring-2 ring-emerald-600/20'
                            : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                    }`}
                >
                    <div className="flex items-center gap-1.5 font-bold text-sm">
                        <UserOutlined className={role === 'player' ? 'text-emerald-700' : 'text-slate-400'} />
                        <span>Player</span>
                    </div>
                    <p className="text-[11px] text-slate-500 m-0 mt-1 leading-tight">
                        Compete & earn badges
                    </p>
                </button>

                <button
                    type="button"
                    onClick={() => setRole('organizer')}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        role === 'organizer'
                            ? 'border-emerald-600 bg-emerald-50/70 text-emerald-950 ring-2 ring-emerald-600/20'
                            : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                    }`}
                >
                    <div className="flex items-center gap-1.5 font-bold text-sm">
                        <TrophyOutlined className={role === 'organizer' ? 'text-amber-600' : 'text-slate-400'} />
                        <span>Organizer</span>
                    </div>
                    <p className="text-[11px] text-slate-500 m-0 mt-1 leading-tight">
                        Host & run tournaments
                    </p>
                </button>
            </div>

            {role === 'organizer' && (
                <div className="rounded-lg bg-emerald-50 p-2.5 border border-emerald-200 text-xs text-emerald-900 flex items-center justify-between">
                    <span className="font-semibold">Includes 14-Day Free Pro Trial</span>
                    <Tag color="success" className="m-0 text-[10px]">No Card Needed</Tag>
                </div>
            )}

            <Form
                {...store.form()}
                resetOnSuccess={['password', 'password_confirmation']}
                disableWhileProcessing
                className="flex flex-col gap-5 mt-2"
            >
                {({ processing, errors }) => (
                    <>
                        {/* Hidden role input */}
                        <input type="hidden" name="role" value={role} />

                        <div className="grid gap-4">
                            {/* Role specific: Organizer fields */}
                            {role === 'organizer' && (
                                <>
                                    <div className="grid gap-1.5">
                                        <Label htmlFor="organization_name">Organization / Club Name *</Label>
                                        <Input
                                            id="organization_name"
                                            type="text"
                                            required
                                            tabIndex={1}
                                            name="organization_name"
                                            placeholder="e.g. Austin Pickleball Association"
                                        />
                                        <InputError message={errors.organization_name} />
                                    </div>

                                    <div className="grid gap-1.5">
                                        <Label htmlFor="city">City / State</Label>
                                        <Input
                                            id="city"
                                            type="text"
                                            tabIndex={2}
                                            name="city"
                                            placeholder="e.g. Austin, TX"
                                        />
                                        <InputError message={errors.city} />
                                    </div>
                                </>
                            )}

                            {/* Role specific: Player fields */}
                            {role === 'player' && (
                                <div className="grid gap-1.5">
                                    <Label htmlFor="skill_rating">Self-Assessed Skill Rating</Label>
                                    <select
                                        id="skill_rating"
                                        name="skill_rating"
                                        defaultValue="3.5"
                                        className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                    >
                                        <option value="2.5">2.5 - Beginner / Social</option>
                                        <option value="3.0">3.0 - Intermediate Novice</option>
                                        <option value="3.5">3.5 - Intermediate Competitor</option>
                                        <option value="4.0">4.0 - Advanced Tournament Player</option>
                                        <option value="4.5">4.5 - Expert Competitor</option>
                                        <option value="5.0+">5.0+ - Pro / Open Division</option>
                                    </select>
                                    <InputError message={errors.skill_rating} />
                                </div>
                            )}

                            {/* Common Name */}
                            <div className="grid gap-1.5">
                                <Label htmlFor="name">Your Full Name *</Label>
                                <Input
                                    id="name"
                                    type="text"
                                    required
                                    autoComplete="name"
                                    name="name"
                                    placeholder="Jane Doe"
                                />
                                <InputError message={errors.name} />
                            </div>

                            {/* Common Email */}
                            <div className="grid gap-1.5">
                                <Label htmlFor="email">Email Address *</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    name="email"
                                    placeholder="jane@example.com"
                                />
                                <InputError message={errors.email} />
                            </div>

                            {/* Password */}
                            <div className="grid gap-1.5">
                                <Label htmlFor="password">Password *</Label>
                                <PasswordInput
                                    id="password"
                                    required
                                    autoComplete="new-password"
                                    name="password"
                                    placeholder="Create password"
                                    passwordrules={passwordRules}
                                />
                                <InputError message={errors.password} />
                            </div>

                            {/* Confirm Password */}
                            <div className="grid gap-1.5">
                                <Label htmlFor="password_confirmation">Confirm Password *</Label>
                                <PasswordInput
                                    id="password_confirmation"
                                    required
                                    autoComplete="new-password"
                                    name="password_confirmation"
                                    placeholder="Repeat password"
                                    passwordrules={passwordRules}
                                />
                                <InputError message={errors.password_confirmation} />
                            </div>

                            <Button
                                type="submit"
                                className="mt-2 w-full bg-[#064E2B] hover:bg-[#075F35] text-white font-bold h-11"
                                data-test="register-user-button"
                            >
                                {processing && <Spinner />}
                                {role === 'organizer' ? 'Register as Organizer' : 'Create Player Account'}
                            </Button>
                        </div>

                        <div className="text-center text-sm text-muted-foreground mt-2">
                            Already have an account?{' '}
                            <TextLink href={login()}>
                                Log in
                            </TextLink>
                        </div>
                    </>
                )}
            </Form>
        </>
    );
}

Register.layout = {
    title: 'Join SamPickle',
    description: 'Create your account to start competing or hosting tournaments',
};
