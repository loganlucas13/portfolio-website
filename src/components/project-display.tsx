import ImageCard from '@/components/ui/image-card';

interface props {
    image?: string;
    title: string;
    caption: string;
    link: string | undefined;
    technologies: string[];
}

export default function ProjectDisplay({
    image,
    title,
    caption,
    link,
    technologies,
}: props) {
    return (
        <div className="flex flex-col">
            {image && (
                <ImageCard
                    title={title}
                    caption={caption}
                    imageUrl={image}
                    link={link}
                    technologies={technologies}
                />
            )}
        </div>
    );
}
