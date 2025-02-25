import { useTheme } from '@/components/theme-provider';
import { useLocation, useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { MoonIcon } from '@/components/ui/moon';
import { SunIcon } from '@/components/ui/sun';

export default function Header() {
    const { theme, setTheme } = useTheme();
    const location = useLocation();
    const navigate = useNavigate();

    const checkButtonHighlighting = (route: string) => {
        return location.pathname === route ? 'highlighted' : 'neutral';
    };

    return (
        <div className="flex justify-center p-4">
            <div className="flex flex-row bg-main p-4 gap-4 border-2 border-border rounded-base shadow-shadow">
                <Button
                    variant={checkButtonHighlighting('/')}
                    onClick={() => navigate('/')}
                >
                    About
                </Button>
                <Button
                    variant={checkButtonHighlighting('/experience')}
                    onClick={() => navigate('/experience')}
                >
                    Experience
                </Button>
                <Button
                    variant={checkButtonHighlighting('/contact')}
                    onClick={() => navigate('/contact')}
                >
                    Contact me!
                </Button>
            </div>
            <div className="absolute right-8 top-8">
                <Button
                    variant="neutral"
                    size="icon"
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
