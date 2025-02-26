import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/header';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { LinkedinIcon } from '@/components/ui/linkedin';
import { GithubIcon } from '@/components/ui/github';
import { MessageCircleIcon } from '@/components/ui/message-circle';
import { BookTextIcon } from '@/components/ui/book-text';
import headshot from '../../assets/imgs/headshot.jpg';

export default function Home() {
    return (
        <div className="min-h-screen w-screen">
            <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
                <Header></Header>
                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-col justify-center w-full sm:w-5/6 md:w-1/2 gap-10 p-8 bg-main border-2 border-border rounded-base shadow-shadow text-text">
                        <div className="flex flex-row gap-4 items-center">
                            <Avatar>
                                <AvatarImage src={headshot}></AvatarImage>
                                <AvatarFallback>LL</AvatarFallback>
                            </Avatar>
                            <div className="px-4 py-2 bg-bw border-2 border-border rounded-base shadow-shadow">
                                <h1 className="text-3xl font-bold">
                                    Logan Lucas
                                </h1>
                                <h2 className="text-xl font-medium">
                                    CS @ UIC
                                </h2>
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

                        <div className="flex flex-col px-4 py-2 gap-4 bg-bw border-2 border-border rounded-base shadow-shadow">
                            <p className="text-lg font-semibold">
                                Hi, I'm Logan.
                            </p>
                            <p className="text-lg">
                                I'm a current Junior studying Computer Science
                                at the{' '}
                                <a
                                    className="underline decoration-main decoration-2 underline-offset-2 hover:cursor-pointer"
                                    href="https://uic.edu"
                                    target="_blank"
                                >
                                    University of Illinois Chicago
                                </a>
                                , graduating in{' '}
                                <span className="p-1 bg-bg rounded-base">
                                    Spring 2026
                                </span>
                                .
                            </p>
                            <p className="text-lg">
                                I love all sorts of development, especially{' '}
                                <span className="p-1 bg-bg rounded-base">
                                    front-end and full-stack development
                                </span>
                                . I'm experimenting with new technologies all of
                                the time, and I'm even developing a game in my
                                spare time - no details yet though!
                            </p>
                            <p className="text-lg">
                                Currently, I'm seeking an{' '}
                                <span className="p-1 bg-bg rounded-base">
                                    internship for Summer 2025
                                </span>
                                . If you're interested, please take a look at my{' '}
                                <a
                                    className="underline decoration-main decoration-2 underline-offset-2 hover:cursor-pointer"
                                    href="/documents/Logan_Lucas_resume.pdf"
                                    target="_blank"
                                >
                                    resume
                                </a>
                                .
                            </p>
                            <p className="text-lg">
                                Thank you so much for visiting, and I hope to be
                                in touch soon!
                            </p>
                        </div>
                    </div>
                </div>
            </ThemeProvider>
        </div>
    );
}
