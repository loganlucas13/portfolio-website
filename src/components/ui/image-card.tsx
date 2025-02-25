import { Button } from '@/components/ui/button';
import { GithubIcon } from '@/components/ui/github';
import { Badge } from '@/components/ui/badge';

type Props = {
    imageUrl: string;
    title: string;
    caption: string;
    link: string;
    technologies: string[];
};

export default function ImageCard({
    imageUrl,
    title,
    caption,
    link,
    technologies,
}: Props) {
    return (
        <div className="flex flex-col items-center justify-center">
            <figure className="w-[450px] overflow-hidden rounded-base border-2 border-border bg-main font-base shadow-shadow">
                <img className="w-full h-[330px]" src={imageUrl} alt="image" />
                <figcaption className="flex border-t-2 text-text border-border p-4">
                    <div className="flex flex-col border-2 border-border bg-bw p-4 shadow-shadow rounded-base gap-2 leading-5">
                        <p className="font-semibold">{title}</p>
                        <p
                            className="pl-4"
                            dangerouslySetInnerHTML={{
                                __html: caption.replace(/\n/g, '<br/>'),
                            }}
                        ></p>
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-row gap-2 mt-auto">
                                {technologies.map((tech) => (
                                    <Badge key={tech} variant="neutral">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                            <Button
                                className="self-end text-text"
                                size="icon"
                                variant="neutral"
                                onClick={() => window.open(link)}
                            >
                                <GithubIcon />
                            </Button>
                        </div>
                    </div>
                </figcaption>
            </figure>
        </div>
    );
}
