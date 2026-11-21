import { createInertiaApp } from '@inertiajs/react';
import { App as AntApp, ConfigProvider } from 'antd';
import { sampickleTheme } from './theme/sampickle-theme';
import { initializeTheme } from '@/hooks/use-appearance';

const appName = import.meta.env.VITE_APP_NAME || 'SamPickle';

// Set light / dark mode on load
initializeTheme();

void createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    strictMode: true,
    withApp(app) {
        return (
            <ConfigProvider theme={sampickleTheme}>
                <AntApp>
                    {app}
                </AntApp>
            </ConfigProvider>
        );
    },
    progress: {
        color: '#064E2B',
    },
});


