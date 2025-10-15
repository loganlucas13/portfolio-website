import { useEffect } from 'react';
import { ThemeProvider, useTheme } from '@/components/theme-provider';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/header';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { LinkedinIcon } from '@/components/ui/linkedin';
import { GithubIcon } from '@/components/ui/github';
import { MessageCircleIcon } from '@/components/ui/message-circle';
import { BookTextIcon } from '@/components/ui/book-text';
import headshot from '../../assets/imgs/headshot.jpg';

export default function Home() {
    // in case document title doesn't automatically get set by Helmet (strange, but this fixes it!)
    useEffect(() => {
        document.title = 'Logan Lucas | Full-Stack Developer';
    }, []);

    return (
        <>
            <Helmet>
                <title>Logan Lucas | Full-Stack Developer</title>
                <meta
                    name="description"
                    content="Portfolio website of Logan Lucas, Full-Stack developer in Chicago."
                />
                <meta
                    name="keywords"
                    content="Logan Lucas, full-stack developer, software engineer, portfolio, React, TypeScript, JavaScript, Chicago, Illinois"
                />
                <link rel="canonical" href="https://loganlucas.dev/" />

                <meta
                    property="og:title"
                    content="Logan Lucas | Full-Stack Developer"
                />
                <meta
                    property="og:description"
                    content="Full Stack Developer located in Chicago. View projects and experience."
                />
                <meta property="og:image" content="/headshot.jpg" />
                <meta property="og:url" content="https://loganlucas.dev/" />
                <meta property="og:type" content="website" />
            </Helmet>

            <div className="flex flex-col min-h-screen w-screen items-center">
                <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
                    <Header />
                    <InnerHome />
                </ThemeProvider>
            </div>
        </>
    );
}

export const InnerHome = () => {
    const { theme } = useTheme();
    const textHighlighting = theme === 'light' ? 'bg-bg' : 'bg-[#6f638d]';
    console.log(theme);
    return (
        <>
            <div className="flex flex-col items-center justify-center w-2/3 md:w-1/2">
                <div className="flex flex-col gap-10 p-8 bg-main border-2 border-border rounded-base shadow-shadow text-text">
                    <div className="flex flex-row gap-4 items-center">
                        <Avatar>
                            <AvatarImage src={headshot}></AvatarImage>
                            <AvatarFallback>LL</AvatarFallback>
                        </Avatar>
                        <div className="px-4 py-2 bg-bw border-2 border-border rounded-base shadow-shadow transition-all">
                            <h1 className="text-3xl font-bold">Logan Lucas</h1>
                            <h2 className="text-xl font-medium">CS @ UIC</h2>
                        </div>
                        <div className="flex flex-grow"></div>
                        <div className="flex flex-row gap-4 justify-end">
                            <Button
                                className="pr-3 group"
                                variant="neutral"
                                size="lg"
                                onClick={() =>
                                    window.open(
                                        '/documents/Logan_Lucas_resume.pdf',
                                        '_blank',
                                        'noopener,noreferrer'
                                    )
                                }
                            >
                                <BookTextIcon size={64} className="group" />
                                Resume
                            </Button>
                            <Button variant="neutral" size="icon">
                                <GithubIcon
                                    size={64}
                                    onClick={() =>
                                        window.open(
                                            'https://github.com/loganlucas13'
                                        )
                                    }
                                />
                            </Button>
                            <Button variant="neutral" size="icon">
                                <LinkedinIcon
                                    size={64}
                                    onClick={() =>
                                        window.open(
                                            'https://linkedin.com/in/loganlucas13'
                                        )
                                    }
                                />
                            </Button>
                            <Button variant="neutral" size="icon">
                                <MessageCircleIcon
                                    size={64}
                                    onClick={() =>
                                        window.open(
                                            'mailto:logs10658@gmail.com'
                                        )
                                    }
                                />
                            </Button>
                        </div>
                    </div>

                    <div className="flex flex-col px-4 py-2 gap-6 md:gap-4 bg-bw border-2 border-border rounded-base shadow-shadow transition-all">
                        <p className="text-3xl md:text-lg font-semibold">
                            Hi, I'm Logan.
                        </p>
                        <p className="text-2xl md:text-lg leading-9">
                            I'm a current Senior studying Computer Science at
                            the{' '}
                            <a
                                className="underline decoration-main decoration-2 underline-offset-2 hover:cursor-pointer"
                                href="https://uic.edu"
                                target="_blank"
                            >
                                University of Illinois Chicago
                            </a>
                            , graduating in{' '}
                            <span
                                className={`transition-all p-[0.0625rem] rounded-base ${textHighlighting}`}
                            >
                                Spring 2026
                            </span>
                            .
                        </p>
                        <p className="text-2xl md:text-lg leading-9">
                            I love all sorts of development, especially{' '}
                            <span
                                className={`transition-all p-[0.0625rem] rounded-base ${textHighlighting}`}
                            >
                                full-stack, frontend, and systems development
                            </span>
                            . I'm experimenting with new technologies all of the
                            time, and I'm even working on multiple projects as
                            you're reading this!
                        </p>
                        <p className="text-2xl md:text-lg leading-9">
                            Thank you so much for visiting!
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
