export type PlayerProfile = {
    id: number;
    user_id: number;
    skill_rating: string;
    dupr_id: string | null;
    milestone_points: number;
    preferred_hand: string | null;
    badges: any[] | null;
    created_at?: string;
    updated_at?: string;
};

export type OrganizerProfile = {
    id: number;
    user_id: number;
    organization_name: string;
    city: string | null;
    contact_number: string | null;
    verified_status: string;
    created_at?: string;
    updated_at?: string;
};

export type User = {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    role: 'player' | 'organizer' | 'admin';
    active_role: 'player' | 'organizer' | 'admin';
    can_organize: boolean;
    can_play: boolean;
    subscription_type: string;
    subscription_status: string;
    trial_ends_at: string | null;
    player_profile?: PlayerProfile | null;
    organizer_profile?: OrganizerProfile | null;
    email_verified_at: string | null;
    two_factor_enabled?: boolean;
    created_at: string;
    updated_at: string;
    [key: string]: unknown;
};

export type Auth = {
    user: User;
};

export type Passkey = {
    id: number;
    name: string;
    authenticator: string | null;
    created_at_diff: string;
    last_used_at_diff: string | null;
};

export type TwoFactorSetupData = {
    svg: string;
    url: string;
};

export type TwoFactorSecretKey = {
    secretKey: string;
};
