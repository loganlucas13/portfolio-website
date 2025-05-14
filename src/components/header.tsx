import { useTheme } from '@/components/theme-provider';
import { useLocation, useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { MoonIcon } from '@/components/ui/moon';
import { SunIcon } from '@/components/ui/sun';

export default function Header() {
    const { theme, setTheme } = useTheme();
    const location = useLocation();
    const navigate = useNavigate();

    const getHighlightingVariant = (route: string) => {
        if (location.pathname !== route) {
            return 'neutral';
        }
        return theme === 'dark' ? 'highlighted_dark' : 'highlighted';
    };

    return (
        <div className="flex justify-center p-4 pb-32 lg:pb-8">
            <div className="flex flex-row bg-main p-4 gap-4 border-2 border-border rounded-base shadow-shadow">
                <Button
                    variant={getHighlightingVariant('/')}
                    onClick={() => navigate('/')}
                >
                    About me!
                </Button>
                <Button
                    variant={getHighlightingVariant('/experience')}
                    onClick={() => navigate('/experience')}
                >
                    Experience
                </Button>
                <Button
                    variant="neutral"
                    size="sm"
                    onClick={() =>
                        setTheme(theme === 'dark' ? 'light' : 'dark')
                    }
                >
                    {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
                </Button>
            </div>
        </div>
    );
}
