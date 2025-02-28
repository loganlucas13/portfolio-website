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
            <figure className="w-fit lg:w-[450px] h-[750px] lg:h-fit overflow-hidden rounded-base border-2 border-border bg-main font-base lg:shadow-shadow">
                <img className="w-full h-[330px]" src={imageUrl} alt="image" />
                <figcaption className="flex border-t-2 text-text border-border p-4">
                    <div className="flex flex-col h-[380px] lg:h-fit border-2 border-border bg-bw p-4 shadow-shadow rounded-base gap-2 leading-9">
                        <p className="text-3xl lg:text-base font-semibold">
                            {title}
                        </p>
                        <p
                            className="pl-4 text-xl lg:text-base font-normal"
                            dangerouslySetInnerHTML={{
                                __html: caption.replace(/\n/g, '<br/>'),
                            }}
                        ></p>
                        <div className="flex flex-row justify-between mt-auto">
                            <div className="flex flex-row gap-2 py-2 items-end self-end">
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
