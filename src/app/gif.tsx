import Image from 'next/image'

interface IProps {
    src: string;
    width: number;
    height: number;
    alt: string;
}

export default function Gif({ src, width, height, alt }: IProps) {
    return (
        <Image
            src={src}
            width={width}
            height={height}
            alt={alt}
        />
    )
}