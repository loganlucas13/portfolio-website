import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/header';

export default function Experience() {
    return (
        <div className="min-h-screen w-screen">
            <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
                <Header></Header>
            </ThemeProvider>
        </div>
    );
}
