import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/header';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import ProjectDisplay from '@/components/project-display';
import localBitesImage from '../../assets/imgs/local-bites.png';
import brokerXImage from '../../assets/imgs/broker-x.png';
import webTunerImage from '../../assets/imgs/web-tuner.png';
import threeCardPokerImage from '../../assets/imgs/three-card-poker.png';

const entries: ProjectEntry[] = [
    {
        image: localBitesImage,
        title: 'LocalBites - created for SparkHacks 2025',
        caption:
            'Having trouble finding a place to eat? Try LocalBites!\n\n This web app gathers data from the Google Search and Google Places APIs to find delicious places to eat – all while prioritizing small businesses!\n',
        link: 'https://github.com/loganlucas13/date-planner/tree/main',
        technologies: ['React', 'TypeScript', 'Python', 'Django'],
    },
    {
        image: brokerXImage,
        title: 'BrokerX',
        caption:
            'Your new personal stock assistant.\n\n Gathers data in real time from social media websites, displaying an up-to-date sentiment analysis on any stock.\n\n\n',
        link: 'https://github.com/loganlucas13/broker-x/tree/main',
        technologies: ['React', 'TypeScript', 'Go'],
    },
    {
        image: webTunerImage,
        title: 'WebTuner',
        caption:
            "A download-free guitar tuning website.\n\n Retrieves audio input from your browser using JavaScript's Media Devices API, providing visualization and analysis. Made to get around paywalls found on popular mobile alternatives!\n\n",
        link: 'https://github.com/loganlucas13/web-tuner/tree/main',
        technologies: ['JavaScript', 'Python', 'Flask'],
    },
    {
        image: threeCardPokerImage,
        title: 'Three Card Poker',
        caption:
            'Retro-themed three card poker implementation in Java.\n\n Two versions available - a local game for two players or a server-hosted version with support for many more!\n\n',
        link: 'https://github.com/loganlucas13/three-card-poker/tree/main',
        technologies: ['Java', 'JavaFX', 'CSS'],
    },
];

interface ProjectEntry {
    image: string;
    title: string;
    caption: string;
    link: string;
    technologies: string[];
}

export default function Experience() {
    return (
        <>
            <div className="min-h-screen w-screen">
                <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
                    <Header></Header>
                    <div className="flex flex-col items-center justify-center gap-4">
                        <Carousel className="flex flex-col max-w-[455px] h-full justify-center">
                            <CarouselContent>
                                {entries.map((entry, index) => (
                                    <CarouselItem key={index}>
                                        <ProjectDisplay
                                            image={entry.image}
                                            title={entry.title}
                                            caption={entry.caption}
                                            link={entry.link}
                                            technologies={entry.technologies}
                                        />
                                    </CarouselItem>
                                ))}
                                <CarouselItem>
                                    <div className="items-center justify-center w-full bg-transparent border-border text-text p-4 pt-12">
                                        <div className="items-center justify-center bg-bw border-2 border-border text-text p-4 rounded-base shadow-shadow text-center">
                                            If you would like to see more of my
                                            work, please go to my{' '}
                                            <a
                                                className="underline decoration-main decoration-2 underline-offset-2 hover:cursor-pointer"
                                                href="https://github.com/loganlucas13"
                                                target="_blank"
                                            >
                                                GitHub page
                                            </a>
                                            !
                                        </div>
                                    </div>
                                </CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                </ThemeProvider>
            </div>
        </>
    );
}
